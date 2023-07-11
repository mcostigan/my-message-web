import {Injectable} from '@angular/core';
import {TypingService} from "./typing.service";
import {AuthenticatedUser} from "../authenticated-user.service";
import {TypingMembers} from "../../../model/typing-members";
import {TypingEvent} from "../../../model/chat";

@Injectable({
  providedIn: 'root'
})
export class TypingFactory {

  constructor(private typingService: TypingService, private authenticatedUser: AuthenticatedUser) {
  }

  get(chatId: string): TypingMembers {
    const tm = new TypingMembers(this.authenticatedUser)
    this.typingService.subscribeToTypeEvents(chatId).subscribe(
      (typing: TypingEvent) => {
        tm.processEvent(typing)
      }
    )
    return tm
  }
}
