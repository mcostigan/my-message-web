import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StompConfig, StompService} from '@stomp/ng2-stompjs';
import {AppComponent} from './app.component';
import {ChatComponent} from './components/chat/chat.component';
import {ChatBoxComponent} from './components/chat-box/chat-box.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from './components/login/login/login.component';
import {HomeComponent} from './page/home/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {MyChatsComponent} from './components/my-chats/my-chats.component';
import {ChatSummaryComponent} from './components/chat-summary/chat-summary.component';
import {MessageComponent} from './components/message/message.component';
import {TypingComponent} from './components/typing/typing.component';
import {NewChatComponent} from './page/new-chat/new-chat.component';
import {TemporalGroupComponent} from './components/temporal-group/temporal-group.component';
import {AuthorGroupComponent} from "./components/author-group/author-group.component";
import {ReactionsComponent} from './components/reactions/reactions.component';
import {ReactionPickerComponent} from './components/reaction-picker/reaction-picker.component';
import {AngularEmojisModule} from 'angular-emojis';
import {AuthenticationComponent} from './page/authentication/authentication.component';
import {RegisterComponent} from "./components/register/register.component";
import {ChatHeaderComponent} from './components/chat-header/chat-header.component';
import {HeaderDirective} from './components/chat-header/header.directive';
import {GroupChatHeaderComponent} from "./components/chat-header/group-chat-header.component";
import { DoubleChatHeaderComponent } from './components/chat-header/double-chat-header.component';


const routes: Routes = [
    {path: 'login', component: AuthenticationComponent},
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
    TemporalGroupComponent,
    AuthorGroupComponent,
    ReactionsComponent,
    ReactionPickerComponent,
    AuthenticationComponent,
    RegisterComponent,
    ChatHeaderComponent,
    HeaderDirective,
    GroupChatHeaderComponent,
    DoubleChatHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AngularEmojisModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [StompService, StompConfig],
  bootstrap: [AppComponent]
})
export class AppModule {

}
