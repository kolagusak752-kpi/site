const form = document.getElementById('quiz-form')
localStorage.setItem('form', form )
form.addEventListener('submit', () => {
    const answer = form.answers.value
    window.location.href = "results.html"
   
})


 
