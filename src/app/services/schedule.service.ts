import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Schedule {
  id: number;
  title: string;
  contents: string;
  createDate: string;
  createTime: string
}

export type AddSchedule = Omit<Schedule, 'id' | 'createDate' | 'createTime'>;
export type UpdateSchedule = Partial<Omit<Schedule, 'id' | 'createDate' | 'createTime'>>

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private schedules$ = new BehaviorSubject<Schedule[]>([
    {
      id: 4,
      title: '노트앱',
      contents: '노트앱 만들기',
      createDate: 'yyyy-mm-dd',
      createTime: 'yyyy-mm-dd',
    },
    {
      id: 5,
      title: '영화리스트 앱',
      contents: '영화 목록 생성 및 리스트 불러오기',
      createDate: 'yyyy-mm-dd',
      createTime: 'yyyy-mm-dd',
    },
    {
      id: 6,
      title: '계산기 앱',
      contents: '간단한 계산기 앱',
      createDate: 'yyyy-mm-dd',
      createTime: 'yyyy-mm-dd',
    },
  ]);

  constructor() { }

  getSchedules() {
    return this.schedules$.asObservable();
  }

  /**
   * @param scheduleId index는 0부터 시작하기 때문에 id값에(1부터시작) -1 해준다 
   */
  getSelectedSchedule(scheduleId: number) {
    return this.schedules$.getValue().find(schedule => schedule.id === scheduleId)
  }

  /**
   * next([])
   */
  addSchedule(schedule: AddSchedule) {
    const newSchedule: Schedule = {
      ...schedule,
      createDate: 'yyyy-mm-dd',
      createTime: 'yyyy-mm-dd',
      id: this.schedules$.value.length + 1
    };

    this.schedules$.next([
      ...this.schedules$.value,
      newSchedule
    ]);
  }

  updateSchedule(scheduleId: number, schedule: Partial<Omit<Schedule, 'id'>>) {
    const scheduleIndex = this.schedules$.value.findIndex(schedule => schedule.id === scheduleId);

    if (scheduleIndex !== -1) {
      const updatedSchedule = {
        ...this.schedules$.getValue()[scheduleIndex],
        ...schedule
      };

      const schedules = this.schedules$.getValue();
      schedules.splice(scheduleIndex, 1, updatedSchedule);
      this.schedules$.next(schedules);
    }
  }
}

