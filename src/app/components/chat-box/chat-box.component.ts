import {Component, Input, OnInit} from '@angular/core';
import {TypingService} from "../../service/typing/typing.service";
import {MessageService} from "../../service/message/message.service";

@Component({
  selector: 'app-chat-box',
  template: `
    <div class="new-chat-message">
      <input (keyup)="change()" [(ngModel)]="text">
      <button (click)="send()">Send</button>
    </div>

  `,
  styles: [
    `
      .new-chat-message {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        column-gap: 5px
      }

      input {
        border-radius: 30px;
        background-color: transparent;
        width: 80%;
        border: 2px solid gray;
        color: white;
      }

      button {
        width: 100px;
        height: 30px;
        border-radius: 30px
      }
    `
  ]
})
export class ChatBoxComponent implements OnInit {
  text: string = ''
  @Input() chatId!: string

  constructor(private messageService: MessageService, private typingService: TypingService) {
  }

  ngOnInit(): void {
  }

  change() {
    this.typingService.sendTypeEvent(this.chatId, this.text != "")
  }

  send() {
    this.messageService.sendChatMessage(this.chatId, this.text)
    this.text = ''
  }


}
