import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextJustificationService {

  constructor() {
  }

  justifyText(text: string, maxWidth: number = 24): string[] {
    if (text.length < 40) {
      return [text]
    }

    let lines = []
    let i = 0
    while (i < text.length) {
      lines.push(text.slice(i, i + maxWidth))
      i += maxWidth
    }

    return lines
  }
}
