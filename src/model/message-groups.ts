import {User} from "./model";
import {Message} from "./message";
import {Deque} from "./deque/Deque";

export class TemporalGroup {
  // TODO separate mapdeque from deque
  id  = ''
  readonly rootDate: Date
  authorGroups = new Deque<AuthorGroup>([])

  constructor(m: Message) {
    this.rootDate = m.timeStamp
    this.authorGroups.addToEnd(new AuthorGroup(m))
  }

  addToFront(m: Message) {

  }

  addToBack(m: Message) {
    if (this.authorGroups.tail?.author.id == m.user.id) {
      this.authorGroups.tail.addToBack(m)
    } else {
      this.authorGroups.addToEnd(new AuthorGroup(m))
    }
  }

  get lastMessageDate(): Date {
    return this.authorGroups.tail!!.lastMessageDate
  }

}

class AuthorGroup {
  id = ''
  readonly author: User
  messages = new Deque<Message>([])

  constructor(m: Message) {
    this.author = m.user;
    this.messages.addToEnd(m)
  }

  getHead() {
    return this.messages.head
  }

  getTail() {
    return this.messages.tail
  }

  addToFront(m: Message) {
    this.messages.addToFront(m)
  }

  addToBack(m: Message) {
    this.messages.addToEnd(m)
  }

  get lastMessageDate(): Date {
    return this.messages.tail!!.timeStamp
  }
}
