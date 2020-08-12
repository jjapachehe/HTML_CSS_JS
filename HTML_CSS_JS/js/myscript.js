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

function doRed() {
    var dd1 = document.getElementById("d1");
    dd1.style.backgroundColor="red";
    var ctx = dd1.getContext("2d");
    ctx.fillStyle="yellow";
    ctx.fillRect(10,10,40,40);
    ctx.fillRect(60,10,40,40);

    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.fillText = ("Hello", 10,80);
}


function doOrange() {
    var dd2 = document.getElementById("d2");
    dd2.style.backgroundColor="white";
    dd2.style.backgroundColor="orange";
    var ctx = dd2.getContext("2d");
    ctx.fillStyle="orange";
    ctx.fillRect(10,10,40,40);
    
}