let all = false

const m = document.querySelector(".m")
const a = document.querySelector(".a")
const b = document.querySelector(".b")
const c = document.querySelector(".c")
const d = document.querySelector(".d")
const e = document.querySelector(".e")
const g = document.querySelector(".g")
const h = document.querySelector(".h")
const i = document.querySelector(".i")
const j = document.querySelector(".j")
const k = document.querySelector(".k")
const l = document.querySelector(".l")


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
        
        this.previousNumber.innerHTML = 0
        this.currentNumber.innerHTML = ""
        // text.innerHTML = 0
    }

    slice() {
        if(this.previousNumber.innerHTML){
            this.previousNumber.innerHTML = this.previousNumber.innerHTML.slice(0, -1)
        }
         else if(!this.previousNumber.innerHTML) {
            this.clearField()
        }
    }

    operate(operation) {
        this.operation = operation

            this.currentNumber.innerHTML = this.previousNumber.innerHTML;
        this.previousNumber.innerHTML = ""
    }

    equals() {
        let compute;
        let first = parseFloat(this.currentNumber.innerHTML);
        let second = parseFloat(this.previousNumber.innerHTML);
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
        
            case `${e.innerHTML}`:
                compute = first / second
                break
            case `${b.innerHTML}`:
                compute = first ** second
                break
            case `${i.innerHTML}`:
                compute = Math.pow(first, 1/second)
                break;
            
            default:
                return
        }
        this.previousNumber.innerHTML = compute
        this.currentNumber.innerHTML = ''
    }

    operateB(operation) {
        this.operation = operation
        let compute;
      

        if(this.previousNumber.innerHTML !== '') {
            switch(this.operation) {
                case "Rand":
                        compute = Math.random()
                    break
                
                case "tanh":
                    compute = Math.tanh(parseFloat(this.previousNumber.innerHTML))
                    break
                case "cosh":
                    compute = Math.cosh(parseFloat(this.previousNumber.innerHTML))
                    break
                case "sinh":
                    compute = Math.sinh(parseFloat(this.previousNumber.innerHTML))
                    break
                case "x!":
                    compute = factorial(parseFloat(this.previousNumber.innerHTML))
                    break
                case "sin":
                    compute = Math.sin(parseFloat(this.previousNumber.innerHTML))
                    break
                case "cos":
                    compute = Math.cos(parseFloat(this.previousNumber.innerHTML))
                    break
                case "tan":
                    compute = Math.tan(parseFloat(this.previousNumber.innerHTML))
                    break
                case `${m.innerHTML}`:
                    compute = Math.PI
                    break;
                case "ln":
                    compute = Math.random()
                    break;
                case "e":
                    compute = Math.exp(1)
                    break;
                case "EE":
                    compute = 10 ** this.previousNumber.innerHTML
                    break;
                case "log10":
                    compute = Math.log10(this.previousNumber.innerHTML)
                    break;
                case `${a.innerHTML}`:
                    compute = this.previousNumber.innerHTML ** 3
                    break;
                case `${c.innerHTML}`:
                    compute = this.previousNumber.innerHTML ** 2
                    break;
                case `${d.innerHTML}`:
                    compute = this.previousNumber.innerHTML / 4 
                    break;
                case `${g.innerHTML}`:
                    compute = Math.sqrt(this.previousNumber.innerHTML)
                    break;
                case `${h.innerHTML}`:
                    compute = Math.cbrt(this.previousNumber.innerHTML)
                    break;
                case '%':
                    compute = this.previousNumber.innerHTML/100
                    break;
                case `${j.innerHTML}`:
                    compute = 10 ** this.previousNumber.innerHTML
                    break;
                case `${k.innerHTML}`:
                    compute = Math.exp(this.previousNumber.innerHTML)
                    break;
                case `${l.innerHTML}`:
                    if(!this.previousNumber.innerHTML.includes('-')) {

                        let v = this.previousNumber.innerHTML
                        let w = v.split('')
                        w.unshift('-')
                        let x = w.join('')
                        compute = parseFloat(x)
                    } else {
                        compute = this.previousNumber.innerHTML.replace('-', '')
                    }
                    break;
                
            }
            if(isNaN(compute) || compute == -Infinity || compute == Infinity){
                compute = `Error`
                this.previousNumber.innerHTML = compute
            } else {

                this.previousNumber.innerHTML = compute
            }
        } 
       
    }
}


const text = document.querySelector(".text")
const text2 = document.querySelector(".text2")
const calculator = new Cal(text, text2)

const clear = document.querySelector(".ac")

const numbers = document.querySelectorAll("[data-id]");
numbers.forEach(num=>{
    num.addEventListener("click", (e)=>{
        if(text.textContent == 0 && text.textContent.length == 1){
            text.innerHTML = ''
        }
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
    
const operations2 = document.querySelectorAll("[data-operation2");
operations2.forEach(operation=>{
    operation.addEventListener("click", (e)=>{
        calculator.operateB(operation.innerHTML)
        all = true
    clear.innerHTML = "AC"
    })
})


////// FACTORIAL //////
let f = [];
function factorial (n) {
    if (n === 0 || n === 1){
        return 1;
    }
    if (f[n] > 0) {
        return f[n]
    }
    return f[n] = factorial(n-1) * n;
}










