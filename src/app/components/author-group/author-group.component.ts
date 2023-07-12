import {Component, Input, OnInit} from '@angular/core';
import {AuthorGroup} from "../../../model/message-groups";

@Component({
  selector: 'app-author-group',
  templateUrl: './author-group.component.html',
  styleUrls: ['./author-group.component.css']
})
export class AuthorGroupComponent implements OnInit {
  @Input() group!: AuthorGroup
  @Input() showName: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  get classes(): string {
    const classes = ["author-group"]
    if (this.group.isMe){
      classes.push("my-group")
    }
    return classes.join(" ")
  }

}
