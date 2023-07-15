import {Component, Input, OnInit} from '@angular/core';
import {Chat} from "../../../model/chat";

@Component({
  selector: 'app-chat',
  template: `
    <div class="chat">
      <app-chat-header [chat]="chat" class="chat-header"></app-chat-header>
      <div class="chat-panel">
        <div class="groups">
          <div *ngFor="let group of chat?.messages" class="group">
            <app-temporal-group [group]="group" [showName]="chat.isGroupChat"></app-temporal-group>
          </div>
        </div>
        <app-typing [typingMembers]="chat.typingMembers" class="typing"></app-typing>
        <app-chat-box [chatId]="chat.id" class="input"></app-chat-box>
      </div>
    </div>

  `,
  styles: [
    `
      .chat {
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        padding: 10px;

        display: grid;
        grid-template-rows: 75px calc(100% - 75px);
        grid-template-areas: "header" "panel";
      }


      .chat-header {
        grid-area: header;
        box-sizing: border-box;
      }

      .chat-panel {
        display: grid;
        box-sizing: border-box;
        grid-area: panel;

        grid-template-rows: calc(100% - 60px) 25px 35px;
        grid-template-areas: "messages" "typing" "input";
      }

      .groups {
        grid-area: messages;
        overflow-y: auto;
        height: 100%;
        display: flex;
        flex-direction: column
      }

      .group {
        padding: 5px;
        width: calc(100% - 10px)
      }

      .typing {
        grid-area: typing;
      }

      .input {
        grid-area: input;
        width: 100%
      }
    `
  ]
})
export class ChatComponent implements OnInit {
  @Input() chat!: Chat

  constructor() {

  }

  ngOnInit(): void {
  }


}
