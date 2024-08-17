
const comment = document.querySelector('.comment');
const userInput = document.getElementById('input');
const btn = document.getElementById('btn');

btn.addEventListener('click', function (e) {
    try {
        const inputElement = userInput.value;
        if (isNaN(inputElement)) {
            throw new Error("Результат не является числом");
        }
        comment.textContent = "Молодец!";
    } catch (error) {
        comment.textContent = error.message;
        
    }
});
 
    





