import {Component, Input, OnInit} from '@angular/core';
import {TypingService} from "../../service/typing/typing.service";
import {MessageService} from "../../service/message/message.service";

@Component({
  selector: 'app-chat-box',
  template: `
    <div style="box-sizing: border-box; display: flex; flex-direction: row;">
      <input (keyup)="change()" [(ngModel)]="text" style="border-radius: 5px; width: 80%">
      <button (click)="send()" style="width: 100px; height: 31px">Send</button>
    </div>

  `,
  styles: []
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
