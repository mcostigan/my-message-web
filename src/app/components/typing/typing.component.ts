import {Component, Input, OnInit} from '@angular/core';
import {TypingMembers} from "../../../model/typing-members";

@Component({
  selector: 'app-typing',
  template: `
    <div>
      <div *ngIf="typingMembers.hasData()"> {{typingMembers.typingText()}}</div>
    </div>
  `,
  styles: []
})
export class TypingComponent implements OnInit {
  @Input() typingMembers!: TypingMembers

  constructor() {
  }

  ngOnInit(): void {
  }

}
