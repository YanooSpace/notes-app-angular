import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { ListComponent } from "../list/list.component";
import { WriteComponent } from './write/write.component';
import { BackgroundComponent } from 'src/app/components/background/background.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { NotesBgComponent } from 'src/app/components/notes-bg/notes-bg.component';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    imports: [CommonModule, 
        RouterOutlet,
        RouterLinkWithHref,
        ListComponent, 
        WriteComponent, 
        BackgroundComponent,
        ButtonComponent,
        SearchComponent,
        NotesBgComponent
    ]
    /**
     * home에서 이동할 컴포넌트들 imports에 등록을해야 자유롭게 app-selector로 이동 가능 
     */
})
export class HomeComponent {

    constructor(
        public scheduleService: ScheduleService
    ) {}

    onCreate() {
        console.log('test')
    }
}
