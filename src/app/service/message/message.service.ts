import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {IMessage} from "@stomp/stompjs";
import {WebSocketService} from "../websocket.service";
import {SimpleMessage} from "../../../model/message";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private webSocketService: WebSocketService) {
  }


  subscribeToChatMessages(chatId: string): Observable<SimpleMessage> {
    return this.webSocketService.subscription(`/topic/chat/${chatId}/message`)
      .pipe(map((it: IMessage) => JSON.parse(it.body) as SimpleMessage))
  }

  sendChatMessage(chatId: string, text: string) {
    this.webSocketService.publish(`/app/chat/${chatId}/message`, text)
  }

  readMessage(messageId: string) {
    this.webSocketService.publish(`/app/message/${messageId}/read`)
  }

  subscribeToSentReceipt(sendId: string): Observable<IMessage> {
    // TODO send receipts from server
    return this.webSocketService.subscription(`/topic/user/`)
  }

}
