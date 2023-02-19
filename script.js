const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');

window.addEventListener('load', () => celsius.focus());

// validation
function validation(element) {
    document.getElementById('message').innerText = element.value;
    if(isNaN(element.value)){
        document.getElementById('message').innerText = 'Please enter number only ❌';
    }
    else{
        document.getElementById('message').innerText = '';
    }
}

celsius.addEventListener('input', () => {
    fahrenheit.value = ((celsius.value * 9) /5 + 32).toFixed(2);
    if (!celsius.value) {
        fahrenheit.value = '';
    }
});
fahrenheit.addEventListener('input', () => {
    celsius.value = (((fahrenheit.value - 32) * 5) / 9).toFixed(2);
    if (!fahrenheit.value) {
        celsius.value = '';
    }
});

// Preloader
const loader = document.getElementById('loader');
window.addEventListener('load',()=>{
    loader.style.display = 'none';
})
