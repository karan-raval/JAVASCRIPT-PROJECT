var acc = prompt("enter your account number");
document.getElementById('display').value = acc;

var dopo;
var upin;

var b12 = "11223344";
var pin = "12345";
rupees = 10000;


if (acc === b12) {
    document.getElementById('title-screen').style.display = "block";
    document.getElementById('rupees').innerHTML = rupees;
}
function depo() {
    if (acc === b12) {
        document.getElementById('title-screen').innerHTML = "enter your deposite amount"
        dopo = prompt("enter deposit amount");
        document.getElementById('display').value = dopo;
    }
    else {
        document.getElementById('title-screen').innerHTML = "your account number is not valid  "
    }
}

function con() {

    if (upin === pin) {
        document.getElementById('title-screen').innerHTML = dopo + "rupees sucessfully transfer in your bank account";
        document.getElementById('rupees').innerHTML = parseInt(dopo) + rupees;
    }
    else {
        document.getElementById('title-screen').innerHTML = "pin is not correct try again later!!";
        upin = prompt("enter your pin number");
    }
}

function can() {
    var acc = prompt("enter your account number");
    // upin = prompt("enter your pin number");
    document.getElementById('display').value = acc;
}

function withd() {

    var rm = prompt("enter your withdrawal amount");
    upin = prompt("enter your pin number");
    if (upin === pin) {

        var w = document.getElementById('rupees').innerHTML = rupees - parseInt(rm);
        document.getElementById('title-screen').innerHTML = "please collect your!";
    }
    else {
        document.getElementById('title-screen').innerHTML = "pin is not correct try again later!!";
        // upin = prompt("enter your pin number");
    }
}

