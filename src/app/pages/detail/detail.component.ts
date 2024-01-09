import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { NotesBgComponent } from 'src/app/components/notes-bg/notes-bg.component';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    NotesBgComponent,
    ButtonComponent
  ],
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  title: string = '';
  contents: string = '';
  
  constructor(
    private readonly scheduleService: ScheduleService
  ) {}
}
