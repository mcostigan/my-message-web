import {Injectable} from '@angular/core';

import {StompHeaders, StompService} from '@stomp/ng2-stompjs';
import {Observable} from "rxjs";
import {IMessage} from "@stomp/stompjs";
import {CookieService} from "./cookie.service";

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private client: any;

  constructor(private rxStomp: StompService, private cookieService: CookieService) {
    this.rxStomp.configure({
      brokerURL: 'ws://localhost:8080/my-message-websocket',
      heartbeatOutgoing: 0,
      heartbeatIncoming: 0,
      connectHeaders: {'Authorization': `Bearer ${this.cookieService.get()}`},
    })
    this.rxStomp.activate()
  }

  publish(topic: string, message: string | undefined = undefined) {
    const headers: StompHeaders = {
      Authorization: `Bearer ${this.cookieService.get()}`
    };
    this.rxStomp.publish(topic, message, headers)
  }

  subscription(topic: string): Observable<IMessage> {
    return this.rxStomp.subscribe(topic)
  }
}
