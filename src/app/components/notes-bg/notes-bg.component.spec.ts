import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesBgComponent } from './notes-bg.component';

describe('NotesBgComponent', () => {
  let component: NotesBgComponent;
  let fixture: ComponentFixture<NotesBgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NotesBgComponent]
    });
    fixture = TestBed.createComponent(NotesBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
