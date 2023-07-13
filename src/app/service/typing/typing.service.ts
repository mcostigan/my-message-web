import {Injectable} from '@angular/core';
import {WebSocketService} from "../websocket.service";
import {map, Observable} from "rxjs";
import {IMessage} from "@stomp/stompjs";
import {TypingEvent} from "../../../model/chat";

@Injectable({
  providedIn: 'root'
})
export class TypingService {

  constructor(private webSocketService: WebSocketService) {
  }

  subscribeToTypeEvents(chatId: string): Observable<TypingEvent> {
    return this.webSocketService.subscription(`/topic/chat/${chatId}/type`).pipe(map((it: IMessage) => JSON.parse(it.body) as TypingEvent))
  }

  sendTypeEvent(chatId: string, isTyping: boolean) {
    this.webSocketService.publish(`/app/chat/${chatId}/type`, String(isTyping))
  }
}
