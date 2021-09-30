const sides = document.querySelectorAll(".sides");
const checkButton = document.querySelector("#check-area");
const message = document.querySelector("#message-div");



function productOfSides(a, b) {
    const sideProduct = a * b;
return sideProduct;
}
function calculateArea(){
    
      if(sides>0){
        const sideProduct= productOfSides(sides[0].value,sides[1].value);
        const area = 1/2 *  (sideProduct);
        message.innerText = `The area of triangle with the entered values is ${area} Cm-Square`;
        
      }else{
        message.innerText = `enter valid values!`;

      }
    }



checkButton.addEventListener("click", calculateArea);
