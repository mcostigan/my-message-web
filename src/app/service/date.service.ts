import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getMDYY(date: Date): string {
    return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear()%1000
  }

}
