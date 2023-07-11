import {Component, Input, OnInit} from '@angular/core';
import {Chat} from "../../../model/chat";

@Component({
  selector: 'app-chat-summary',
  templateUrl: './chat-summary.component.html',
  styleUrls: ['./chat-summary.component.css']
})
export class ChatSummaryComponent implements OnInit {
  @Input() chat!: Chat
  @Input() isSelected: boolean = false
  constructor() {
  }

  ngOnInit(): void {
  }

  get classes(): string {
    let result = ["chat-summary"]
    if (this.isSelected){
      result.push("selected-chat")
    }
    return result.join(" ")
  }

}
