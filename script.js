class Cal {
    constructor(previousNumber, currentNumber) {
        this.previousNumber = previousNumber;
        this.currentNumber = currentNumber;
    }
    display(e) {
        if(this.previousNumber.innerHTML.length < 15) {

            const content = e.target.innerHTML
                this.previousNumber.innerHTML += content
        }
    }
    clearField() {
        this.previousNumber.innerHTML = ""
        this.currentNumber.innerHTML = ""
    }
    operate() {
        this.currentNumber.innerHTML = this.previousNumber.innerHTML;
        this.previousNumber.innerHTML = ""
    }
    equals() {
        const add = parseInt(this.currentNumber.innerHTML) + parseInt(this.previousNumber.innerHTML);
        this.previousNumber.innerHTML = add
        this.currentNumber.innerHTML = ''
    }
}


const text = document.querySelector(".text")
const text2 = document.querySelector(".text2")
const calculator = new Cal(text, text2)


const numbers = document.querySelectorAll("[data-id]");
numbers.forEach(num=>{
    num.addEventListener("click", (e)=>{
                calculator.display(e)
            })
        })

const clear = document.querySelector(".ac")
clear.addEventListener("click", ()=>{
    calculator.clearField()
})    

const operations = document.querySelectorAll("[data-operation");
operations.forEach(operation=>{
    operation.addEventListener("click", ()=>{
        calculator.operate()
    })
})

const equals = document.querySelector("[data-equal")
equals.addEventListener("click", ()=>{
    calculator.equals()
})
    


   
    






// const numbers = document.querySelectorAll("[data-id]");
// const text = document.querySelector(".text")
// numbers.forEach((num)=>{
//     num.addEventListener("click", (e)=>{
//         if(text.innerHTML.length<25) {

//             let previousNumber = e.target.textContent;
//             text.innerHTML += previousNumber
//         }
//     })
// })

// const ac = document.querySelector(".ac")
// ac.addEventListener("click", ()=>{
//     text.innerHTML = ''
// })