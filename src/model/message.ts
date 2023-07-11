import {User} from "./model";
import {DateService} from "../app/service/date.service";

export interface InterfaceMessage {
  id: string
  text: string
  user: User
  timeStamp: string
}

export class Message {
  readonly id: string
  readonly text: string
  readonly user: User
  readonly timeStamp: Date
  readonly isMyMessage: boolean
  private state: MessageState


  constructor(id: string, text: string, user: User, timeStamp: string, isSent: boolean, isMyMessage: boolean) {
    this.id = id;
    this.text = text;
    this.user = user;
    this.timeStamp = new Date(timeStamp);
    this.state = MessageState.getState(isSent, this)
    this.isMyMessage = isMyMessage
  }

  get isSent(): boolean {
    return this.state.isSent
  }

  setState(state: MessageState) {
    this.state = state
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
