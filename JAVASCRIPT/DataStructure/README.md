## 자료구조
[자료구조 정리](https://blog.yena.io/studynote/2018/11/14/Algorithm-Basic.html)  
[api 모음](https://github.com/rencarKYS/public-apis)

## 구현에 따라
- 배열
- 튜플
- 단방향 연결리스트
- 원형 연결리스트
- 이중 연결리스트
- 해시테이블 

## 배열
자바스크립트에서 사용되는 배열은 사실 배열이 아닌 해시테이블형태의 자료구조라고 볼 수 있다. 자료구조에서 정의하는 배열은 한가지 데이터타 자료구조만 가질 수 있다.
  
배열의 특징
- 배열은 데이터의 삽입이나 삭제가 있을경우 해당 위치를 기준으로 데이터의 이동이 발생한다.
- 배열은 순서를 유지하는 형태를 갖는다.
- 배열은 연속된 위치를 차지한다.
  
기본적으로 데이터를 사용하고 저장한다는것은 메모리를 사용한다는것이다. 각 메모리는 주소를 갖고있고 변수는 이 주소를 참조하고있다. 이때 변수가 참조하고있는 메모리주소가 `a01` 이라는 주소라면 배열이 저장되어있을때 다음값들은 `a02`, `a03` 이러한형태로 순차적으로 저장되어있다.

자바나 C 언어로 자료구조에서 사용되는 메서드들을 구현해내는 내용은 있는데 자바스크립트로 정의된 내용은 없어서 여기서는 자바스크립트로 배열의 동작을 흉내내 보려고합니다.

### add
```js
const arr = ['사과', '배', '딸기']
```
이러한 배열이 있을때 `1` 번째 index 에 `오렌지` 라는 값을 추가할때 배열의 동작은 1번째 인덱스 이후의 값들은 한칸씩 뒤로 밀려나게됩니다. 그리고나면 1번째 index 는 현재 비어있는 자리가 되는데 이 자리에 `오렌지` 라는 값을 추가합니다.
  
배열에서 값의 추가와 삭제에 따라 데이터의 이동이 발생한다는게 바로 이런식으로 동작하기때문입니다. 순서가 항상 보장되어 있기때문에 값이 추가 또는 삭제되었을때 데이터의 순서를 유지하기위해 추가된 인덱스 이후의 데이터들이 뒤로 혹은 앞으로 한칸씩 모두 이동해야하는 비효율적인 동작들이 발생하게됩니다.

이러한 동작을 코드로 작성해보겠습니다.
```js
Object.prototype.add = function (index, value) {
    for (let i = arr.length - 1; i >= index; i--) {
        arr[i + 1] = arr[i];
    }
    arr[index] = value
}

console.log(arr.add(1, '포도') // ['사과', '포도', '배', '딸기']
```
`Object.prototype` 은 자바스크립트의 모든 객체가 갖고있는 최상위 객체로 모든 객체들은 바로 이 최상위객체가 갖고있는 프로퍼티와 메서드들을 상속받아 사용할 수 있습니다. 이러한 자바스크립트의 프로토타입 상속을 활용하여 코드를 작성하였습니다.
  
add 라는 메서드를 추가해주고 내부 로직을 작성해줍니다. 배열에 값을 추가할때 몇번째 인덱스에 어떤값을 추가할지 정보가 필요하기때문에 `index`, `value` 의 두 인자를 전달받아 처리합니다.
  
값을 추가할때 가장 먼저 해야할 작업은 가장 맨끝에 있는 값부터 한칸씩 오른쪽 인덱스로 이동시켜야하는점입니다.
```js
arr[3] = arr[2]
arr[2] = arr[1]
arr[index] = value
```
이런 식으로 index 를 기준으로 후열에있는 값들을 한칸씩 이동시키고 타겟팅된 index 에는 지정한 값이 들어가야하기때문에 반복문을 이용해서 배열의값의 이동을 구현하고 타겟 index 자리에 값을 주었습니다.

### remove
값을 제거하는건 반대로해주면되는데 이때주의할점은 가장 마지막은 어떠한값으로도 덮어주지도않았기때문에 배열의 길이도 그대로 남아있고 마지막값또한 사라지지않고 그대로 있습니다. 이에대한 처리를 해야하는데 자바스크립트에서 객체를 제거할때 사용하는 `delete` 키워드를 사용하겠습니다.

```js
Object.prototype.remove = function (index) {
    const removeData = arr[index]
    for (let i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    delete arr[arr.length - 1]
    return removeData
}

console.log(arr.remove(2)) //  // 배
console.log(arr)  // ['사과', '포도', '딸기']
```
`delete` 라는 키워드로 사실 리무브를 할 수 있지만 여기서는 배열의 동작에 대한 이해와 이를 자바스크립트로 구현하는 연습을 하는것이 포인트입니다.
  
remove 에는 한가지 기능이 더있는데 제거한 값을 리턴해주는 기능입니다. 그리고 여기서는 별도의 값이 필요한것이 아닌 제거할 인덱스값만 필요하기때문에 하나의 인자만 전달받습니다.

### get
배열에서의 값의 추가와 삭제는 인덱스를 기준으로 후열값들에 대한 이동이라는 부수적인 동작이 필요하기때문에 이에대한 실행시간이 배열의 길이가 늘어날수록 증가하게됩니다 `O(n)`. 이런 배열에도 장점이 있는데 바로 순서가 보장되어있다라는 배열의 특징으로인해 값을 가져오는것은 `O(1)` 의 시간 복잡도록 수행 가능합니다.

```js
Object.prototype.get = function (index) {
    return arr[index]
}
console.log(arr.get(1)) // 포도
```

## 연결리스트
연결리스트는 연속된 데이터의 나열이 아니라 각 데이터를 노드라고 부르는데 이 노드들은 각자가 다음의 노드를 가리키고있다. 무슨말이냐면 각각의 노드는 다음 노드의 메모리주소를 갖고있다고 볼 수 있다. 그래서 배열은 연속된 메모리주소에 순차적으로 저장되어있다면 연결리스트의 데이터는 연속적일수도 아닐수도 있다. 
  
연결리스트의 형태에따라 다음 노드의 메모리만 갖고있다면 `단방항 연결리스트`, 이전 노드의 메모리주소도 갖고있다면 `양방향 연결리스트` 라고 부른다. 
  
때문에 배열과 다르게 어떤 값에 접근하려면 K 번 루프를 돌아야 접근이 가능하다. 대신에 데이터의 삽입이나 삭제를 할때는 O(1) 의 시간복잡도를 갖는다.
  
우선 단방향 연결리스트부터 자바스크립트 코드로 구현해보도록 하겠다.

### addFirst
`addFirst` 는 연결리스트의 가장 맨 첫번째값으로 추가하는 기능을 갖습니다. 
```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
```
배열을 구현해볼때는 `prototype` 의 상속을 활용했었는데 연결리스트는 객체로 구성되어있어야하기때문에 자바스크립트에 추가된 클래스 문법을 활용하려고 합니다. 
  
먼저 노드객체를 만들어줘야하기때문에 위와같은 노드클래스를 정의해주었습니다. 해당 노드객체는 data 와 next 의 정보를 갖는 객체로 생성됩니다.
```js
console.log(new Node(1)) // {data: 1, next: null}
```

```js
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }
}
```
그리고 또 하나의 클래스가 필요한데 여기에 연결리스트에 필요한 다양한 메서드들을 정의하려고합니다. 연결리스트에서는 처음에도 설명했던것처럼 가장 첫번째값(head), 가장 마지막값(tail) 이 있어야하고 해당 연결리스트가 갖고있는 값을 저장할  `_size` 도 초기화 해주었습니다.

```js
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }

     addFirst(value) {
        let newNode = new Node(value) // 새로운 노드 객체 생성
        newNode.next = this.head; // 노드객체의 next 에 head 를 지정
        this.head = newNode // head 에는 새로 생성된 노드객체 지정
        this._size += 1 // 연결리스트의 사이즈 증가
        if (!this.head.next) { // 다음 노드가 없다면
            this.tail = this.head // 다음 노드가 없다는건 head 가 곧 tail
        }
    }
}

const numbers = new LinkedList();
numbers.addFirst(10); // Node { data: 10, next: null }
```

위와같이 새로운값이 들어오면 새로운 노드객체를 생성해주고 기존의 head 객체는 추가된 객체에 우선순위가 밀러라니때문에 next 에 지정해주고 head 는 새로 생성된 객체를 가르키게된다. 이때 만약 head 에 next 가 지정되어있지않다면 첫번째값이 곧 꼬리값이나 마찬가지이다.


### addLast
```js
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
```
이번엔 가장 마지막에 노드를 추가하는 메서드를 작성한다. 값을 전달받아 새로운 노드객체를 생성하고 이때 만약 `size` 가 0이라면 해당 값이 가장 처음값이기때문에 이땐 이미 만들어둔 `addFirst()` 메서드를 실행시킨다. 값이 존재한다면 해당값은 꼬리값으로 지정되야하므로 현재 꼬리의 next 에 객체를 추가해준다.
  
그리고 꼬리에 생성된 객체를 저장하고 전체사이즈를 1 증가시켜준다.
  

### 특정위치의 노드를 찾는 메서드 findNode
```js
findNode(index) {
    let x = this.head
    for (let i = 0; i < index; i++) {
        x = x.next
    }
    return x
}
```
배열은 순서가 보장된 데이터 목록이기때문에 `index` 를 통해서 타겟에 접근할 수 있었습니다. 그러나 연결리스트는 다음값을 알기위해서는 이전값을 알아야하고 그렇게 타고 올라가다보면 결국 `head` 를 알아야 다음값을 알 수 있습니다. 그래서 `head` 를 변수에 저장하고 넘겨받은 `index` 만큼 반복문을 돌면서 `next` 를 통해서 다음객체 그리고 다음객체 그리고 타겟이 된 객체가 나올때까지 반복문을돌고 찾으려는 객체를 리턴해주는 메서드입니다.

### add
찾으려는 타겟의 객체를 구하는 메서드를 먼저 작성한 이유는 이 add 메서드에서 사용되어야하기때문이다.  
```js
    add(index, value) {
        if (index === 0) {
            this.addFirst(value);
        } else {
            // 값이 삽입될 노드의 이전 노드를 알고 있어야한다.
            // 이전 노드를 알고있다면 삽입될 노드의 다음 노드로 연결할 next 노드의 데이터도 알 수 있다.
            let prev = this.findNode(index - 1);
            let next = prev.next;
            let newNode = new Node(value);
            prev.next = newNode
            newNode.next = next;
            this._size += 1
            if (newNode.next === null) {
                this.tail = newNode
            }
        }
    }
```
add 에서는 두가지 인자가 필요합니다. 몇번째에 값을 넣을건지와 어떤 객체를 추가할것인지 이때 index 가 0 이라면 가장 첫번째에 값을 추가하는것이기때문에 `addFirst` 를 활용합니다. 만약 index 가 1이라면 1이전의 값 즉 0번째에있는 값을 알아야합니다. 바로 이 이전값을 알아내기위해 미리 만들어둔 findNode 를 활용합니다. 
 
임시 변수에 넣으려는 위치의 이전객체를 저장하고 이 추가된 값은 다음값또한 알고있어야 next 로 연결해줄 수 있기때문에 임시변수를 하나 더 만들어서 다음객체를 저장합니다. 이때 다음객체는 이전객체의 next 이기때문에 쉽게 구할 수 있습니다.
  
그리고 전달받은 값으로 새로운 객체를 생성하고 이전값의 next 에 새로 생성된 객체를 저장하고 새로 생성된 객체의 다음값으로는 그 다음객체를 저장해줍니다. 데이터가 추가되었기 때문에 size 를 늘려주고 만약 현재 객체의 next 로 저장한 값이 아무것도 없다면 추가된 해당 객체는 가장 마지막 값이기떄문에 tail 에 새로 생성된 객체를 추가하는 조건 코드를 작성해줍니다.

### toString
값을 추가하는 메서드들은 작성했지만 그래서 현재 노드의 값들이 몇개가있는지 어떤값들이 들어갔는지 알기 어렵습니다. 그래서 toString 이라는 메서드를 추가해서 현재 연결리스트의 데이터를 출력하려고합니다.
```js
toString() {
    const result = [];
    if (this.head === null) return result;
    let temp = this.head;
    for (let i = 0; i < this._size; i++) {
        result.push(temp.data)
        temp = temp.next
    }
    return result
}
```

연결리스트에서는 어떤 값을 얻어내기위해서는 항상 head 부터 시작해야합니다. 그래서 임시변수에 head 의 객체를 저장하고 size 에 현재 노드객체의 갯수를 저장하고있기때문에 size 만큼 반복문을 돌면서 next 데이터를 다시 임시변수에 저장하고 빈 배열을 만들어서 여기에는 next 를 돌때마다 데이터를 추가해줍니다.

### removeFirst
```js
removeFirst() {
    let temp = this.head
    this.head = this.head.next;
    let returnData = temp.data;
    temp = null;
    this._size -= 1;
    return returnData;
}
```
값을 제거하는 메서드를 만들건데 가장 첫번째 노드만 제거하는 메서드입니다. 임시변수에 head 객체를 저장하고 head 객체에는 head 의 next 객체를 저장해줍니다. 그리고 제거한 데이터를 리턴해주기위해 returnData 에 임시변수에 저장했던 head 의 값을 넣어주고 임시변수는 null 을 할당합니다. 
  
size를 1줄여주고 제거한 데이터를 리턴합니다.


## 이중 연결리스트 (양방향 연결리스트)
이중연결리스트는 단방향 연결리스트의 연장선이라고 볼 수 있는데 각각의 노드가 다음객체뿐만아니라 이전 객체에 대한 정보도 갖고있는 데이터구조라고 볼 수 있다. 
  
단방향 연결리스트는 어떤 특정한 위치의 값을 찾기위해서는 head 부터 시작해서 n번에 위치한 타겟까지 계속 찾아나가야하는 단점이 존재한다. 양방향연결리스트를 활용한다면 타겟의 위치가 앞에서부터 더 가까운지 뒤에서부터 더 가까운지 확인한다음 더 가까운쪽에서 출발해서 타겟데이터를 찾을수 있다. 
  
가장 먼 데이터를 찾게되더라도 최대 2/n 만큼의 반복만 실행하면되기때문에 단방향보다는 데이터 검색에 있어서 효율적이다. 다만 이전객체에대한 정보도 갖고있어야하기에 메모리의 사용량이 좀더 늘어나게된다.

### addFirst
이중연결리스트는 단방향 연결리스트의 연장선이기때문에 동일한 메서드를 재사용합니다.
```js
addFirst(value) {
    let newNode = new Node(value)
    newNode.next = this.head;
    if (this.head !== null) this.head.prev = newNode // 추가
    this.head = newNode
    this._size += 1
    if (!this.head.next) {
        this.tail = this.head
    }
}
```

조건문이 하나가 추가되었는데 만약 head 가 현재 아무값도 없다면 이전값으로 지정할 객체가 없기때문에 head 가 있을때에만 head 의 prev 에 새로운 노드객체가 추가될 수 있도록 합니다.

### addLast
```js
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
```

새로 생된 노드객체가 가장 마지막 노드가 될것이므로 새 노드객체의 이전노드로 기존의 tail객체를 저장하는 코드를 추가합니다.

### findNode
```js
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
```

이제 노드를 찾을때에는 head 또는 tail 과 더 가까운 위치부터 찾아 나가야하기때문에 해당 리스트의 절반을 구하고 index가 절반보다 작다면 head 부터 시작, index 가 절반보다 크다면 tail 부터 시작하는 코드를 작성합니다.

### add
```js
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
```

temp1 에는 찾으려는 값의 이전노드객체를 저장하고있고 temp2 는 현재 index 에 있는 노드객체를 저장하고있습니다.  
새로운 노드객체가 생성되면 temp2 가 그 자리를 지키고있다가 앞자리를 내주는것이기때문에 temp2.prev 에 새로운 노드객체를 지정해줍니다.
  
새로운 노드객체는 temp1을 이전 노드객체로 갖게됩니다.

### removeFirst
```js
removeFirst() {
    let temp = this.head
    this.head = this.head.next;
    let returnData = temp.data;
    temp = null;
    if (this.head !== null) this.head.prev = null // 추가
    this._size -= 1;
    return returnData;
}
```

기존의 제거 메서드에서 다른 객체는 다 정리되었고 이전객체와 연결되어있던 데이터와의 연결을 끊어줘야합니다.

### remove
```js
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
```




## 원형 연결리스트


## 형태에 따라
- 스택
- 큐
- 원형큐
- 그래프
- 트리 (이진트리, 힙)

