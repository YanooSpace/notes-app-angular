import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ContentChildren, ElementRef, QueryList, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { NotesBgComponent } from 'src/app/components/notes-bg/notes-bg.component';
import { ScheduleService, UpdateSchedule } from 'src/app/services/schedule.service';

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
/**
 * DetailComponent handles displaying and editing a single schedule.
 * 
 * It gets the schedule ID from the route parameters, loads the schedule data from the ScheduleService, 
 * and displays it. It also allows editing the schedule and saving changes back via the ScheduleService.
 */
export class DetailComponent {
  editMode: boolean = false;

  scheduleId: number = -1;
  schedule: UpdateSchedule = {
    title: '',
    contents: ''
  }

  constructor(
    private readonly router: Router,
    private readonly activiatedRoute: ActivatedRoute,
    private readonly scheduleService: ScheduleService,
    private readonly cdRef: ChangeDetectorRef // 변화감지 
  ) {
    // 1. 라우터 파라메터로 scheduleId를 불러옵니다.
    //    href 주소에 있는 값을 불러옵니다.
    this.scheduleId = Number(this.activiatedRoute.snapshot.paramMap.get('scheduleId'));

    // 1-2. 파라메터 값은 숫자로만 받을 수 있도록 데이터 검증
    if (this.scheduleId && Number.isNaN(this.scheduleId)) {
      this.router.navigateByUrl('/home');
      alert('스케줄 아이디는 숫자만 입력이 가능합니다.');
      return;
    }

    // 2. 스케줄 서비스에서 라우터 파라메터로 불러온 scheduleId를 이용해서 스케줄 한개만 불러오도록 하는 함수를 호출합니다.
    // 잘못 입력되거나 없을때는 사용자에게 alert띄우고 확인 누르면 /home으로 이동하도록 하는 데이터 검증도 필요.
    const schedule = this.scheduleService.getSelectedSchedule(this.scheduleId);
    if (!schedule) {
      this.router.navigateByUrl('/home');
      alert('스케줄을 찾을 수 없습니다.');
      return;
    }

    // 3. 스케줄 한개만 불러온 것을 디테일 컴포넌트 클래스 내부 변수로 schedule같은 곳에 할당 합니다.
    const { createDate, createTime: createtime, ...rest } = schedule;
    this.schedule = rest;
  }

  onEdit() {
    this.editMode = true;
    this.cdRef.detectChanges(); // 변화감지 
    document.getElementById('inputTitle')?.focus();
  }

  saveEdit() {
    this.scheduleService.updateSchedule(this.scheduleId, this.schedule);
    this.editMode = false;
  }
}