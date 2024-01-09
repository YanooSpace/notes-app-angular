import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Schedule {
  id: number;
  title: string;
  contents: string;
  createDate: string;
  createtime: string
}

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private schedules$ = new BehaviorSubject<Schedule[]>([
    {
      id: 1,
      title: 'title1',
      contents: 'text',
      createDate: 'yyyy-mm-dd',
      createtime: 'yyyy-mm-dd',
    },
    {
      id: 2,
      title: 'title2',
      contents: 'text',
      createDate: 'yyyy-mm-dd',
      createtime: 'yyyy-mm-dd',
    },
    {
      id: 3,
      title: 'title3',
      contents: 'text',
      createDate: 'yyyy-mm-dd',
      createtime: 'yyyy-mm-dd',
    },
  ]);

  constructor() { }

  getSchedules() {
    return this.schedules$.asObservable();
  }

  addSchedule(schedule: Schedule) {
    this.schedules$.next([
      //  push
      ...this.schedules$.value,
      schedule
    ]);
  }

  updateSchedule(id: number, schedule: Partial<Omit<Schedule, 'id'>>) {
    const findScheduleIndex = this.schedules$.getValue().findIndex(schedule => schedule.id === id);
    if (findScheduleIndex !== -1) {
      this.schedules$.value[findScheduleIndex] = {
        ...this.schedules$.value[findScheduleIndex],
        ...schedule
      };
      this.schedules$.next(this.schedules$.value);
    }

    // let findSchedule = this.schedules$.value.find(schedule => schedule.id === id);
    // if (findSchedule) {
    //   findSchedule = {
    //     // update
    //     ...findSchedule,
    //     ...schedule
    //   }
    //   this.schedules$.next(this.schedules$.value);
    // }
  }

  // schedules: Schedule[] = [
  //   {
  //     id: 1,
  //     title: 'title1',
  //     contents: 'text',
  //     createDate: 'yyyy-mm-dd',
  //     createtime: 'yyyy-mm-dd',
  //   },
  //   {
  //     id: 2,
  //     title: 'title2',
  //     contents: 'text',
  //     createDate: 'yyyy-mm-dd',
  //     createtime: 'yyyy-mm-dd',
  //   },
  //   {
  //     id: 3,
  //     title: 'title3',
  //     contents: 'text',
  //     createDate: 'yyyy-mm-dd',
  //     createtime: 'yyyy-mm-dd',
  //   },
  // ]

}
