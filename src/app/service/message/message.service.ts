import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {IMessage} from "@stomp/stompjs";
import {WebSocketService} from "../websocket.service";
import {InterfaceMessage, Message} from "../../../model/message";
import {MessageFactoryService} from "./message-factory.service";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private webSocketService: WebSocketService, private messageFactory: MessageFactoryService) {
  }


  subscribeToChatMessages(chatId: string): Observable<Message> {
    return this.webSocketService.subscription(`/topic/chat/${chatId}/message`)
      .pipe(map((it: IMessage) => JSON.parse(it.body) as InterfaceMessage))
      .pipe(map((m: InterfaceMessage) => this.messageFactory.get(m, true, false)))
  }

  sendChatMessage(chatId: string, text: string) {
    let message = {text: text, chatId: chatId}
    this.webSocketService.publish(`/app/chat/${chatId}/message`, JSON.stringify(message))
  }

  subscribeToSentReceipt(sendId: string): Observable<IMessage> {
    // TODO send receipts from server
    return this.webSocketService.subscription(`/topic/user/`)
  }

}
