const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        const newNode = new Node(data);
        this.length++;

        if (!this._head) {
            this._head = newNode;    
            this._tail = newNode;
        } 
        else {
            newNode.prev = this._tail;
            this._tail.next = newNode;
            this._tail = newNode; 
        }

        return this;
    }

    head() {
        return this.length ? this._head.data : null;
    }

    tail() {
        return this.length ? this._tail.data : null;
    }

    at(index) {
        let node = this._head;

        for(let i = 0; i < index; i++) {
            node = node.next;
        }

        return node.data;
    }

    insertAt(index, data) {
        const newNode = new Node(data);

        if (this._head === null) { this.append(data); } 
        else {
            let node = this._head;
            let prev = null;            

            for(let i = 0; i < index; i++) {
                prev = node;
                node = node.next;
            }

            if (node === null) { this.append(data); } 
            else {
                newNode.prev = node.prev;
                newNode.next = node;
                node.prev = newNode;
                prev.next = newNode;
            }

            this.length++;
            return this;
        }
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        let node = this._head;
        let nextNode = null;
        let prevNode = null;
        this.length--;

        for(let i = 0; i < index; i++) {
            nextNode = node.next;
            prevNode = node.prev;

            node = node.next;
        }

        prevNode.next = nextNode;
        nextNode.prev = node.prev;

        return this;
    }

    reverse() {
        let node = this._head;

        for(let i = 0; i < this.length; i++) {
            [node.next, node.prev] = [node.prev, node.next];
            node = node.prev;
        }

        [this._tail, this._head] = [this._head, this._tail];

        return this;
    }

    indexOf(data) {
        let node = this._head;

        for(let i = 0; i < this.length; i++) {
            if(node.data === data) {
                return i;
            }

            node = node.next;
        }

        return -1;
    }
}

module.exports = LinkedList;
