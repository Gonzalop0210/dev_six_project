const boton = document.querySelector('.boton');

let icon_email = document.querySelector('.icon_email');
let icon_phone = document.querySelector('.icon_phone');
let icon_name = document.querySelector('.icon_name');
let icon_address = document.querySelector('.icon_address');
let icon_city = document.querySelector('.icon_city');
let icon_country = document.querySelector('.icon_country');
let icon_postal = document.querySelector('.icon_postal');

const array_icons = [];

array_icons.push(icon_email);
array_icons.push(icon_phone);
array_icons.push(icon_name);
array_icons.push(icon_address);
array_icons.push(icon_city);
array_icons.push(icon_country);
array_icons.push(icon_postal);

boton.addEventListener('click', function(event) {
    for (let i = 0; i < array_input.length; i++) {
        if (array_input[i].value === '' || array_input[i].selectedIndex === 0){
            event.preventDefault();
            array_container[i].classList.add('input_error', 'select_error');
            array_icons[i].classList.add('icon_error');
            array_input[i].classList.add('text_error', 'input_country_error');
        } else {
            window.location.reload();
        }
    }
});