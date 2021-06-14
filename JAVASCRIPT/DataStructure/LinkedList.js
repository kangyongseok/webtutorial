// 링크드 리스트는 객체를 만들고 이 객체와 객체를 연결
/* 
    1. Node 라는 이름의 객체를 생성
    2. 각각의 노드와 노드간에 연결이 필요
    3. HEAD 로 누가 첫번째 노드인지 정보가 필요
    4. TAIL 로 누가 가장 뒤에있는 노드인지 정보가 필요

    5. 중간에 값을 삽입하거나 제거할때 기존 노드의 연결을 끊고 새로운 다음 노드와의 연결을 해주어야함
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }

    addFirst(value) {
        let newNode = new Node(value)
        newNode.next = this.head;
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
            this.tail = newNode;
            this._size += 1;
        }
    }

    findNode(index) {
        let x = this.head
        for (let i = 0; i < index; i++) {
            x = x.next
        }
        return x
    }

    add(index, value) {
        if (index === 0) {
            this.addFirst(value);
        } else {
            // 값이 삽입될 노드의 이전 노드를 알고 있어야한다.
            // 이전 노드를 알고있다면 삽입될 노드의 다음 노드로 연결할 next 노드의 데이터도 알 수 있다.
            let temp1 = this.findNode(index - 1);
            let temp2 = temp1.next;
            let newNode = new Node(value);
            temp1.next = newNode
            newNode.next = temp2;
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
        this._size -= 1;
        return returnData;
    }
}




const node = new LinkedList();

node.addFirst(10);
node.addFirst(20);

// console.log(node)

// node.addFirst(30);
// node.addFirst(20);
// node.addFirst(10);

// node.add(1, 15);
// node.add(4, 20);
// node.addLast(2);
// console.log(node.removeFirst());
// console.log(node.toString());

