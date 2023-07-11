import {Component, Input, OnInit} from '@angular/core';
import {Chat} from "../../../model/chat";

@Component({
  selector: 'app-chat',
  template: `
    <div class="chat">
      <app-chat-header [chat]="chat" class="chat-header"></app-chat-header>
      <div class="chat-panel">
        <div class="messages">
          <div *ngFor="let message of chat?.messages" style="padding: 5px; width: calc(100% - 10px)">
            <app-message [message]="message" [showName]="false" style="max-width: 60%"></app-message>
          </div>
        </div>
        <app-typing [typingMembers]="chat.typingMembers" class="typing"></app-typing>
        <app-chat-box [chatId]="chat.id" style="width: 100%;" class="input"></app-chat-box>
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
        grid-template-rows: 50px calc(100% - 70px);
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

        grid-template-rows: calc(100% - 60px) 15px 45px;
        grid-template-areas: "messages" "typing" "input";
      }

      .messages {
        grid-area: messages;
        overflow-y: auto;
        height: 100%;
        display: flex;
        flex-direction: column
      }

      .typing {
        grid-area: typing;
      }

      .input {
        grid-area: input;
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

  get isLoaded(): boolean {
    return this.chat != undefined
  }


}
