import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {HeaderDirective} from "./header.directive";
import {Chat} from "../../../model/chat";
import {ChatHeader, ChatHeaderFactory} from "./chat-header";

@Component({
  selector: 'app-chat-header',
  template: `
    <div class="header">
      <ng-template chatHeader id="header-content"></ng-template>
    </div>
  `,
  styles: [
    `
      .header {
        border: 1px solid gray;
        padding: 5px;
        border-radius: 10px;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
      }

      #header-content {
        box-sizing: border-box;
      }
    `
  ]
})
export class ChatHeaderComponent implements OnInit {

  @Input() set chat(value: Chat) {
    this.setChat(value)
  }

  get chat(): Chat {
    return this._chat;
  }

  setChat(value: Chat) {
    this._chat = value;
    this.setHeader(this._chat)
  }

  private _chat!: Chat
  private chatHeaderFactory = new ChatHeaderFactory()
  @ViewChild(HeaderDirective, {static: true}) chatHeader!: HeaderDirective

  constructor() {
  }

  ngOnInit(): void {}


  private setHeader(chat: Chat) {
    const viewContainerRef = this.chatHeader.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<ChatHeader>(
      this.chatHeaderFactory.get(chat.isGroupChat)
    );
    componentRef.instance.chat = this._chat;
  }
}
