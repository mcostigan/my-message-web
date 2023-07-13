import {Message, SimpleMessage} from "./message";
import {User} from "./model";
import {TypingMembers} from "./typing-members";
import {MessageGroups} from "./message-groups";

export class Chat {
  readonly id: string
  readonly name: string
  readonly description: string | null
  readonly messages: MessageGroups
  readonly users: User[]
  readonly creator: User
  readonly createdAt: string
  readonly typingMembers: TypingMembers
  newMessageCallback: (chatId: string) => void


  constructor(id: string, name: string, description: string | null, messages: Message[], users: User[], creator: User, createdAt: string, typingMembers: TypingMembers) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.messages = MessageGroups.fromMessages(messages);
    this.users = users;
    this.creator = creator;
    this.createdAt = createdAt;
    this.typingMembers = typingMembers
    this.newMessageCallback = (id: string) => {
    }
  }


  addNewMessage(message: Message) {

    this.messages.addNewMessage(message)
    this.newMessageCallback(this.id)
  }

  addOldMessages(messages: Message[]) {
    messages.reverse().forEach((m: Message) => this.messages.addOldMessage(m))
  }


  previewText(): string {
    if (this.typingMembers.hasData()) {
      return this.typingMembers.typingText()
    }
    return this.messages.lastMessage?.text ?? ''
  }

  get isGroupChat(): boolean {
    return this.users.length > 2
  }

  get hasUnreadMessage() {
    return this.messages.hasUnreadMessage
  }
}


export interface IChat {
  id: string
  name: string
  description: string | null
  messages: SimpleMessage[]
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
