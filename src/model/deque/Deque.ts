export class Deque<T> implements Iterable<T> {
  protected _head: DequeNode<T> | null = null
  protected _tail: DequeNode<T> | null = null

  constructor() {
  }


  get tail(): T | null {
    return this._tail?.data ?? null;
  }

  get head(): T | null {
    return this._head?.data ?? null;
  }

  addToFront(data: T) {
    const node = new DequeNode(data, null, this._head)
    this.addNodeToFront(node)
  }

  addToEnd(data: T) {
    const node = new DequeNode(data, this._tail, null)
    this.addNodeToBack(node)
  }

  protected addNodeToFront(node: DequeNode<T>) {
    if (this._head) {
      this._head.prev = node
    }
    this.drawPointers(node)
  }

  protected addNodeToBack(node: DequeNode<T>) {
    if (this._tail) {
      this._tail.next = node
    }
    this.drawPointers(node)
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

  static fromData<T>(data: T[]): Deque<T> {
    let d = new Deque<T>()
    data.forEach((i: T) => d.addToEnd(i))
    return d
  }
}

class DequeNode<T> {
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

export class MapDeque<T extends { id: string }> extends Deque<T> {

  private map: Map<string, DequeNode<T>> = new Map<string, DequeNode<T>>()

  constructor() {
    super();
  }

  override addToFront(data: T) {
    let node = new DequeNode(data, null, this._head)
    super.addNodeToFront(node);
    this.hash(node)
  }

  override addToEnd(data: T) {
    let node = new DequeNode(data, this._tail, null)
    super.addNodeToBack(node);
    this.hash(node)
  }

  private hash(node: DequeNode<T>) {
    this.map.set(node.data.id, node)
  }

  private moveNodeToFront(node: DequeNode<T>) {
    if (node == this._head) {
      return
    }
    let prev = node.prev
    let next = node.next

    node.next = this._head
    if (this._head) {
      this._head.prev = node
    }
    this._head = node
    node.prev = null

    if (prev) {
      prev.next = next
    }

    if (next) {
      next.prev = prev
    }
  }


  moveToFront(id: string) {
    let node = this.map.get(id)
    if (!node) {
      return
    }
    this.moveNodeToFront(node)
  }
}
