import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../../model/message";
import {formatDate} from "@angular/common";
import {DateService} from "../../service/date.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message!: Message
  @Input() showName!: boolean

  constructor(private dateService: DateService) {
  }

  ngOnInit(): void {
  }

  get myMessage(): boolean {
    return this.message.isMyMessage
  }

  get timeStamp(): string {
    return this.dateService.getMDYY(this.message.timeStamp)
  }

  get classes(): string {
    let classes = ["message"]
    if (this.message.isMyMessage){
      classes.push("my-message")
    }

    if (!this.message.isSent) {
      classes.push("pending-message")
    }
    return classes.join(" ")
  }

}
