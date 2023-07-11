import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StompConfig, StompService} from '@stomp/ng2-stompjs';
import {AppComponent} from './app.component';
import {ChatComponent} from './components/chat/chat.component';
import {ChatBoxComponent} from './components/chat-box/chat-box.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from './page/login/login/login.component';
import {HomeComponent} from './page/home/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {MyChatsComponent} from './components/my-chats/my-chats.component';
import {ChatSummaryComponent} from './components/chat-summary/chat-summary.component';
import {MessageComponent} from './components/message/message.component';
import {TypingComponent} from './components/typing/typing.component';
import {NewChatComponent} from './components/new-chat/new-chat.component';
import {ChatHeaderComponent} from './components/chat-header/chat-header.component';


const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent},
    {path: 'new', component: NewChatComponent},
  ]
;

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatBoxComponent,
    LoginComponent,
    HomeComponent,
    MyChatsComponent,
    ChatSummaryComponent,
    MessageComponent,
    TypingComponent,
    NewChatComponent,
    ChatHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  providers: [StompService, StompConfig],
  bootstrap: [AppComponent]
})
export class AppModule {

}
