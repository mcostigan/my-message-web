import {Component, Input, OnInit} from '@angular/core';
import {Chat} from "../../../model/chat";

@Component({
  selector: 'app-chat-header',
  template: `
    <div class="header">
      <div id="chat-header-name">{{chat.name}}</div>
      <div>{{chat.description}}</div>
    </div>
  `,
  styles: [
    `
      #chat-header-name {
        font-weight: bolder;
      }

      .header {
        border: 1px solid gray;
        padding: 5px;
        border-radius: 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly
      }

    `
  ]
})
export class ChatHeaderComponent implements OnInit {
  @Input() chat!: Chat

  constructor() {
  }

  ngOnInit(): void {
  }

}
