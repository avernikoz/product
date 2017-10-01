/**
 * Created by Sasha-Moscow on 30.09.17.
 */

function multiply(first, second) {

    if (parseInt(first) < parseInt(second)) {
        buf = first;
        first = second;
        second = buf;
    }
    // IF EQUAL??? INT MEASUARMENT!!!

    first_end = first.length - 1;
    second_end = second.length - 1;

    var a = [];
    var tmp = undefined;
    var res = [];
    var rowcount;

    for (i = 0; i < second.length; i++) {

        for (j = 0; j < first.length; j++) {



            a[a.length] = second[second_end-i] * first[first_end - j];

            if (tmp !== undefined) { // если что-то запоминали
                a[a.length-1] = a[a.length-1] + parseInt(tmp); // складываем с тем что запоминали
                tmp = undefined;
            }

            if (a[a.length-1].toString().length > 1) { // если двузначное число получилось при умножении
                tmp = a[a.length-1].toString();
                a[a.length-1] = parseInt(tmp[1]); // заносим вторую цифру от двузначного числа
                tmp = tmp[0]; // запоминаем первую цифру от двузнач

                if (j == first_end){
                    a[a.length] = parseInt(tmp);
                    tmp = undefined;
                }
            }

        }
        res[i] = a.splice(0,first.length+1);
        for (k=0; k < i; k++){
            res[i].unshift(0);
        }
        rowcount = i;
    }

    // res.reverse();
    var modif = first.length;

    // for (i=0; 0 < a.length; i++){
    //     res[i] = a.splice(0,first.length);
    //     for (j = 0; j > 0; j--) {

            // res[i].unshift(0);
        // }
    // }

    // for (i=0; i < 5; i++){
    //     for (j = i; j < 5; j++) {
    //
    //         res[i].push(0);
    //     }
    // }
    //
    //
    // var result = [];
    //     for (j = 0; j < 5; j++) {
    //         result = +result + +res[j][6];
    // }

    var maxcolcount = res[rowcount].length-1;
    var alpha = 0;

    for (j=0; j <= maxcolcount; j++){
        for (i=0; i <= rowcount; i++){
            if (res[i][j] == undefined){
                continue;
            }
            alpha += res[i][j];
        }
    }

    return [a, tmp, res,'selected = '+res[0][7],'result = '+alpha,'maxcolcount = '+ maxcolcount,'rowcount = '+ rowcount, res[1].length-1];
}

// multiply('30125','19444');


console.log(multiply('82924685', '31254381'));


//for (i=0; i < 3; i++){
//
//    for (j=0; j < 5; j++){
//
//        a[j] = second[second_end] * first[first_end - j];
//
//    }
//
//}