const quizForm = document.querySelector(".quiz-form");
const submit = document.querySelector("#submit-button");
const message = document.querySelector("#output-msg");


const rightAnswers = ["90°", "right angled", "A geometric figure", "Polygon", "3", "Equilateral", "Geometry", "2", "Scalene", "3"];


function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === rightAnswers[index]) {
            score = score + 1;
            
           
        }
        index = index + 1;
    }
    message.innerText = `Your score is ${score}`;
    if (score === 0 ) {
        message.innerText = `Please do attempt all questions`;

    }
}

submit.addEventListener("click", calculateScore);