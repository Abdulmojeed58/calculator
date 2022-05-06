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
    operate(operation) {
        this.operation = operation
        this.currentNumber.innerHTML = this.previousNumber.innerHTML;
        this.previousNumber.innerHTML = ""
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
        calculator.operate(operation.innerHTML)
    })
})

const equals = document.querySelector("[data-equal")
equals.addEventListener("click", ()=>{
    calculator.equals()
})
    


   
    






