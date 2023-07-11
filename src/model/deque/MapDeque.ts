export class MapDeque<T extends { id: string }> implements Iterable<T> {
  private _head: DequeNode<T> | null = null
  private _tail: DequeNode<T> | null = null
  private map: Map<string, DequeNode<T>> = new Map<string, DequeNode<T>>()

  constructor(data: T[]) {
    data.forEach((t: T) => {
      this.addToEnd(t)
    })
  }


  get tail(): T | null {
    return this._tail?.data ?? null;
  }

  get head(): T | null {
    return this._head?.data ?? null;
  }

  addToFront(data: T) {
    const node = new DequeNode(data, null, this._head)
    if (this._head) {
      this._head.prev = node
    }
    this.drawPointers(node)
    this.hash(node)
  }

  addToEnd(data: T) {
    const node = new DequeNode(data, this._tail, null)
    if (this._tail) {
      this._tail.next = node
    }
    this.drawPointers(node)
    this.hash(node)
  }

  private hash(node: DequeNode<T>){
    this.map.set(node.data.id, node)
  }

  moveToFront(id: string){
    let node = this.map.get(id)
    if (!node){
      return
    }
    this.moveNodeToFront(node)
  }

  private moveNodeToFront(node: DequeNode<T>){
    let prev = node.prev
    let next = node.next

    node.next = this._head
    if (this._head){
      this._head.prev = node
    }
    this._head = node
    node.prev = null

    if (prev){
      prev.next = next
    }

    if (next){
      next.prev = prev
    }
    console.log(this._head)

  }

  private drawPointers(node: DequeNode<T>) {
    if (node.prev == null) {
      this._head = node
    }
    if (node.next == null) {
      this._tail = node
    }

  }

  * [Symbol.iterator](): Iterator<T> {
    let node = this._head
    while (node != null) {
      yield node.data
      node = node.next
    }
  }
}

class DequeIterator<T extends { id: string }> implements Iterator<T> {
  private node: DequeNode<T> | null

  constructor(node: DequeNode<T> | null) {
    this.node = node
  }

  next(...args: [] | [undefined]): IteratorResult<T> {
    if (this.node == null) {
      return {done: true, value: null}
    }
    if (this.node.next == null) {
      return {done: true, value: this.node.data}
    }
    const result = {done: false, value: this.node.data}

    this.node = this.node.next

    return result
  }

}


class DequeNode<T extends { id: string }> {
  private _data: T
  private _prev: DequeNode<T> | null
  private _next: DequeNode<T> | null


  constructor(data: T, prev: DequeNode<T> | null, next: DequeNode<T> | null) {
    this._data = data;
    this._prev = prev;
    this._next = next;
  }


  get data(): T {
    return this._data;
  }

  set data(value: T) {
    this._data = value;
  }

  get prev(): DequeNode<T> | null {
    return this._prev;
  }

  set prev(value: DequeNode<T> | null) {
    this._prev = value;
  }

  get next(): DequeNode<T> | null {
    return this._next;
  }

  set next(value: DequeNode<T> | null) {
    this._next = value;
  }
}
