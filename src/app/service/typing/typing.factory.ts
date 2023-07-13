import {Injectable} from '@angular/core';
import {TypingService} from "./typing.service";
import {AuthenticatedUser} from "../authenticated-user.service";
import {TypingMembers} from "../../../model/typing-members";
import {TypingEvent} from "../../../model/chat";
import {filter} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TypingFactory {

  constructor(private typingService: TypingService, private authenticatedUser: AuthenticatedUser) {
  }

  /**
   * For a given chatId, creates a `TypingMembers` structure to store all current members typing in the chat (exlcuding the authenticated user).
   * The returned object is subscribed to `TypingEvents` from other users
   * @param chatId
   */
  get(chatId: string): TypingMembers {
    const tm = new TypingMembers()
    this.typingService.subscribeToTypeEvents(chatId).pipe(filter((event: TypingEvent) => event.user.id !== this.authenticatedUser.get()?.id)).subscribe(
      (typing: TypingEvent) => {
        tm.processEvent(typing)
      }
    )
    return tm
  }
}
