import {Component, Input, OnInit} from '@angular/core';
import {Chat} from "../../../model/chat";

@Component({
  selector: 'app-chat',
  template: `
    <div class="chat" style="height: 100%; width: 100%">
      <div class="chat-header" style="width: 100%">
        <app-chat-header [chat]="chat"></app-chat-header>
      </div>
      <div class="chat-panel">
        <div class="messages" style="display: flex; flex-direction: column">
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
        display: grid;
        grid-template-rows: 50px calc(100% - 50px);
        grid-template-areas: "header" "panel";
        width: 100%;
      }


      .chat-header {
        grid-area: header;
      }

      .chat-panel {
        display: grid;
        height: 100%;
        width: 100%;
        grid-area: panel;

        grid-template-rows: calc(100% - 60px) 15px 45px;
        grid-template-areas: "messages" "typing" "input";
      }

      .messages {
        grid-area: messages;
        overflow-y: auto;
        height: 100%;
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
