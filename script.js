let all = false

window.addEventListener("DOMContentLoaded", ()=>{
    const func = document.querySelector(".func")
    func.classList.add("active")
    setTimeout(()=>{
        func.classList.remove("active")
    }, 4000)
})
class Cal {
    constructor(previousNumber, currentNumber) {
        this.previousNumber = previousNumber;
        this.currentNumber = currentNumber;
    }
    display(e) {
        if(e.target.innerHTML === "." && this.previousNumber.innerHTML.includes(".")) return

            if(this.previousNumber.innerHTML.length < 15) {
    
                const content = e.target.innerHTML
                    this.previousNumber.innerHTML += content
            }
        
    }
    clearField() {
        
        this.previousNumber.innerHTML = ""
        this.currentNumber.innerHTML = ""
    }
    slice() {
        this.previousNumber.innerHTML = this.previousNumber.innerHTML.slice(0, -1)
    }
    operate(operation) {
        this.operation = operation
            
        // if(this.operation = "Rand") {
        //     this.previousNumber.innerHTML = Math.random()
        //     this.currentNumber.innerHTML = ""
        //     all = true
        // } else {
            this.currentNumber.innerHTML = this.previousNumber.innerHTML;
        this.previousNumber.innerHTML = ""
        // }
    }
    equals() {
        let compute;
        let first = parseInt(this.currentNumber.innerHTML);
        let second = parseInt(this.previousNumber.innerHTML);
        if(!this.currentNumber.innerHTML || !this.previousNumber.innerHTML) return
        if(isNaN(first) || isNaN(second)) return
        switch(this.operation) {
            case "+":
                compute = first + second
                break
        
            case "-":
                compute = first - second
                break
        
            case "X":
                compute = first * second
                break
        
            case "/":
                compute = first / second
                break
            
            default:
                return
        }
        this.previousNumber.innerHTML = compute
        this.currentNumber.innerHTML = ''
    }
}


const text = document.querySelector(".text")
const text2 = document.querySelector(".text2")
const calculator = new Cal(text, text2)

const clear = document.querySelector(".ac")

const numbers = document.querySelectorAll("[data-id]");
numbers.forEach(num=>{
    num.addEventListener("click", (e)=>{
                calculator.display(e)
                if(text.innerHTML.length < 2 && !text2.innerHTML) {

                    clear.innerHTML = "AC"
                } else { 
                    clear.innerHTML = "C"
                    all = false
                }
            })
        })

clear.addEventListener("click", ()=>{
    if(text.innerHTML.length < 2 && !text2.innerHTML) {
        all = true
    }
    if(all) {
        calculator.clearField()
        all = false
    } 
    else {
        calculator.slice()
        if(text.innerHTML.length < 2 && !text2.innerHTML) {
            all = true
            clear.innerHTML = "AC"
        }
        
    }
    
})    



const operations = document.querySelectorAll("[data-operation");
operations.forEach(operation=>{
    operation.addEventListener("click", ()=>{
        if(text2.innerHTML){
            calculator.equals()
        }
        calculator.operate(operation.innerHTML)
    })
})

const equals = document.querySelector("[data-equal")
equals.addEventListener("click", ()=>{
    calculator.equals()
    all = true
    clear.innerHTML = "AC"
})
    


   
    






