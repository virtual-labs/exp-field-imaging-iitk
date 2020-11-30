
document.getElementById('image_display').src = './images/tem_machine.png'
document.getElementById("image_display").style.display = "none";
$(document).ready(function () {
    document.getElementById("container").style.display = "none";
    document.getElementById("container1").style.display = "none";
})
function start() {
    document.getElementById("container").style.display = "block";
    document.getElementById("start_button").style.display = "none";

    var i = 0;
    var txt = '1. Select the Material.';
    var speed = 50;
    typeWriter();
    textToSpeech("select the material");
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("demo1").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    document.getElementById("image1").src = "../images/tem_machine.png"
}
document.getElementById("next").style.display = "none"
var c, img;
document.getElementById("btn_id1").disabled = true;
document.getElementById("btn_id2").disabled = true;
document.getElementById("btn_id1").style.display = "none";
document.getElementById("btn_id2").style.display = "none";
document.getElementById("execute_button").disabled = true;
document.getElementById("execute_button").style.display = "none";
document.getElementById("field_image").style.display = "none";
function clickbtn(val) {
    c = val;
    img = document.createElement('img');
    var i = 0;
    var txt = '2. Now select the type of Field.(Bright/Dark).';
    var speed = 50;
    typeWriter();
    textToSpeech("now select the type of field(bright/dark)");
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("demo2").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
        
    }
    if (c == 1) {
        document.getElementById("btn1").style.background = '#A93226';
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn_id1").disabled = false;
        document.getElementById("btn_id2").disabled = false;
        document.getElementById("btn_id1").style.display = "inline";
        document.getElementById("btn_id2").style.display = "inline";
        document.getElementById("execute_button").disabled = false;
        document.getElementById("field_image").style.display = "block";
        document.getElementById("img1").src = "../images/image1.png";
        document.getElementById("img2").src = "../images/image2.png";
    }
    if (c == 2) {
        document.getElementById("btn2").style.background = '#A93226';
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn_id1").disabled = false;
        document.getElementById("btn_id2").disabled = false;
        document.getElementById("btn_id1").style.display = "inline";
        document.getElementById("btn_id2").style.display = "inline";
        document.getElementById("execute_button").disabled = false;
        document.getElementById("field_image").style.display = "none";
        document.getElementById("img1").src = "../images/image1.png";
        document.getElementById("img2").src = "../images/image2.png";
    }
    if (c == 3) {
        document.getElementById("btn3").style.background = '#A93226';
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn_id1").disabled = false;
        document.getElementById("btn_id2").disabled = false;
        document.getElementById("btn_id1").style.display = "inline";
        document.getElementById("btn_id2").style.display = "inline";
        document.getElementById("execute_button").disabled = false;
        document.getElementById("field_image").style.display = "none";
        document.getElementById("img1").src = "../images/image1.png";
        document.getElementById("img2").src = "../images/image2.png";
    }
}
var t;
function field(val) {
    t = val;
    console.log(t);
    document.getElementById("execute_button").style.display = "inline";
    var i = 0;
    var txt = '3. Click on the "Execute" button.';
    var speed = 50;
    typeWriter();
    textToSpeech("click on the execute button");
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("demo3").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    if (val == 1) {
        document.getElementById("btn_id2").disabled = true;
    }
    else {
        document.getElementById("btn_id1").disabled = true;
    }
}
function voltagefunction() {
    document.getElementById("image1").src = "../images/tem.gif"
   setTimeout(function () {document.getElementById('image_display').style.display='block'}, 12000);
    console.log(c);
    var i = 0;
    var txt = '4. Image is displayed accordingly.';
    var speed = 50;
    typeWriter();
    textToSpeech("image is displayed accordingly");
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("demo4").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    if ((c == 1)) {
        document.getElementById("btn_id1").disabled = false;
        document.getElementById("btn_id2").disabled = false;
        if (t == 1) {
            img.src = '../images/image1.png';
            img.width = "500";
            img.height = "500";
        }
        else if (t == 2) {
            img.src = '../images/image2.png';
            img.width = "500";
            img.height = "500";
        }
    }
    if ((c == 2)) {
        if (t == 1) {
            img.src = '../images/image1.png';
            img.width = "500";
            img.height = "500";
        }
        else if (t == 2) {
            img.src = '../images/image2.png';
            img.width = "500";
            img.height = "500";
        }
    }
    if ((c == 3)) {
        if (t == 1) {
            img.src = '../images/image1.png';
            img.width = "500";
            img.height = "500";
        }
        else if (t == 2) {
            img.src = '../images/image2.png';
            img.width = "500";
            img.height = "500";
        }
    }
    document.getElementById('image_display').appendChild(img);
    document.getElementById("next").style.display = "inline";
}
//text to speech

// list of languages is probably not loaded, wait for it
if (window.speechSynthesis.getVoices().length == 0) {
    window.speechSynthesis.addEventListener('voiceschanged', function () {
        // textToSpeech(text);
    });
}

function textToSpeech(text) {
    // get all voices that browser offers
    var available_voices = window.speechSynthesis.getVoices();

    // this will hold an english voice
    var english_voice = '';

    // find voice by language locale "en-US"
    // if not then select the first voice
    for (var i = 0; i < available_voices.length; i++) {
        if (available_voices[i].lang === 'en-US') {
            english_voice = available_voices[i];
            break;
        }
    }
    if (english_voice === '')
        english_voice = available_voices[0];

    // new SpeechSynthesisUtterance object
    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1;
    utter.pitch = 0.5;
    utter.text = text;
    utter.voice = english_voice;


    // speak
    window.speechSynthesis.speak(utter);
}
//////////////////////////////////Task JS////////////////////////////////
function task() {
    document.getElementById("container1").style.display = "block";
    document.getElementById("container").style.display = "none";
    document.getElementById("validate_button").disabled = true;
    typewriter("1. Select the options accordingly.", "demo5");
    textToSpeech("Select the options accordingly");
}
var tWrapper = $("#toast-wrapper"), ti = 0;
var i = 0;
var speed = 100;
function showToast(msg, type = 0) {
    tWrapper.append(`<div id="t${ti++}" class="toast${type == 1 ? ' danger' : (type == 2 ? ' success' : '')}" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="${type == 1 ? '#ff0000' : (type == 2 ? '#31a66a' : '#007aff')}" /></svg>
            <strong class="mr-auto">Notification</strong>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="toast-body">
            ${msg}
    </div>
    </div>`);
    $(`#t${ti - 1}`).toast({
        delay: 5500
    });
    $(`#t${ti - 1}`).toast('show');
}
var a, b;
document.getElementById("next_experiment").style.display = "none";
function material(val) {
    a = val;

    typewriter("2. Select the type of field(Bright/Dark).", "demo6");
    textToSpeech("Select the type of field(Bright/Dark)");
    console.log(a);
    document.getElementById("bright").style.display = "inline";
    document.getElementById("dark").style.display = "inline";
    document.getElementById("validate_button").style.display = "inline";
    if (val == 1) {
        document.getElementById("m2").disabled = true;
        document.getElementById("m3").disabled = true;
        document.getElementById("m1").style.background = "#7D6608";
    }
    else if (val == 2) {
        document.getElementById("m1").disabled = true;
        document.getElementById("m3").disabled = true;
        document.getElementById("m2").style.background = "#7D6608";
    }
    else {
        document.getElementById("m1").disabled = true;
        document.getElementById("m2").disabled = true;
        document.getElementById("m3").style.background = "#7D6608";
    }
}
function field1(val) {
    b = val;
    console.log(b);
    document.getElementById("validate_button").disabled = false;
    typewriter("3. Click on the validate button.", "demo7");
    textToSpeech("Click on the validate button");
}
document.getElementById("bright").style.display = "none";
document.getElementById("dark").style.display = "none";
document.getElementById("validate_button").style.display = "none";
function validate() {
    if (a == 1) {
        if (b == 1) {
            showToast("Incorrect", 1);
        }
        if (b == 2) {
            showToast("Correct", 0);
            document.getElementById("next_experiment").style.display = "block"
        }
    }
    if (a == 2) {
        if (b == 1) {
            showToast("Incorrect", 1);
        }
        if (b == 2) {
            showToast("Incorrect", 1);
        }
    }
    if (a == 3) {
        if (b == 1) {
            showToast("Incorrect", 1);
        }
        if (b == 2) {
            showToast("Incorrect", 1);
        }
    }
}
/*****************Typewriter****************** */
/* The speed/duration of the effect in milliseconds */
function typewriter(txt, id, ind = 0) {
    // console.log(txt, i);
    if (ind < txt.length) {
        document.getElementById(id).innerHTML += txt.charAt(ind);
        ind++;
        setTimeout(typewriter, speed, txt, id, ind);
    }
}
//////////////// Draw the ellipse//////////////////
el = document.getElementById("myCanvas").getContext("2d");
el.beginPath();
el.ellipse(150, 200, 130, 20,3.15, 0, 2 * Math.PI);
el.strokeStyle = "black";
el.lineWidth = 0;
el.fillStyle = "#7F8C8D";
el.fill();
el.stroke();
////////////////////////Optical Axis///////////////
var ctx = document.getElementById("myCanvas").getContext("2d");
ctx.beginPath();
ctx.moveTo(150, 50);
ctx.lineTo(150, 500);
ctx.strokeStyle = "#FFFF00";
ctx.lineWidth = 2;
ctx.stroke();
////////////////1st left stroke/////////////////////
var ct = document.getElementById("myCanvas").getContext("2d");
ct.beginPath();
ct.moveTo(100, 50);
ct.lineTo(60, 200);
ct.moveTo(60, 200);
ct.lineTo(120, 300);
ct.moveTo(120, 300);
ct.lineTo(170, 200);
ct.moveTo(170, 200);
ct.lineTo(200, 50);
ct.moveTo(200, 50);
ct.lineTo(200, 200);
ct.moveTo(100, 50);
ct.lineTo(130, 200);
ct.moveTo(200, 200);
ct.lineTo(80, 440);
ct.moveTo(130, 200);
ct.lineTo(180, 300);
ct.moveTo(180, 300);
ct.lineTo(240, 200);
ct.moveTo(240, 200);
ct.lineTo(200, 50);
ct.strokeStyle = "#000000";
ct.lineWidth = 3;
ct.stroke();

///////////////////2nd left stroke/////////////////////////
var etx = document.getElementById("myCanvas").getContext("2d");
etx.beginPath();
etx.moveTo(100, 50);
etx.lineTo(100, 200);

etx.moveTo(100, 200);
etx.lineTo(220, 440);
etx.strokeStyle = "00000";
etx.stroke();
/////////////////////////Orange Line///////////////////////
var diff = document.getElementById("myCanvas").getContext("2d");
diff.beginPath();
diff.moveTo(30, 300);
diff.lineTo(140, 300);
diff.moveTo(160, 300);
diff.lineTo(270, 300);
diff.strokeStyle = "#D35400";
diff.lineWidth = 4;
diff.stroke();
////////////////////////Elipse////////////////////////



// Draw the ellipse's line of reflection
document.getElementById("myCanvas2").style.display = "none";
document.getElementById("myCanvas3").style.display = "none";
function ra() {
    var x = document.getElementById("myrange").value;
    console.log(x);
    if (x == 2) {
        document.getElementById("myCanvas").style.display = "none";
        document.getElementById("myCanvas2").style.display = "block";
        document.getElementById("myCanvas3").style.display = "none";
    }
    else if (x == 4) {
        document.getElementById("myCanvas2").style.display = "none";
        document.getElementById("myCanvas").style.display = "none";
        document.getElementById("myCanvas3").style.display = "block";
    }
    else if(x == 3){
        document.getElementById("myCanvas2").style.display = "none";
        document.getElementById("myCanvas3").style.display = "none";
        document.getElementById("myCanvas").style.display = "block";
    }
}