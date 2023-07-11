import {Injectable} from '@angular/core';
import {Chat, IChat} from "../../../model/chat";
import {InterfaceMessage, Message} from "../../../model/message";
import {MessageService} from "../message/message.service";
import {MessageFactoryService} from "../message/message-factory.service";
import {TypingFactory} from "../typing/typing.factory";

@Injectable({
  providedIn: 'root'
})
export class ChatFactory {

  constructor(private messageService: MessageService, private messageFactory: MessageFactoryService, private typingFactory: TypingFactory) {
  }

  get(iChat: IChat): Chat {
    const tm = this.typingFactory.get(iChat.id)
    const chat = new Chat(iChat.id, iChat.name, iChat.description, iChat.messages.map((m: InterfaceMessage) => this.messageFactory.get(m, true)), iChat.users, iChat.creator, iChat.createdAt, tm)
    this.messageService.subscribeToChatMessages(chat.id).subscribe(
      (m: Message) => {
        chat.addNewMessage(m)
      }
    )
    return chat
  }

}
