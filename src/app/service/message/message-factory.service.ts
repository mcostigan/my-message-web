import {Injectable} from '@angular/core';
import {InterfaceMessage, Message} from "../../../model/message";
import {AuthenticatedUser} from "../authenticated-user.service";

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
}
