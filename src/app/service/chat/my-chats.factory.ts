import {Injectable} from '@angular/core';
import {ChatFactory} from "./chat.factory";
import {Chat, IChat} from "../../../model/chat";
import {MyChats} from "../../../model/MyChats";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyChatsFactory {

  constructor(private chatFactory: ChatFactory) {
  }

  get(chats: IChat[], newChatObservable: Observable<Chat> | undefined = undefined): MyChats {
    let myChats = new MyChats(chats.map((it) => this.chatFactory.get(it)))

    if (newChatObservable) {
      newChatObservable.subscribe((it: Chat) => {
        myChats.newChat(it)
      })
    }

    return myChats
  }
}
