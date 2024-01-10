import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Schedule {
  id: number;
  title: string;
  contents: string;
  createDate: string;
  createtime: string
}

export type AddSchedule = Omit<Schedule, 'id'|'createDate'| 'createtime' >;

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private schedules$ = new BehaviorSubject<Schedule[]>([
    {
      id: 1,
      title: '노트앱',
      contents: '노트앱 만들기',
      createDate: 'yyyy-mm-dd',
      createtime: 'yyyy-mm-dd',
    },
    {
      id: 2,
      title: '영화리스트 앱',
      contents: '영화 목록 생성 및 리스트 불러오기',
      createDate: 'yyyy-mm-dd',
      createtime: 'yyyy-mm-dd',
    },
    {
      id: 3,
      title: '계산기 앱',
      contents: '간단한 계산기 앱',
      createDate: 'yyyy-mm-dd',
      createtime: 'yyyy-mm-dd',
    },
  ]);

  constructor() { }

  getSchedules() {
    return this.schedules$.asObservable();
  }

  /**
   * next([])
   */
  addSchedule(schedule: AddSchedule) {
    const newSchedule = {
      ...schedule,
      createDate: 'yyyy-mm-dd',
      createtime: 'yyyy-mm-dd',
      id: this.schedules$.value.length + 1
    };

    this.schedules$.next([
      ...this.schedules$.value,
      newSchedule
    ]);

    console.log(newSchedule)
  }

  updateSchedule(id: number, schedule: Partial<Omit<Schedule, 'id'>>) {
    const findScheduleIndex = this.schedules$.value.findIndex(s => s.id === id);

    if (findScheduleIndex !== -1) {
      const updatedSchedule = {
        ...this.schedules$.value[findScheduleIndex],
        ...schedule,
        createDate: this.schedules$.value[findScheduleIndex].createDate,
        createtime: this.schedules$.value[findScheduleIndex].createtime
      };

      this.schedules$.value[findScheduleIndex] = updatedSchedule;
      this.schedules$.next(this.schedules$.value);
    }
  }

}

