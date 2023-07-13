import {Injectable} from '@angular/core';
import {WebSocketService} from "./websocket.service";
import {Emotion, EmotionFactory, IReaction, Reaction} from "../../model/reaction";
import {map, Observable} from "rxjs";
import {IMessage} from "@stomp/stompjs";

@Injectable({
  providedIn: 'root'
})
export class ReactService {

  constructor(private webSocketService: WebSocketService, private emotionFactory: EmotionFactory) {
  }

  reactToMessage(messageId: string, emotion: Emotion) {
    this.webSocketService.publish(`/app/message/${messageId}/react`, emotion.serverId)
  }

  subscribeToReaction(messageId: string): Observable<Reaction> {
    return this.webSocketService.subscription(`/topic/message/${messageId}/react`).pipe(map((m: IMessage)=> JSON.parse(m.body) as IReaction), map((r: IReaction)=>new Reaction(r.userId, this.emotionFactory.get(r.emotion))))
  }
}
