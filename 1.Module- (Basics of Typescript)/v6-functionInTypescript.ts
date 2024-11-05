//Normal Function
function add (num1:number, num2:number): number{
    return num1 + num2;
}

add(1,3)

//Arrow Function
const addArrow = (num1:number, num2:number):number => num1 + num2

//if there is a function inside an Object is called method
// object -- function ==> method
const poorUser = {
    name: "Shahidullah",
    balance: 20,
    addBalance (balance: number):string{
        return `The total balance is now ${this.balance + balance}`
    }
}

const arr: number[] = [1,2,3]

const newArr: number[] = arr.map((n:number): number => n * n)