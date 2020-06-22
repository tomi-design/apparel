let emailForm= document.getElementById('emailForm');
let input=document.querySelector('input');
const submitButton= document.getElementById('submitButton');

submitButton.onclick= function() {
    let emailAddress= input.value;
    input.value='';
}