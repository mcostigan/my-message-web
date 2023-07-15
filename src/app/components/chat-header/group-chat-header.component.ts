import {Component, OnInit} from '@angular/core';
import {ChatHeader} from "./chat-header";
import {Chat} from "../../../model/chat";

@Component({
  selector: 'app-group-chat-header',
  template: `
    <div class="chat-header">
      <div class="chat-top-row">
        <div class="chat-name">{{chat.name}}</div>
        <div class="member-count">{{chat.users.length}} members</div>
      </div>

      <div class="chat-description">{{chat.description}}</div>

      <div class="chat-members">
        <div class="user-image" *ngFor="let user of chat.users">
          <img  src="{{user.image}}" alt="">
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .chat-header {
        display: grid;
        grid-template-rows: 50% 50%;
        grid-template-columns: calc(100% - 100px) 100px;
        grid-template-areas: "top-row members" "description members ";
        height: 100%;
        width: 100%;
      }

      .chat-top-row {
        display: flex;
        flex-direction: row;
        column-gap: 5px;
        grid-area: top-row;
      }

      .chat-name {
        font-weight: bold;
        font-size: x-large;
      }

      .member-count {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: gray;
      }

      .chat-description {
        grid-area: description;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }

      .chat-members {
        grid-area: members;

        display: inline-flex;
        flex-direction: row-reverse;
        height: 100%;
        width: 100%;
      }

      .user-image {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
        border: 2px solid black;
      }

      .user-image:not(:last-child) {
        margin-left: -35px;
      }

      .user-image img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    `

  ]
})
export class GroupChatHeaderComponent implements OnInit, ChatHeader {

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.chat.users)
  }

  chat!: Chat;

}
