import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStudentNewprojComponent } from './home-student-newproj.component';

describe('HomeStudentNewprojComponent', () => {
  let component: HomeStudentNewprojComponent;
  let fixture: ComponentFixture<HomeStudentNewprojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeStudentNewprojComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeStudentNewprojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
