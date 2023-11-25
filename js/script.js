function small_screen(screen, flag) {

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