import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Schedule, ScheduleService } from 'src/app/services/schedule.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html'
})
export class ListComponent {
  schedules$: Observable<Schedule[]> = this.scheduleService.getSchedules();

  constructor(
    private readonly router: Router,
    private readonly scheduleService: ScheduleService
  ) { }

  show() {
    this.router.navigate(["detail"])
  }
}
