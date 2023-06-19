import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTeacherNewprojComponent } from './home-teacher-newproj.component';

describe('HomeTeacherNewprojComponent', () => {
  let component: HomeTeacherNewprojComponent;
  let fixture: ComponentFixture<HomeTeacherNewprojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTeacherNewprojComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTeacherNewprojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
