
class ListNode {
    data: any;
    next: ListNode | null;

    constructor(data: any) {
        this.data = data;
        this.next = null;
    }

}

export default class LinkedList {
    head: ListNode | null;

    constructor() {
        this.head = null;
    }

    addNode(value: any) {
        let newNode = new ListNode(value);

        if (!this.head) {
            this.head = newNode;
        }
        else{
            let current:ListNode = this.head;
            while (current.next){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    printList():string {
        let str = "";
        if (!this.head){
            return "Empty.";
        } else {
            let current:ListNode = this.head;
            while (current.next){
                str += current.data.toString() + ", ";
                current = current.next;
            }
            str += current.data.toString();
        }
        return str;
    }

    toArray():string[]{

        const arr:string[] = [];

        if (!this.head){
            return [];
        } else {
            let current:ListNode = this.head;
            while (current.next){
                arr.push(current.data.toString());
                current = current.next;
            }
            arr.push(current.data.toString());
        }
        return arr;
    }

    clearList(){
        if (!this.head){
            return "List already empty.";
        } else {
            let current:ListNode = this.head;
            while (current.next){
                current.data = null;
                current = current.next;
            }
            this.head = null;
        }
    }
}



export function findIntersect(A: LinkedList, B: LinkedList): any | null {
    let result = null;
    let currentA:ListNode | null = A.head;
    let currentB:ListNode | null = B.head;

    while (currentA && currentB){
        if (currentA.data === currentB.data){
            result = currentA.data;
            break;
        }

        currentA = currentA.next;
        currentB = currentB.next;
    }

    return result ? result : null;
}