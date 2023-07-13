import {Chat} from "./chat";
import {MapDeque} from "./deque/Deque";

export class MyChats implements Iterable<Chat> {
  private readonly chats: MapDeque<Chat>

  constructor(chats: Chat[]) {
    this.chats = new MapDeque<Chat>()

    chats.forEach((ch) => {
      this.chats.addToEnd(ch)
      ch.newMessageCallback = this.updateOrder.bind(this)
    })
  }

  newChat(chat: Chat) {
    this.chats.addToFront(chat)
    chat.newMessageCallback = this.updateOrder.bind(this)
  }

  updateOrder(chatId: string) {
    this.chats.moveToFront(chatId)
  }

  * [Symbol.iterator](): Iterator<Chat> {
    for (let chat of this.chats) {
      yield chat
    }
  }

}
