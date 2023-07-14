import {Component, OnInit} from '@angular/core';
import {ChatService} from "../../service/chat/chat.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.css']
})
export class NewChatComponent implements OnInit {
  name: string | null = null
  description: string | null = null
  user: string = ''

  constructor(private chatService: ChatService, private router: Router) {
  }

  ngOnInit(): void {
  }

  create() {
    this.chatService.createChat(this.name, this.description, this.user.split(",")).subscribe(
      ()=>{
        void this.router.navigateByUrl('')
      }
    )
  }

}
