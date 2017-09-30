/**
 * Created by Sasha-Moscow on 30.09.17.
 */

function multiply(first, second) {

    if (first.length < second.length) {
        buf = first;
        first = second;
        second = buf;
    }
    // IF EQUAL??? INT MEASUARMENT!!!

    first_end = first.length - 1;
    second_end = second.length - 1;

    var a = [];
    var tmp = undefined;

    for (i = 0; i < second.length; i++) {

        for (j = 0; j < first.length; j++) {

            a[j] = second[second_end] * first[first_end - j];

            if (tmp !== undefined) { // если что-то запоминали
                a[j] = a[j] + parseInt(tmp); // складываем с тем что запоминали
                tmp = undefined;
            }

            if (a[j].toString().length > 1 && j != first_end) { // если двузначное число получилось при умножении
                tmp = a[j].toString();
                a[j] = tmp[1]; // заносим вторую цифру от двузначного числа
                tmp = tmp[0]; // запоминаем первую цифру от двузнач
            }

        }
    }


    return [a, tmp, a[4]];
    //return c.toString();
}

// multiply('30125','19444');


console.log(multiply('30125', '19444'));


//for (i=0; i < 3; i++){
//
//    for (j=0; j < 5; j++){
//
//        a[j] = second[second_end] * first[first_end - j];
//
//    }
//
//}