// Fungsi untuk menambahkan angka/operator ke layar
// function appendToScreen(value) {
//     document.getElementById("display").value += value;
// }

// // Fungsi untuk membersihkan layar
// function clearScreen() {
//     document.getElementById("display").value = "";
// }

// // Fungsi untuk menghitung hasil
// function calculate() {
//     let expression = document.getElementById("display").value;
//     try {
//         document.getElementById("display").value = eval(expression);
//     } catch (error) {
//         document.getElementById("display").value = "Error";
//     }
// }

const display = document.getElementById('display')
const clear = document.querySelector('.clear')
const equals = document.querySelector('.sama-dengan')

document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('click', () => {
        display.value += button.textContent    
    })
})

clear.addEventListener('click', () => {
    display.value = ""
})

equals.addEventListener('click', () => {
    display.value = eval(display.value)
})

document.addEventListener('keydown', (e) => {
    const value = '1234567890+-/*.'.split('')
    const key = e.key
    
    if (value.includes(key)) {
        display.value += key
    }
    if (key == 'Enter' && display.value) {
        display.value = eval(display.value)
    }
    if (key == 'Backspace') {
        display.value = ''
    }
})