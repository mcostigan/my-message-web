import {Chat} from "../../../model/chat";
import {GroupChatHeaderComponent} from "./group-chat-header.component";
import {DoubleChatHeaderComponent} from "./double-chat-header.component";
import {Type} from "@angular/core";

export interface ChatHeader {
  chat: Chat
}

export class ChatHeaderFactory {

  get(isGroup: boolean): Type<ChatHeader>{
    if (isGroup){
      return GroupChatHeaderComponent
    } else {
      return DoubleChatHeaderComponent
    }
  }
}
