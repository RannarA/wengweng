import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { AgoraVideoComponent } from './agora-video/agora-video.component';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [ChatComponent, AgoraVideoComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    MatGridListModule
  ]
})
export class ChatModule { }
