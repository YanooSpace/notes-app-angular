import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Schedule, ScheduleService } from 'src/app/services/schedule.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list.component.html'
})
export class ListComponent {
  schedules$: Observable<Schedule[]> = this.scheduleService.getSchedules();
  selectedIndex: number = -1;

  schedule: Schedule = {
    id: 0,
    title: '',
    contents: '',
    createDate: '',
    createtime: ''
  }

  constructor(
    private readonly router: Router,
    private readonly scheduleService: ScheduleService
  ) { }

  show(schedule:Schedule) {
    this.router.navigate(["detail", schedule.id])
  }

}
