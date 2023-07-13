import {Component, Input, OnInit} from '@angular/core';
import {EmotionFactory, Reaction} from "../../../model/reaction";

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.css']
})
export class ReactionsComponent implements OnInit {
  @Input() reactions!: Reaction[]
  constructor() {
  }

  ngOnInit(): void {
  }

}
