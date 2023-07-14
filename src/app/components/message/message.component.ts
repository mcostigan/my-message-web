import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../../model/message";
import {PrintNeatlyService} from "../../service/print-neatly.service";
import Timeout = NodeJS.Timeout;

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message!: Message
  lines: string[] = []
  showReactions: boolean = false
  holdTimeout: Timeout | undefined

  constructor(private textJustificationService: PrintNeatlyService) {
  }

  ngOnInit(): void {
    this.message.read()
    this.lines = this.textJustificationService.printNeatly(this.message.text)
  }

  get classes(): string {
    let classes = ["message"]
    if (this.message.isMyMessage) {
      classes.push("my-message")
    }

    if (!this.message.isSent) {
      classes.push("pending-message")
    }
    return classes.join(" ")
  }

  press() {
    this.holdTimeout = setTimeout(() => {
      this.showReactions = true
    }, 500)
  }

  pressup() {
    clearTimeout(this.holdTimeout)
  }

}
