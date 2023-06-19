import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTeacherNoteprojComponent } from './home-teacher-noteproj.component';

describe('HomeTeacherNoteprojComponent', () => {
  let component: HomeTeacherNoteprojComponent;
  let fixture: ComponentFixture<HomeTeacherNoteprojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTeacherNoteprojComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTeacherNoteprojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
