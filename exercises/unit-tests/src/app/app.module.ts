import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ExerciseOneComponent } from './exercise-1';
import { ExerciseTwoComponent } from './exercise-2';
import { MessageService } from './services/message';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    ExerciseOneComponent,
    ExerciseTwoComponent,
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [
    ExerciseOneComponent
  ]
})
export class AppModule {}
