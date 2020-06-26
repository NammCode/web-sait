
var show = false;

function hideMess() {
    if (show == false) {
        document.getElementById("showthis").style.visibility = "visible";
        show = true;
    } else {
        document.getElementById("showthis").style.visibility = "hidden";
        show = false;
    }
}

function showTextField(val){
    if (val == 1) {
        document.getElementById("textfield1").style.visibility = "visible";
        document.getElementById("textfield2").style.visibility = "hidden";
        document.getElementById("textfield3").style.visibility = "hidden";
    }
    if (val == 2) {
        document.getElementById("textfield2").style.visibility = "visible";
        document.getElementById("textfield1").style.visibility = "hidden";
        document.getElementById("textfield3").style.visibility = "hidden";
    }
    if (val == 3){
        document.getElementById("textfield3").style.visibility = "visible";
        document.getElementById("textfield2").style.visibility = "hidden";
        document.getElementById("textfield1").style.visibility = "hidden";
    }
}

function calMeter(feet) {
    feet = feet * 0.3048;
    document.getElementById("meter").value = feet.toFixed(4);
}

function calFeet(meter) {
    meter = meter * 3.28084;
    document.getElementById("feet").value = meter.toFixed(4);
}