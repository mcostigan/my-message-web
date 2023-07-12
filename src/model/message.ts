import {User} from "./model";

interface IMessage {
  id: string
  text: string
  timeStamp: string
}

export interface InterfaceMessage extends IMessage{
  user: User
}

export interface SimpleMessage extends IMessage{
  authorId: string
}

export class Message {
  readonly id: string
  readonly text: string
  readonly user: User
  readonly timeStamp: Date
  readonly isMyMessage: boolean
  private state: MessageState
  private readState: ReadState


  constructor(id: string, text: string, user: User, timeStamp: string, isSent: boolean, isRead: boolean, isMyMessage: boolean) {
    this.id = id;
    this.text = text;
    this.user = user;
    this.timeStamp = new Date(timeStamp);
    this.state = MessageState.getState(isSent, this)
    this.readState = ReadState.get(this, isRead, (id: string)=>{})
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
  protected constructor(protected message: Message) {
  }

  abstract read(): void

  abstract isRead(): boolean

  static get(message: Message, isRead: boolean, onRead: (id: string) => void): ReadState {
    if (isRead) {
      return new IsReadState(message)
    }
    return new IsUnreadState(message, onRead)
  }
}

class IsUnreadState extends ReadState {
  constructor(message: Message, private onRead: (id: string) => void) {
    super(message);
  }

  isRead(): boolean {
    return false;
  }

  read(): void {
    this.onRead(this.message.id)
    this.message.setReadState(new IsReadState(this.message))
  }

}

class IsReadState extends ReadState {
  isRead(): boolean {
    return true;
  }

  read(): void {
  }

}

