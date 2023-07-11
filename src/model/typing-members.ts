import {User} from "./model";
import {AuthenticatedUser} from "../app/service/authenticated-user.service";
import Timeout = NodeJS.Timeout;
import {IsTypingEvent, TypingEvent} from "./chat";


export class TypingMembers {
  private users = new Map<string, User>()
  private timeouts = new Map<string, Timeout>()

  constructor(private authenticatedUser: AuthenticatedUser) {
  }

  processEvent(t: TypingEvent) {
    if (t.user.id === this.authenticatedUser.get()?.id) {
      return
    }
    switch (t.type) {
      case "IsTypingEvent":
        let isTypingEvent = t as IsTypingEvent
        this.isTyping(t.user, isTypingEvent.timeoutSeconds)
        break;
      case "NotTypingEvent":
        this.doneTyping(t.user)
        break;
    }
  }

  isTyping(user: User, timeoutSeconds: number) {
    if (this.timeouts.has(user.id)) {
      clearTimeout(this.timeouts.get(user.id))
    }
    this.users.set(user.id, user)
    let t = setTimeout(() => {
      this.doneTyping(user)
    }, timeoutSeconds * 1000)
    this.timeouts.set(user.id, t)
  }

  doneTyping(user: User) {
    this.users.delete(user.id)
  }

  typingText(): string {
    return Array.from(this.users.values()).map((u: User) => u.name).join(", ") + " is typing..."
  }

  hasData(): boolean {
    return this.users.size > 0
  }
}
