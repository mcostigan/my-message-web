import {User} from "./model";
import {Message} from "./message";
import {Deque} from "./deque/Deque";

export class MessageGroups implements Iterable<TemporalGroup> {
  private temporalGroups = new Deque<TemporalGroup>()


  addOldMessage(m: Message) {
    if (this.temporalGroups.size === 0) {
      this.temporalGroups.addToEnd(new TemporalGroup(m))
      return
    }
  }

  addNewMessage(m: Message) {
    if (this.temporalGroups.size === 0) {
      this.temporalGroups.addToEnd(new TemporalGroup(m))
      return
    }


    /**
     * check if the new message is within 5 minutes of the last message
     * if it is, add to the current temporal group
     * else, create a new temporal group
     */
    let lastGroup = this.temporalGroups.tail!!
    if (+lastGroup.lastMessageDate - +m.timeStamp > 300000) {
      this.temporalGroups.addToEnd(new TemporalGroup(m))
    } else {
      lastGroup.addToBack(m)
    }
  }

  static fromMessages(messages: Message[]): MessageGroups {
    let groups = new MessageGroups()
    messages.forEach((m) => groups.addNewMessage(m))
    return groups
  }

  * [Symbol.iterator](): Iterator<TemporalGroup> {
    for (let group of this.temporalGroups) {
      yield group
    }
  }

  get lastMessage(): Message | null {
    return this.temporalGroups.tail?.lastMessage ?? null
  }
}

export class TemporalGroup {
  readonly rootDate: Date
  authorGroups = new Deque<AuthorGroup>()

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

  get lastMessage(): Message | null {
    return this.authorGroups.tail?.messages.tail ?? null
  }

}

export class AuthorGroup {
  readonly author: User
  messages = new Deque<Message>()
  readonly isMe: boolean = false

  constructor(m: Message) {
    this.author = m.user;
    this.messages.addToEnd(m)
    this.isMe = m.isMyMessage
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
