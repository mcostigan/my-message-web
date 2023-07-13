import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Emotion, EmotionFactory} from "../../../model/reaction";
import {ReactService} from "../../service/react.service";

@Component({
  selector: 'app-reaction-picker',
  templateUrl: './reaction-picker.component.html',
  styleUrls: ['./reaction-picker.component.css']
})
export class ReactionPickerComponent implements OnInit {
  @Input() messageId!: string
  @Output() exit = new EventEmitter<void>()
  emotions: Emotion[]

  constructor(private emotionFactory: EmotionFactory, private reactService: ReactService) {
    this.emotions = emotionFactory.getAll()
  }

  ngOnInit(): void {
  }

  close() {
    this.exit.emit()
  }

  reactToMessage(emotion: Emotion) {
    this.reactService.reactToMessage(this.messageId, emotion)
  }

}
