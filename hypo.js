const sides = document.querySelectorAll(".sides");
const checkButton = document.querySelector("#checkHypotenuse");
const message = document.querySelector("#outpt-div");


function squareOfSides(a, b) {
    const sumSquare = a * a + b * b;
    return sumSquare;
}

function calculateHypotenuse() {
    

        const sumSquare = squareOfSides(Number(sides[0].value), Number(sides[1].value));
        const hypo = Math.sqrt(sumSquare);
        message.innerText = `The lenght of the Hypotenuse with the entered values is ${hypo}`;

    

}

checkButton.addEventListener("click", calculateHypotenuse);