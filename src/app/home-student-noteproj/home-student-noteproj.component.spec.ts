import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStudentNoteprojComponent } from './home-student-noteproj.component';

describe('HomeStudentNoteprojComponent', () => {
  let component: HomeStudentNoteprojComponent;
  let fixture: ComponentFixture<HomeStudentNoteprojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeStudentNoteprojComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeStudentNoteprojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
