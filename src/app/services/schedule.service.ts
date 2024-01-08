import { Injectable } from '@angular/core';

export interface Schedule {
  id: number;
  title: string;
  text: string;
  createDate: string;
  createtime: string
}

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor() { }

  schedules: Schedule[] = [
    {
      id: 1,
      title: 'title1',
      text: 'text',
      createDate: 'yyyy-mm-dd',
      createtime: 'yyyy-mm-dd',
    },
    {
      id: 2,
      title: 'title2',
      text: 'text',
      createDate: 'yyyy-mm-dd',
      createtime: 'yyyy-mm-dd',
    },
    {
      id: 3,
      title: 'title3',
      text: 'text',
      createDate: 'yyyy-mm-dd',
      createtime: 'yyyy-mm-dd',
    },
  ]

}
