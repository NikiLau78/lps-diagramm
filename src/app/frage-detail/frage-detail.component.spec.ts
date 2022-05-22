import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrageDetailComponent } from './frage-detail.component';

describe('FrageDetailComponent', () => {
  let component: FrageDetailComponent;
  let fixture: ComponentFixture<FrageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrageDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
