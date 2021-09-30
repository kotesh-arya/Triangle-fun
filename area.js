const sides = document.querySelectorAll(".sides");
const checkButton = document.querySelector("#check-area");
const message = document.querySelector("#message-div");



function productOfSides(a, b) {
    const sideProduct = a * b;
    return sideProduct;
}

function calculateArea() {
    const sideProduct = productOfSides(Number(sides[0].value), Number(sides[1].value));
    const area = 1/2 *(sideProduct);
    message.innerText = `The area of the triangle  with the entered values is ${area}`;
    

}

checkButton.addEventListener("click", calculateArea);