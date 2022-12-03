// Khai báo biến toàn cục. Các thống số cài đặt được nhập vào
/* Chí số môi trường */
var pH_min, pH_max, Temp_min, Temp_max, LW_min, LW_max

/* Thông số điều khiển */
var RTime_1, RTime_2, RTime_3, RTime_4
var PTime_1, PTime_2, PTime_3, PTime_4

var Tperiod, Tperiod_t

// Lấy giá trị nhập vào
function getValue_input() {

    pH_min = document.getElementById(pH_min);
    pH_max = document.getElementById(pH_max);
    Temp_min = document.getElementById(Temp_min);
    Temp_max = document.getElementById(Temp_max);
    LW_min = document.getElementById(LW_min);
    LW_max = document.getElementById(LW_max);

    RTime_1 = document.getElementById(RTime_1);
    RTime_2 = document.getElementById(RTime_2);
    RTime_3 = document.getElementById(RTime_3);
    RTime_4 = document.getElementById(RTime_4);

    PTime_1 = document.getElementById(PTime_1);
    PTime_2 = document.getElementById(PTime_2);
    PTime_3 = document.getElementById(PTime_3);
    PTime_4 = document.getElementById(PTime_4);

    Tperiod = document.getElementById(Tperiod);
    Tperiod_t = document.getElementById(Tperiod_t);
}

function Mode_controller() {
    var Mode_controller = document.getElementById(Mode_control);
    if (Mode_controller == "Tự động theo thời gian trong ngày") {
        alert("Mode1");
    } else if (Mode_controller == "Tự động theo chu kỳ") {
        alert("Mode2");
    } else if (Mode_controller == "Thủ công") {
        alert("Mode3");
    } else {
        alert("Mode_Other" + Mode_controller);
    }
}