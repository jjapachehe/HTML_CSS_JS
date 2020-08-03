function dochange() {
    alert('clicked button with JS function');
}

function choise() {
    var text;
    if(confirm("Press button!")) {
        text = alert('You pressed OK!');
    } else {
        text = alert('Are you shure?');;
    }
}

function changeColor() {
    var divElement1 = document.getElementById("d1");
    var divElement2 = document.getElementById("d2");

    divElement1.className = "orangeback";
    divElement2.className = "fuchsiaback";
}

function changeText() {
    var divElement1 = document.getElementById("d1");
    var divElement2 = document.getElementById("d2");

    divElement1.innerHTML = "Erste";
    divElement2.innerHTML = "Zweite";
}