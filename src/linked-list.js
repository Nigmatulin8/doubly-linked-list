const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const newNode = new Node(data);
        this.length++;
        
        if(this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        }

        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        return this;
    }

    head() {
        return this.head.data;
    }

    tail() {
        this.tail.data;
    }

    at(index) {
        let node = this.head;

        for(let i = 0; i < index; i++) {
            node = node.next;
        }

        return node.data;
    }

    insertAt(index, data) {
        const newNode = new Node(data);
        let node = this.head;
        this.length++;

        for(let i = 0; i < index; i++) {
            node = node.next;
        }

        newNode.mex = node.next
        node.next = newNode;

        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this.head = null;
        this.head = null;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        this.length--;
        let node = this.head;

        for(let i = 0; i < index; i++) {
            node = node.next;
        }

        node.prev.next = node.next;
        node.next.prev = node.prev;

        return this;
    }

    reverse() {
        let node = this.head;

        for(let i = 0; i < this.length; i++) {
            [node.next, node.prev] = [node.prev, node.next];
            node = node.prev;
        }

        [this.tail, this.head] = [this.head, this.tail];

        return this;
    }

    indexOf(data) {
        let node = this.head;
        let index = 0;

        while(node.next != null) {
            if(node.data == data) {
                return index;
            }

            node = node.next;
        }

        return -1;
    }
}

module.exports = LinkedList;
