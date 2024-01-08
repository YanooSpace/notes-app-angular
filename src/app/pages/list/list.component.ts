import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html'
})
export class ListComponent {

  constructor(
    public router: Router,
    public scheduleService: ScheduleService
  ) {}

  show() {
    this.router.navigate(["home/write"])
  }
}
