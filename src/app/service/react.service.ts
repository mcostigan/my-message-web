import {Injectable} from '@angular/core';
import {WebSocketService} from "./websocket.service";
import {Emotion} from "../../model/reaction";

@Injectable({
  providedIn: 'root'
})
export class ReactService {

  constructor(private webSocketService: WebSocketService) {
  }

  reactToMessage(messageId: string, emotion: Emotion) {
    this.webSocketService.publish(`/app/message/${messageId}/react`, emotion.serverId)
  }
}
