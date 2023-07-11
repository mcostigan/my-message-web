import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyChats} from "../../../model/my-chats";
import {Chat} from "../../../model/chat";

@Component({
  selector: 'app-my-chats',
  templateUrl: './my-chats.component.html',
  styleUrls: ['./my-chats.component.css']
})
export class MyChatsComponent implements OnInit {
  @Input() myChats!: MyChats
  @Output() chatSelectionEmitter = new EventEmitter<Chat>()
  selectedChat: Chat | null = null

  constructor() {
  }

  ngOnInit(): void {
  }

  selectChat(chat: Chat) {
    this.selectedChat = chat
    this.chatSelectionEmitter.emit(chat)
  }

}
