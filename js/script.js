var face_w = 0;
var face_h = 0;
var face_b = '';
var face_t = 0;
var face_l = 0;
var face_r = 0;

var ear_l_w = 0;
var ear_l_h = 0;
var ear_l_t = 0;
var ear_l_l = 0;

var ear_r_w = 0;
var ear_r_h = 0;
var ear_r_t = 0;
var ear_r_r = 0;

var eye_b_w = 0;
var eye_b_h = 0;
var eye_b_t = 0;
var eye_b_l = 0;

var eye_l_w = 0;
var eye_l_h = 0;

var eye_r_w = 0;
var eye_r_h = 0;


var mouth_w = 0;
var mouth_h = 0;
var mouth_t = 0;
var mouth_l = 0;

var tongue_w = 0;
var tongue_h = 0;
var tongue_t = 0;
var tongue_l = 0;
var tongue_b = 0;
var tongue_b_b_r = 0;
var tongue_b_b_l = 0;
var tongue_b_t_l = 0;
var tongue_b_t_r = 0;

var antena_c_w = 0;
var antena_c_h = 0;
var antena_c_t = 0;
var antena_c_l = 0;

var antena_p_w = 0;
var antena_p_h = 0;
var antena_p_t = 0;
var antena_p_l = 0;

var antena_b_w = 0;
var antena_b_h = 0;
var antena_b_t = 0;
var antena_b_l = 0;


var myLength = 0;
var d_eye_left = 0;
var d_mouth_left = 0;

function handleOnLoad() {
    console.log("Hurray page isloaded!");
    var face = document.getElementById('face');

    face_w = parseInt((window.getComputedStyle(face).width).replace(/px/, ""));
    face_h = parseInt((window.getComputedStyle(face).height).replace(/px/, ""));
    face_b = parseInt((window.getComputedStyle(face).border).replace(/px/, ""));
    face_t = parseInt((window.getComputedStyle(face).top).replace(/px/, ""));
    face_l = parseInt((window.getComputedStyle(face).left).replace(/px/, ""));
    face_r = parseInt((window.getComputedStyle(face).right).replace(/px/, ""));

    var ear_l = document.getElementById('ear_l');
    ear_l_w = parseInt((window.getComputedStyle(ear_l).width).replace(/px/, ""));
    ear_l_h = parseInt((window.getComputedStyle(ear_l).height).replace(/px/, ""));
    ear_l_t = parseInt((window.getComputedStyle(ear_l).top).replace(/px/, ""));
    ear_l_l = parseInt((window.getComputedStyle(ear_l).left).replace(/px/, ""));

    var ear_r = document.getElementById('ear_r');
    ear_r_w = parseInt((window.getComputedStyle(ear_r).width).replace(/px/, ""));
    ear_r_h = parseInt((window.getComputedStyle(ear_r).height).replace(/px/, ""));
    ear_r_t = parseInt((window.getComputedStyle(ear_r).top).replace(/px/, ""));
    ear_r_r = parseInt((window.getComputedStyle(ear_r).right).replace(/px/, ""));

    var eye_b = document.getElementById('eye_b');
    eye_b_w = parseInt((window.getComputedStyle(eye_b).width).replace(/px/, ""));
    eye_b_h = parseInt((window.getComputedStyle(eye_b).height).replace(/px/, ""));
    eye_b_t = parseInt((window.getComputedStyle(eye_b).top).replace(/px/, ""));
    eye_b_l = parseInt((window.getComputedStyle(eye_b).left).replace(/px/, ""));

    var eye_l = document.getElementById('eye_l');
    eye_l_w = parseInt((window.getComputedStyle(eye_l).width).replace(/px/, ""));
    eye_l_h = parseInt((window.getComputedStyle(eye_l).height).replace(/px/, ""));

    var eye_r = document.getElementById('eye_r');
    eye_r_w = parseInt((window.getComputedStyle(eye_r).width).replace(/px/, ""));
    eye_r_h = parseInt((window.getComputedStyle(eye_r).height).replace(/px/, ""));

    var mouth = document.getElementById('mouth');
    mouth_w = parseInt((window.getComputedStyle(mouth).width).replace(/px/, ""));
    mouth_h = parseInt((window.getComputedStyle(mouth).height).replace(/px/, ""));
    mouth_t = parseInt((window.getComputedStyle(mouth).top).replace(/px/, ""));
    mouth_l = parseInt((window.getComputedStyle(mouth).left).replace(/px/, ""));

    var tongue = document.getElementById('tongue');
    tongue_w = parseInt((window.getComputedStyle(tongue).width).replace(/px/, ""));
    tongue_h = parseInt((window.getComputedStyle(tongue).height).replace(/px/, ""));
    tongue_t = parseInt((window.getComputedStyle(tongue).top).replace(/px/, ""));
    tongue_l = parseInt((window.getComputedStyle(tongue).left).replace(/px/, ""));
    tongue_b = parseInt((window.getComputedStyle(tongue).bottom).replace(/px/, ""));
    tongue_b_b_r = parseInt((window.getComputedStyle(tongue).borderBottomRightRadius).replace(/px/, ""));
    tongue_b_b_l = parseInt((window.getComputedStyle(tongue).borderBottomLeftRadius).replace(/px/, ""));
    tongue_b_t_l = parseInt((window.getComputedStyle(tongue).borderTopLeftRadius).replace(/px/, ""));
    tongue_b_t_r = parseInt((window.getComputedStyle(tongue).borderTopRightRadius).replace(/px/, ""));

    var antena_c = document.getElementById('antena_c');
    antena_c_w = parseInt((window.getComputedStyle(antena_c).width).replace(/px/, ""));
    antena_c_h = parseInt((window.getComputedStyle(antena_c).height).replace(/px/, ""));
    antena_c_t = parseInt((window.getComputedStyle(antena_c).top).replace(/px/, ""));
    antena_c_l = parseInt((window.getComputedStyle(antena_c).left).replace(/px/, ""));

    var antena_p = document.getElementById('antena_p');
    antena_p_w = parseInt((window.getComputedStyle(antena_p).width).replace(/px/, ""));
    antena_p_h = parseInt((window.getComputedStyle(antena_p).height).replace(/px/, ""));
    antena_p_t = parseInt((window.getComputedStyle(antena_p).top).replace(/px/, ""));
    antena_p_l = parseInt((window.getComputedStyle(antena_p).left).replace(/px/, ""));

    var antena_b = document.getElementById('antena_b');
    antena_b_w = parseInt((window.getComputedStyle(antena_b).width).replace(/px/, ""));
    antena_b_h = parseInt((window.getComputedStyle(antena_b).height).replace(/px/, ""));
    antena_b_t = parseInt((window.getComputedStyle(antena_b).top).replace(/px/, ""));
    antena_b_l = parseInt((window.getComputedStyle(antena_b).left).replace(/px/, ""));
}

function resetAiIcon(type) {
    if (type == 'face') {
        document.getElementById(type).style.width = face_w + 'px';
        document.getElementById(type).style.height = face_h + 'px';
        document.getElementById(type).style.border = face_b;
        document.getElementById(type).style.top = face_t;
        document.getElementById(type).style.left = face_l;
        document.getElementById(type).style.right = face_r;
    } else if (type == 'ear_l') {
        document.getElementById(type).style.width = ear_l_w + 'px';
        document.getElementById(type).style.height = ear_l_h + 'px';
        document.getElementById(type).style.top = ear_l_t + 'px';
        document.getElementById(type).style.left = ear_l_l + 'px';
    } else if (type == 'ear_r') {
        document.getElementById(type).style.width = ear_r_w + 'px';
        document.getElementById(type).style.height = ear_r_h + 'px';
        document.getElementById(type).style.top = ear_r_t + 'px';
        document.getElementById(type).style.right = ear_r_r + 'px';
    } else if (type == 'eye_b') {
        document.getElementById(type).style.width = eye_b_w + 'px';
        document.getElementById(type).style.height = eye_b_h + 'px';
        document.getElementById(type).style.top = eye_b_t + 'px';
        document.getElementById(type).style.left = eye_b_l + 'px';
    } else if (type == 'eye_l') {
        document.getElementById(type).style.width = eye_l_w + 'px';
        document.getElementById(type).style.height = eye_l_h + 'px';
    }
    else if (type == 'eye_r') {
        document.getElementById(type).style.width = eye_r_w + 'px';
        document.getElementById(type).style.height = eye_r_h + 'px';
    } else if (type == 'mouth') {
        document.getElementById(type).style.width = mouth_w + 'px';
        document.getElementById(type).style.height = mouth_h + 'px';
        document.getElementById(type).style.top = mouth_t + 'px';
        document.getElementById(type).style.left = mouth_l + 'px';
    } else if (type == 'tongue') {
        document.getElementById(type).width = tongue_w + 'px';
        document.getElementById(type).style.height = tongue_h + 'px';
        document.getElementById(type).style.top = tongue_t + 'px';
        document.getElementById(type).style.left = tongue_l + 'px';
        document.getElementById(type).style.bottom = tongue_b + 'px';
        document.getElementById(type).style.borderBottomRightRadius = tongue_b_b_r + 'px';
        document.getElementById(type).style.borderBottomLeftRadius = tongue_b_b_l + 'px';
        document.getElementById(type).style.borderTopLeftRadius = tongue_b_t_l + 'px';
        document.getElementById(type).style.borderTopRightRadius = tongue_b_t_r + 'px';

    } else if (type == 'antena_c') {
        document.getElementById(type).style.width = antena_c_w + 'px';
        document.getElementById(type).style.height = antena_c_h + 'px';
        document.getElementById(type).style.top = antena_c_t + 'px';
        document.getElementById(type).style.left = antena_c_l + 'px';
    } else if (type == 'antena_p') {
        document.getElementById(type).style.width = antena_p_w + 'px';
        document.getElementById(type).style.height = antena_p_h + 'px';
        document.getElementById(type).style.top = antena_p_t + 'px';
        document.getElementById(type).style.left = antena_p_l + 'px';
    } else if (type == 'antena_b') {
        document.getElementById(type).style.width = antena_b_w + 'px';
        document.getElementById(type).style.height = antena_b_h + 'px';
        document.getElementById(type).style.top = antena_b_t + 'px';
        document.getElementById(type).style.left = antena_b_l + 'px';
    } else {
        console.log('reset else');
    }

}

function fieldValidation(field) {
    var val = field.value;
    var parDivId = field.id + '_div';
    var parDiv = document.getElementById(parDivId);

    if (!val || val == '' || val == null || val.length == 0 || val == undefined) {
        if (parDiv) {
            if (!parDiv.classList.contains('errorField')) {
                parDiv.classList += ' errorField';
            }
        }
        return false;
    } else {
        if (parDiv) {
            parDiv.classList.remove('errorField');
        }
        return true;
    }
}

function showHideIcon(id) {
    var icon = document.getElementById(id);
    var inputId = id.slice(0, -6);
    if (icon) {
        var iconName = icon.name;
        if (iconName == 'eye') {
            document.getElementById(id).name = 'eye-off';
            document.getElementById(inputId).type = 'text';
        } else {
            document.getElementById(id).name = 'eye';
            document.getElementById(inputId).type = 'password';
        }
    }
}

function handleSignUp() {
    var email = document.getElementById('emailAddress_signup');
    var password = document.getElementById('password_signup');
    var repassword = document.getElementById('re-password_signup');

    var nullCheck = [];

    nullCheck.push(fieldValidation(email));
    nullCheck.push(fieldValidation(password));
    nullCheck.push(fieldValidation(repassword));

    if (!nullCheck.includes(false)) {
        console.log('valid');
    }
}
function handleLogIn() {
    var email = document.getElementById('emailAddress_login');
    var password = document.getElementById('password_login');

    var nullCheck = [];

    nullCheck.push(fieldValidation(email));
    nullCheck.push(fieldValidation(password));


    if (!nullCheck.includes(false)) {
        console.log('valid');
    }
}

function handleShowHidePass_one() {
    showHideIcon('password_login_icon1');
    setTimeout(() => {
        showHideIcon('password_login_icon1');
    }, 1000);
}
function handleShowHidePass_two() {
    showHideIcon('password_signup_icon2');
    setTimeout(() => {
        showHideIcon('password_signup_icon2');
    }, 1000);
}
function handleShowHidePass_three() {
    showHideIcon('re-password_signup_icon3');
    setTimeout(() => {
        showHideIcon('re-password_signup_icon3');
    }, 1000);
}
function ai_icon_resetAll() {
    resetAiIcon('face');
    resetAiIcon('eye_b');
    resetAiIcon('eye_r');
    resetAiIcon('eye_l');
    resetAiIcon('tongue');
    resetAiIcon('mouth');
    resetAiIcon('ear_l');
    resetAiIcon('ear_r');
    resetAiIcon('antena_b');
    resetAiIcon('antena_p');
    resetAiIcon('antena_c');
}
function ai_icon_idCheck() {
    var face = document.getElementById('face');
    var eye_b = document.getElementById('eye_b');
    var eye_r = document.getElementById('eye_r');
    var eye_l = document.getElementById('eye_l');
    var tongue = document.getElementById('tongue');
    var mouth = document.getElementById('mouth');
    var ear_l = document.getElementById('ear_l');
    var ear_r = document.getElementById('ear_r');
    var antena_b = document.getElementById('antena_b');
    var antena_p = document.getElementById('antena_p');
    var antena_c = document.getElementById('antena_c');
    if (face != undefined && eye_b != undefined && mouth != undefined && eye_r != undefined && eye_l != undefined && tongue != undefined && ear_l != undefined && ear_r != undefined && antena_b != undefined && antena_p != undefined && antena_c != undefined) {
        return true;
    } else {
        console.log('Error:(focusToInput) failed to get ids of ai icon');
        return false;
    }
}
function ai_icon_inputfocus(flag) {
    var temp = ai_icon_idCheck();
    if (temp) {
        if (flag) {
            document.getElementById('face').style.cssText = `top: 2px;`
            document.getElementById('eye_b').style.cssText = `top: 22px; left: 12px;`
            document.getElementById('eye_r').style.cssText = `top: 12.3px;`
            document.getElementById('eye_l').style.cssText = `top: 12.3px;`
            document.getElementById('tongue').style.cssText = `height: 3.5px;`
            document.getElementById('mouth').style.cssText = `top: 55px; left: 42px; width: 18px; height: 12px; `
            document.getElementById('ear_l').style.cssText = `top: 24.5px; `
            document.getElementById('ear_r').style.cssText = `top: 24.5px; `
            document.getElementById('antena_b').style.cssText = `top: -2px; `
            document.getElementById('antena_p').style.cssText = `top: -14px; `
            document.getElementById('antena_c').style.cssText = `top: -23px; `
        } else {
            ai_icon_resetAll();
        }
    }
}


function headMomentHor(event) {
    console.log(event.target.value.length);
    var len = event.target.value.length;
    if (len != null || len != undefined) {
        var eye_b = document.getElementById('eye_b');
        var mouth = document.getElementById('mouth');

        var eye_b_left = window.getComputedStyle(eye_b).left;
        var mouthleft = window.getComputedStyle(mouth).left;

        if (d_eye_left != parseInt(eye_b_left.replace(/%/, "")) && d_mouth_left != parseInt(mouthleft.replace(/%/, "")) && d_eye_left != 0 && d_mouth_left != 0) {
            myLength = len;
        } else {
            d_eye_left = parseInt(eye_b_left.replace(/%/, "")); //40
            d_mouth_left = parseInt(mouthleft.replace(/%/, ""));
        }
        eye_b_left = (d_eye_left + len) + "%";
        mouthleft = (d_mouth_left + len) + "%";

        document.getElementById('eye_b').style.left = eye_b_left;
        document.getElementById('mouth').style.left = mouthleft;
    }
}


function focusInput() {
    ai_icon_inputfocus(true);
}
function blurInput() {
    ai_icon_inputfocus(false);
}

function inputValueChange(event) {
    headMomentHor(event)
}




// todo : head moment -> number increment --> add head moment