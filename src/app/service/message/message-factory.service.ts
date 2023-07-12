import {Injectable} from '@angular/core';
import {Message, SimpleMessage} from "../../../model/message";
import {AuthenticatedUser} from "../authenticated-user.service";
import {User} from "../../../model/model";

@Injectable({
  providedIn: 'root'
})
export class MessageFactoryService {

  constructor(private authenticatedUser: AuthenticatedUser) {
  }

  // TODO subscribe to receipts
  getFromSimpleMessage(iMessage: SimpleMessage, isSent: boolean, user: User): Message{
    return new Message(iMessage.id, iMessage.text, user, iMessage.timeStamp, isSent, iMessage.readBy.includes(this.authenticatedUser.get()?.id ?? '') ,this.authenticatedUser.get()?.id === iMessage.authorId)
  }
}
