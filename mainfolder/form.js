const form = document.getElementById('quiz-form')
const empty = document.getElementById('empty')
message = localStorage.getItem('message')
empty.textContent = message
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const answer = form.answer.value
    localStorage.setItem('answer', answer)
    window.location.href = "results.html";
  
})


 
