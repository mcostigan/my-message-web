import {InterfaceMessage, Message} from "./message";
import {User} from "./model";
import {MapDeque} from "./deque/MapDeque";
import {TypingMembers} from "./typing-members";

export class Chat {
  readonly id: string
  readonly name: string
  readonly description: string | null
  readonly messages: MapDeque<Message>
  readonly users: User[]
  readonly creator: User
  readonly createdAt: string
  readonly typingMembers: TypingMembers
  newMessageCallback: (chatId: string) => void


  constructor(id: string, name: string, description: string | null, messages: Message[], users: User[], creator: User, createdAt: string, typingMembers: TypingMembers) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.messages = new MapDeque<Message>(messages);
    this.users = users;
    this.creator = creator;
    this.createdAt = createdAt;
    this.typingMembers = typingMembers
    this.newMessageCallback = (id: string)=>{}
  }


  addNewMessage(message: Message) {

    this.messages.addToEnd(message)
    this.newMessageCallback(this.id)
  }

  addOldMessages(messages: Message[]) {
    messages.reverse().forEach((m: Message) => this.messages.addToFront(m))
  }


  previewText(): string {
    if (this.typingMembers.hasData()) {
      return this.typingMembers.typingText()
    }
    return this.messages.tail?.text ?? ''
  }

  get isGroupChat(): boolean {
    return this.users.length > 2
  }
}


export interface IChat {
  id: string
  name: string
  description: string | null
  messages: InterfaceMessage[]
  users: User[]
  creator: User
  createdAt: string
}

export interface ChatEvent {
  type: string
  user: User
  timeStamp: string
}

export interface TypingEvent extends ChatEvent {
}

export interface IsTypingEvent extends TypingEvent {
  timeoutSeconds: number
}

export interface NotTypingEvent extends TypingEvent {

}
