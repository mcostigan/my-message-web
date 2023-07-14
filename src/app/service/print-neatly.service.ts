import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintNeatlyService {

  constructor() {
  }

  printNeatly(text: string, M: number= 24){
    let words = text.split(" ")
    let result: string[] = []
    let lineLength = 0
    let line: string[] = []
    for (let word of words){
      if (lineLength + word.length + 1 > M){
        result.push(line.join(' '))
        line = [word]
        lineLength = word.length
      } else {
        line.push(word)
        lineLength = lineLength + word.length + 1
      }

    }
    result.push(line.join(' '))

    return result
  }
}
