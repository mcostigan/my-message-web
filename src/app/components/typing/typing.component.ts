import {Component, Input, OnInit} from '@angular/core';
import {TypingMembers} from "../../../model/typing-members";

@Component({
  selector: 'app-typing',
  template: `
    <div>
      <div *ngIf="typingMembers.hasData()" class="typing-text"> {{typingMembers.typingText()}}</div>
    </div>
  `,
  styles: [
    `
        .typing-text {
          font-weight: lighter;
          color: gray;
          font-size: small;
        }
    `
  ]
})
export class TypingComponent implements OnInit {
  @Input() typingMembers!: TypingMembers

  constructor() {
  }

  ngOnInit(): void {
  }

}
