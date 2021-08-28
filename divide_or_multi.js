
// <div class="main">
       
//        1st Number: <input type="text" class="num1"><br><br>
//        2nd Number: <input type="text" class="num2"><br><br>

//        <button onclick="multiply()" class="btn-multiply">Multiply</button>
//        <button onclick="divide()" class="btn-divide">Divide</button>

//        <p>The result is: <span class="result"></span></p>
//    </div>

// option 1: 
// function multiply() {
//     let num1 = document.querySelector(".num1").value
//     let num2 = document.querySelector(".num2").value
//     let result = num1 * num2
//     document.querySelector('.result').innerHTML = result
// }

// function divide() {
//     let num1 = document.querySelector(".num1").value
//     let num2 = document.querySelector(".num2").value
//     let result = num1 / num2
//     document.querySelector('.result').innerHTML = result
// }

// option2:
window.onload = function() {
    let btnMultiply = document.querySelector('.btnMultiply')
    let btnDivide = document.querySelector('.btnDivide')

    function calc() {
        let num1 = document.querySelector('.num1').value
        let num2 = document.querySelector('.num2').value
        let result = document.querySelector('.result')
        
        switch (this.value) {
            case 'multiply':
                result.innerHTML = num1 * num2
                break;
            case 'divide':
                result.innerHTML = num1 / num2
                break;
        }
    }
    btnMultiply.addEventListener('click', calc);
    btnDivide.addEventListener('click', calc);
    // first!
}





