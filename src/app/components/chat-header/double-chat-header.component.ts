import {Component, OnInit} from '@angular/core';
import {ChatHeader} from "./chat-header";
import {Chat} from "../../../model/chat";
import {User} from "../../../model/model";

@Component({
  selector: 'app-double-chat-header',
  template: `
    <div class="double-chat-header">
      <div class="header-content">
        <div class="chat-image-wrapper">
          <img id="chat-image" src="{{userPicture}}" alt="">
        </div>
        <div class="chat-name">{{chat.name}}</div>
      </div>
    </div>

  `,
  styles: [
    `
      .double-chat-header {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }

      .header-content {
        display: grid;
        grid-template-rows: 50px 20px;
        grid-template-areas: "picture" "name";
      }

      .chat-image-wrapper {
        grid-area: picture;
        width: 50px;
        height: 50px;
      }

      .chat-image-wrapper img {
        width: 100%;
        height: 100%;
        border-radius: 50px;
      }

      .chat-name {
        grid-area: name;
        display: flex;
        flex-direction: row;
        justify-content: center;
      }

    `
  ]
})
export class DoubleChatHeaderComponent implements OnInit, ChatHeader {

  constructor() {
  }

  ngOnInit(): void {
  }

  chat!: Chat;

  get userPicture(): string {
    return this.chat.users.find((u: User) => u.id !== this.chat.creator.id)?.image ?? ''
  }

}
