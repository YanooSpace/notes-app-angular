import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotesBgComponent } from 'src/app/components/notes-bg/notes-bg.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-write',
  standalone: true,
  imports: [CommonModule, 
    RouterLink,
    FormsModule,
    NotesBgComponent,
    ButtonComponent
  ],
  templateUrl: './write.component.html'
})
export class WriteComponent {

  constructor(
    public scheduleService: ScheduleService
  ) {}

  onCreate() {
    console.log('test')
  }
}
