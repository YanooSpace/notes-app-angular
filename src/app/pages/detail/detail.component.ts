import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Observable, scheduled } from 'rxjs'
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { NotesBgComponent } from 'src/app/components/notes-bg/notes-bg.component';
import { AddSchedule, Schedule, ScheduleService } from 'src/app/services/schedule.service';

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

  schedules$: Observable<Schedule[]> = this.scheduleService.getSchedules();
  editMode: boolean = false;
  selectedSchedule: Omit<Schedule,'createDate'| 'createtime' > = {
    id: 0,
    title: '',
    contents: ''
  }

  constructor(
    private readonly router: Router,
    private readonly activiatedRoute: ActivatedRoute,
    private readonly scheduleService: ScheduleService
  ) {

    this.renderSchedule()
  }


  private renderSchedule() {
    // 1. 라우터 파라메터로 scheduleId를 불러옵니다.
    //    href 주소에 있는 값을 불러옵니다.
    const scheduleId = this.activiatedRoute.snapshot.paramMap.get('scheduleId');
    console.log(scheduleId)

    // 1-2. 파라메터 값은 숫자로만 받을 수 있도록 데이터 검증
    if (scheduleId && Number.isNaN(Number(scheduleId))) {
      this.router.navigateByUrl('/home');
      alert('스케줄 아이디는 숫자만 입력이 가능합니다.');
      return;
    }

    // 2. 스케줄 서비스에서 라우터 파라메터로 불러온 scheduleId를 이용해서 스케줄 한개만 불러오도록 하는 함수를 호출합니다.
    // 잘못 입력되거나 없을때는 사용자에게 alert띄우고 확인 누르면 /home으로 이동하도록 하는 데이터 검증도 필요.
    const getSchedule = this.scheduleService.getSelectedSchedule(Number(scheduleId));
    if(getSchedule.id !== Number(scheduleId)){
      alert('잘못된 경로입니다')
      this.router.navigateByUrl('/home');
    }

    // 3. 스케줄 한개만 불러온 것을 디테일 컴포넌트 클래스 내부 변수로 schedule같은 곳에 할당 합니다.
    this.selectedSchedule = getSchedule

    // 4. scheduleId 가 없다면 생성이고, 있으면 수정 일 것입니다.
    this.editMode = !this.selectedSchedule;

  }



}
