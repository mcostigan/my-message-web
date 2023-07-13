import {Injectable} from '@angular/core';
import {Chat, IChat} from "../../../model/chat";
import {SimpleMessage} from "../../../model/message";
import {MessageService} from "../message/message.service";
import {MessageFactoryService} from "../message/message-factory.service";
import {TypingFactory} from "../typing/typing.factory";
import {User} from "../../../model/model";

@Injectable({
  providedIn: 'root'
})
export class ChatFactory {

  constructor(private messageService: MessageService, private messageFactory: MessageFactoryService, private typingFactory: TypingFactory) {
  }

  get(iChat: IChat): Chat {
    const tm = this.typingFactory.get(iChat.id)
    const users: Map<string, User> = new Map<string, User>(iChat.users.map((u: User) => [u.id, u]))
    const chat = new Chat(iChat.id, iChat.name, iChat.description, iChat.messages.map((m: SimpleMessage) => this.messageFactory.getFromSimpleMessage(m, true, users.get(m.authorId)!!)), iChat.users, iChat.creator, iChat.createdAt, tm)
    this.messageService.subscribeToChatMessages(chat.id).subscribe(
      (m: SimpleMessage) => {
        let message = this.messageFactory.getFromSimpleMessage(m, true, users.get(m.authorId)!!)
        chat.addNewMessage(message)
      }
    )
    return chat
  }

}
