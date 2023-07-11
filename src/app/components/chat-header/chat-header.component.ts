import {Component, Input, OnInit} from '@angular/core';
import {Chat} from "../../../model/chat";

@Component({
  selector: 'app-chat-header',
  template: `
    <div class="header">
      <div style="font-weight: bolder">{{chat.name}}</div>
      <div>{{chat.description}}</div>
    </div>
  `,
  styles: [
    `
      .header {
        border: 1px solid black;
        border-radius: 10px;
        height: 100%;
        width: border-box;
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
