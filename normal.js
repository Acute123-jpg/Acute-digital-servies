function send() {
    var name = document.getElementById('name').value;
    let calling = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('input_message').value;
    if (name  && calling &&  email && message ) {
        alert(`Dear ${name} your request has been submitted successfully, We would contact you shortly`);
    }  else {
        alert('Please input all fields ');
    }
}

function viewer() {
    document.getElementById('iframer').style.display = "block";
}
function cancel() {
    document.getElementById('iframer').style.display = "none";
}


function emailPhone() {
    document.getElementById('main').style.display = "block";
}
function phonier() {
    document.getElementById('phone-loger').style.display = "block";
    document.getElementById('email-loger').style.display = "none";
    document.getElementById('emali').style.visibility = "visible"
}


function emuler() {
 document.getElementById('email-loger').style.display = "block";
document.getElementById('loginer').style.visibility = "visible";
document.getElementById('phone-loger').style.display = "none";
}