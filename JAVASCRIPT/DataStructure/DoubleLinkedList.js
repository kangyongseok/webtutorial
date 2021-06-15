
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }

    addFirst(value) {
        let newNode = new Node(value)
        newNode.next = this.head;
        if (this.head !== null) this.head.prev = newNode // 추가
        this.head = newNode
        this._size += 1
        if (!this.head.next) { // 다음 노드가 없다면
            this.tail = this.head
        }
    }
    
    addLast(value) {
        let newNode = new Node(value);
        if(this._size === 0) {
            this.addFirst(value)
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail; // 추가
            this.tail = newNode;
            this._size += 1;
        }
    }

    findNode(index) {
        let half = this._size / 2 // 추가
        if (index < half) { // 추가
            let x = this.head
            for (let i = 0; i < index; i++) {
                x = x.next
            }
            return x
        } else {
            // 추가
            let x = this.tail
            for (let i = this._size - 1; i > index; i--) {
                x = x.prev;
            }
            return x
        }
        
    }

    add(index, value) {
        if (index === 0) {
            this.addFirst(value);
        } else {
            let temp1 = this.findNode(index - 1);
            let temp2 = temp1.next;
            let newNode = new Node(value);
            temp1.next = newNode
            newNode.next = temp2;
            if (temp2 !== null) temp2.prev = newNode // 추기
            newNode.prev = temp1 // 추가
            this._size += 1
            if (newNode.next === null) {
                this.tail = newNode
            }
        }
    }

    toString() {
        const result = [];
        if (this.head === null) {
            return "[]";
        }
        let temp = this.head;
        for (let i = 0; i < this._size; i++) {
            result.push(temp.data)
            temp = temp.next
        }
        return result
    }

    removeFirst() {
        let temp = this.head
        this.head = this.head.next;
        let returnData = temp.data;
        temp = null;
        if (this.head !== null) this.head.prev = null
        this._size -= 1;
        return returnData;
    }

    remove(index) {
        if (index === 0) return this.removeFirst();
        let temp = this.findNode(index - 1);
        let todoDeleted = temp.next;
        temp.next = temp.next.nex;
        if (temp.next !== null) temp.next.prev = temp
        let returnData = todoDeleted.data;
        if (todoDeleted === this.tail) this.tail = temp;
        todoDeleted = null;
        this._size -= 1
        return returnData
    }
}




const node = new LinkedList();

node.addFirst(10);
node.addFirst(20);
