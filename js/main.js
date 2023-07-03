let input_email = document.querySelector('.input_email');
let input_phone = document.querySelector('.input_phone');
let input_name = document.querySelector('.input_name');
let input_address = document.querySelector('.input_address');
let input_city = document.querySelector('.input_city');
let input_country = document.querySelector('.input_country');
let input_postal = document.querySelector('.input_postal');

let container_email = document.querySelector('.container_email');
let container_phone = document.querySelector('.container_phone');
let container_name = document.querySelector('.container_name');
let container_address = document.querySelector('.container_address');
let container_city = document.querySelector('.container_city');
let container_country = document.querySelector('.container_country');
let container_postal = document.querySelector('.container_postal');

input_email.addEventListener('click', function(event) {
    container_phone.classList.remove('add_outline');
    container_name.classList.remove('add_outline');
    container_address.classList.remove('add_outline');
    container_city.classList.remove('add_outline');
    container_country.classList.remove('add_outline');
    container_postal.classList.remove('add_outline');
    container_email.classList.add('add_outline');
});

input_phone.addEventListener('click', function() {
    container_phone.classList.add('add_outline');
    container_name.classList.remove('add_outline');
    container_address.classList.remove('add_outline');
    container_city.classList.remove('add_outline');
    container_country.classList.remove('add_outline');
    container_postal.classList.remove('add_outline');
    container_email.classList.remove('add_outline');
});

input_name.addEventListener('click', function() {
    container_phone.classList.remove('add_outline');
    container_name.classList.add('add_outline');
    container_address.classList.remove('add_outline');
    container_city.classList.remove('add_outline');
    container_country.classList.remove('add_outline');
    container_postal.classList.remove('add_outline');
    container_email.classList.remove('add_outline');
});

input_address.addEventListener('click', function() {
    container_phone.classList.remove('add_outline');
    container_name.classList.remove('add_outline');
    container_address.classList.add('add_outline');
    container_city.classList.remove('add_outline');
    container_country.classList.remove('add_outline');
    container_postal.classList.remove('add_outline');
    container_email.classList.remove('add_outline');
});

input_city.addEventListener('click', function() {
    container_phone.classList.remove('add_outline');
    container_name.classList.remove('add_outline');
    container_address.classList.remove('add_outline');
    container_city.classList.add('add_outline');
    container_country.classList.remove('add_outline');
    container_postal.classList.remove('add_outline');
    container_email.classList.remove('add_outline');
});

input_country.addEventListener('click', function() {
    container_phone.classList.remove('add_outline');
    container_name.classList.remove('add_outline');
    container_address.classList.remove('add_outline');
    container_city.classList.remove('add_outline');
    container_country.classList.add('add_outline');
    container_postal.classList.remove('add_outline');
    container_email.classList.remove('add_outline');
});

input_postal.addEventListener('click', function() {
    container_phone.classList.remove('add_outline');
    container_name.classList.remove('add_outline');
    container_address.classList.remove('add_outline');
    container_city.classList.remove('add_outline');
    container_country.classList.remove('add_outline');
    container_postal.classList.add('add_outline');
    container_email.classList.remove('add_outline');
});

/* document.addEventListener('click', function() {
    container_phone.classList.remove('add_outline');
    container_name.classList.remove('add_outline');
    container_address.classList.remove('add_outline');
    container_city.classList.remove('add_outline');
    container_country.classList.remove('add_outline');
    container_postal.classList.remove('add_outline');
    container_email.classList.remove('add_outline');
}); */