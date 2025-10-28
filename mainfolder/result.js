import answer from '../mainfolder/form.js'  
const form1 = document.getElementById('quiz-results')
const form2 = localStorage.getItem('form')
const empty = form2.getElementById('Empty')
form1.addEventListener('submit', () => {
    if (answer === '4') {
        empty.textContent = "Correct!"
    }
    else {
        empty.textContent = "Wrong answer. Try again."
    }
    window.location.href = "form.html"
    })

