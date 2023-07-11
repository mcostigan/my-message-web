import {Injectable} from '@angular/core';
import {WebSocketService} from "../websocket.service";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {HttpWrapperService} from "../http-wrapper.service";
import {Chat, IChat} from "../../../model/chat";
import {ChatFactory} from "./chat.factory";
import {MyChatsFactory} from "./my-chats.factory";
import {MyChats} from "../../../model/my-chats";
import {IMessage} from "@stomp/stompjs";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private webSocketService: WebSocketService, private httpClient: HttpClient, private httpWrapper: HttpWrapperService, private chatFactory: ChatFactory, private myChatsFactoryService: MyChatsFactory) {
  }

  getChat(chatId: string): Observable<Chat> {
    return this.httpClient.get<IChat>(`http://localhost:8080/chat/${chatId}`).pipe(map((chat: IChat) => this.chatFactory.get(chat)))
  }

  myChats(): Observable<MyChats> {
    return this.httpWrapper.get<IChat[]>('chat/me', true).pipe(map((chats: IChat[]) => this.myChatsFactoryService.get(chats, this.subscribeToNewChats())))
  }

  createChat(name: string | null, description: string | null, users: string[]) {
    const chat = {name, description, users}
    return this.httpWrapper.post<NewChat>('chat', chat, true)
  }

  subscribeToNewChats(): Observable<Chat>{
    return this.webSocketService.subscription("/user/topic/newChat").pipe(map((m:IMessage)=>JSON.parse(m.body) as IChat)).pipe(
      map((c: IChat)=>this.chatFactory.get(c))
    )
  }

}

export interface NewChat {
  name: string | null
  description: string | null
  users: string[]
}

