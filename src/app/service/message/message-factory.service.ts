import {Injectable} from '@angular/core';
import {Message, SimpleMessage} from "../../../model/message";
import {AuthenticatedUser} from "../authenticated-user.service";
import {User} from "../../../model/model";
import {MessageService} from "./message.service";
import {EmotionFactory, IReaction, Reaction} from "../../../model/reaction";

@Injectable({
  providedIn: 'root'
})
export class MessageFactoryService {
  constructor(private authenticatedUser: AuthenticatedUser, private messageService: MessageService, private emotionFactory: EmotionFactory) {
  }

  // TODO subscribe to receipts
  getFromSimpleMessage(iMessage: SimpleMessage, isSent: boolean, user: User): Message{
    let isRead = iMessage.readBy.includes(this.authenticatedUser.get()?.id ?? '')
    let isMyMessage = iMessage.authorId === this.authenticatedUser.get()?.id
    let reactions = iMessage.reactions.map((r: IReaction)=> new Reaction(r.userId, this.emotionFactory.get(r.emotion) ))

    return new Message(iMessage.id, iMessage.text, user, iMessage.timeStamp, isSent, isRead, isMyMessage, this.messageService, reactions)
  }
}
