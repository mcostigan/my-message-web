import {Component, Input, OnInit} from '@angular/core';
import {TemporalGroup} from "../../../model/message-groups";
import {DateService} from "../../service/date.service";

@Component({
  selector: 'app-temporal-group',
  templateUrl: './temporal-group.component.html',
  styleUrls: ['./temporal-group.component.css']
})
export class TemporalGroupComponent implements OnInit {
  @Input() group!: TemporalGroup
  @Input() showName: boolean = false

  constructor(private dateService: DateService) { }

  ngOnInit(): void {
  }

  getRootDate(): string {
    return this.dateService.getDate(this.group.rootDate)
  }

  getRootTime(): string {
    return this.dateService.getTime(this.group.rootDate)
  }



}
