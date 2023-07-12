import {Injectable} from '@angular/core';
import {InterfaceMessage, Message, SimpleMessage} from "../../../model/message";
import {AuthenticatedUser} from "../authenticated-user.service";
import {User} from "../../../model/model";

@Injectable({
  providedIn: 'root'
})
export class MessageFactoryService {

  constructor(private authenticatedUser: AuthenticatedUser) {
  }

  // TODO subscribe to receipts
  get(iMessage: InterfaceMessage, isSent: boolean, isRead: boolean): Message {
    return new Message(iMessage.id, iMessage.text, iMessage.user, iMessage.timeStamp, isSent, isRead ,this.authenticatedUser.get()?.id === iMessage.user.id)
  }

  getFromSimpleMessage(iMessage: SimpleMessage, isSent: boolean, isRead: boolean, user: User): Message{
    return new Message(iMessage.id, iMessage.text, user, iMessage.timeStamp, isSent, isRead ,this.authenticatedUser.get()?.id === iMessage.authorId)
  }
}
