import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyChats} from "../../../model/MyChats";
import {Chat} from "../../../model/chat";

@Component({
  selector: 'app-my-chats',
  templateUrl: './my-chats.component.html',
  styleUrls: ['./my-chats.component.css']
})
export class MyChatsComponent implements OnInit {
  @Input() myChats!: MyChats
  @Output() chatSelectionEmitter = new EventEmitter<Chat>()

  constructor() {
  }

  ngOnInit(): void {
  }

  selectChat(chat: Chat) {
    this.chatSelectionEmitter.emit(chat)
  }

}
