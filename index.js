const angleOne = document.querySelector("#angle-one");
const angleTwo = document.querySelector("#angle-two");
const angleThree = document.querySelector("#angle-three");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#message");

checkButton.addEventListener("click", isTriangleWithSum); //adding functionality to the button


function isTriangleWithSum() {


    const first = Number(angleOne.value);
    const second = Number(angleTwo.value); //getting values
    const third = Number(angleThree.value);


    sumOfAngles(first, second, third); //passing above values to below function

}

function sumOfAngles(initial, mid, final) {
    var sum = initial + mid + final;
    if (sum) {
        if (sum === 180) {
            showMessage('Hey ! that forms a triangle');
        } else {
            showMessage("Sorry boss! that is not a triangle");
        }
    } else {
        showMessage("Please enter some values!");
    }
}

function showMessage(msg) {
    message.innerText = msg;
}
