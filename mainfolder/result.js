const form1 = document.getElementById('quiz-results')
answer= localStorage.getItem('answer')
let message = ''
form1.addEventListener('submit', (event) => {
    event.preventDefault() 
    if (answer === '4') {
         message = 'Correct answer!'
    }   
    else {
         message = 'Wrong answer!'
    }
    localStorage.setItem('message', message)
    window.location.href = "form.html"
    })

