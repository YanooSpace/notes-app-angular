import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs'
import { FormsModule } from '@angular/forms';
import { NotesBgComponent } from 'src/app/components/notes-bg/notes-bg.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { Schedule, ScheduleService } from 'src/app/services/schedule.service';

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

  schedule: Schedule = {
    id: 0,
    title: '',
    contents: '',
    createDate: '',
    createTime: ''
  }

  /**
   * schedules$ 이라는 변수에 Observal을 이용해 주시할것이다 
   * Schedule형식의 배열 타입으로
   */
  schedules$: Observable<Schedule[]> = this.scheduleService.getSchedules();

  constructor(
    private scheduleService: ScheduleService
  ) { }

  /**
   * 스케쥴을 초기화 하는 것
   */
  resetScehdule() {
    this.schedule = {
      id: 0,
      title: '',
      contents: '',
      createDate: '',
      createTime: ''
    }
  }

  onCreate() {
    console.log('test')
    // id를 제외한 나머지 : 구조분해할당
    // ...rest : 나머지
    const { id, createDate, createTime: createtime, ...rest } = this.schedule;
    this.scheduleService.addSchedule(rest);

    // 필드 초기화 
    this.resetScehdule()
  }


}
