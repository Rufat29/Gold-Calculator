$(document).ready(function () {
    displayRadioValue();
});

$('#other-field').focus(function () {
    $('#other').prop("checked", true);
});

var slider = document.getElementById("myRange");
var ele = document.getElementsByName('box');
var data = document.getElementById('txt');

function displayRadioValue() {
    if (data.value > 1000) {
        data.value = 1000;
    }
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            document.getElementById("result").innerHTML
                = Math.floor((txt.value * ele[i].value + ((txt.value * ele[i].value) * 10 / 100))) ;
    }
}

slider.oninput = function () {
    data.value = this.value;
    displayRadioValue();
}

data.oninput = function () {
    slider.value = this.value;
}