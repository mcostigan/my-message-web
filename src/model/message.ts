import {User} from "./model";
import {MessageService} from "../app/service/message/message.service";

export interface SimpleMessage {
  id: string
  text: string
  timeStamp: string
  authorId: string
  readBy: string[]
}

export class Message {
  readonly id: string
  readonly text: string
  readonly user: User
  readonly timeStamp: Date
  readonly isMyMessage: boolean
  private state: MessageState
  private readState: ReadState

  constructor(id: string, text: string, user: User, timeStamp: string, isSent: boolean, isRead: boolean, isMyMessage: boolean, messageService: MessageService) {
    this.id = id;
    this.text = text;
    this.user = user;
    this.timeStamp = new Date(timeStamp);
    this.state = MessageState.getState(isSent, this)
    this.readState = ReadState.get(this, isRead, messageService)
    this.isMyMessage = isMyMessage
  }

  get isSent(): boolean {
    return this.state.isSent
  }

  setState(state: MessageState) {
    this.state = state
  }

  get isRead(): boolean {
    return this.readState.isRead()
  }

  read() {
    this.readState.read()
  }

  setReadState(state: ReadState) {
    this.readState = state
  }

}

abstract class MessageState {
  protected readonly context: Message

  protected constructor(context: Message) {
    this.context = context;
  }

  abstract get isSent(): boolean

  abstract markAsSent(): void

  static getState(isSent: boolean, context: Message): MessageState {
    if (isSent) {
      return new SentState(context)
    }
    return new PendingState(context)
  }
}

class PendingState extends MessageState {


  constructor(context: Message) {
    super(context);
  }

  markAsSent(): void {
    this.context.setState(new SentState(this.context))
  }

  override get isSent() {
    return false
  }

}

class SentState extends MessageState {

  constructor(context: Message) {
    super(context);
  }

  markAsSent(): void {
    return
  }

  override get isSent() {
    return true
  }

}

abstract class ReadState {
  protected constructor(protected message: Message, protected messageService: MessageService) {
  }

  abstract read(): void

  abstract isRead(): boolean

  static get(message: Message, isRead: boolean, messageService: MessageService): ReadState {
    if (isRead) {
      return new IsReadState(message, messageService)
    }
    return new IsUnreadState(message, messageService)
  }
}

class IsUnreadState extends ReadState {

  isRead(): boolean {
    return false;
  }

  read(): void {
    this.messageService.readMessage(this.message.id)
    this.message.setReadState(new IsReadState(this.message, this.messageService))
  }

}

class IsReadState extends ReadState {
  isRead(): boolean {
    return true;
  }

  read(): void {
  }

}

