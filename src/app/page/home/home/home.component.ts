import {Component, OnInit} from '@angular/core';
import {MyChats} from "../../../../model/my-chats";
import {ChatService} from "../../../service/chat/chat.service";
import {Chat} from "../../../../model/chat";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myChats: MyChats | undefined
  selectedChat: Chat | undefined

  constructor(private chatService: ChatService) {
    chatService.myChats().subscribe(
      (chats: MyChats) => {
        this.myChats = chats
      }
    )
  }

  ngOnInit(): void {
  }

  selectChat(chat: Chat) {
    this.selectedChat = chat
  }

}
