import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { AgoraVideoComponent } from './agora-video/agora-video.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { GameComponent } from './game/game.component';
import { PlayingCardModule } from '../ui/playing-card/playing-card.module';
import { MatButtonModule } from '@angular/material/button';
import { CardPyramidComponent } from './card-pyramid/card-pyramid.component';


@NgModule({
  declarations: [
    ChatComponent,
    AgoraVideoComponent,
    GameComponent,
    CardPyramidComponent
  ],
    imports: [
        CommonModule,
        ChatRoutingModule,
        MatGridListModule,
        PlayingCardModule,
        MatButtonModule
    ]
})
export class ChatModule { }
