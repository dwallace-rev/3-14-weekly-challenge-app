// Implement a stack that has the following methods:
// • push ( val ) : push val onto the stack
// • pop: pop off and return the topmost element of the stack. If there are no elements in the stack, throw an error.
// • max: return the maximum value in the stack currently. If there are no elements in the stack, throw an error.

import EmptyStackError from "../errors/empty-stack-error";


export default class Stack<T>{
    private stack:T[] = [];

    constructor(initial:T[] = Array<T>()){
        this.stack = initial;
    }

    public push(val:T){
        this.stack.push(val);
    }

    public pop(){
        if (this.stack.length <= 0){ 
            throw new EmptyStackError("Stack is empty!")
        }
        this.stack.pop();
    }

    public max():T{
        if (this.stack.length <= 0){ 
            throw new EmptyStackError("Stack is empty!")
        }
        let maxValue: T = this.stack[0];

        this.stack.forEach((current)=>{
            if (current > maxValue) maxValue = current;
        });

        return maxValue;
    }
    public clear(){
        this.stack = [];
    }
    public getStack(){
        let data:T[] = []
        this.stack.forEach(item=>data.push(item));
        return data;
    }

    // this function is used to display the stack's current state vertically, by reversing
    // the array order without modifying original array. First item appears at the bottom (end) of the output.
    public render():T[]{
        let outputArr:T[] = [];
        this.stack.forEach(item=>outputArr.push(item));
        
        return outputArr.reverse();
    }
}

function testStack(){
    let A = new Stack([1,2,3,4,5]);
    A.push(9);
    console.log(A.max());
    console.log(A.render());
    A.pop();
    console.log(A.max());
    console.log(A.render());

}

function test2(){
    let B = new Stack([67]);
    B.push(543);
    B.push(5);
    B.push(423);
    B.push(22);

    console.log(B.max());
}