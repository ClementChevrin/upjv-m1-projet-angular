import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTeacherProjetsComponent } from './home-teacher-projets.component';

describe('HomeTeacherProjetsComponent', () => {
  let component: HomeTeacherProjetsComponent;
  let fixture: ComponentFixture<HomeTeacherProjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTeacherProjetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTeacherProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
