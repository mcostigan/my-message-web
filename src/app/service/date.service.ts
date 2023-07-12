import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() {
  }

  getDate(date: Date): string {
    return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() % 1000
  }

  getTime(date: Date): string {
    let hours = date.getHours() % 12
    let amPM = (date.getHours() >= 12) ? "PM" : "AM"
    if (hours == 0) {
      hours = 12
    }

    let minutes: string = date.getMinutes().toString()
    if (minutes.length == 1){
      minutes = "0" + minutes
    }
    return `${hours}:${minutes} ${amPM}`
  }

}
