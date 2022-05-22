/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FrageEinzelnComponent } from './frage-einzeln.component';

describe('FrageEinzelnComponent', () => {
  let component: FrageEinzelnComponent;
  let fixture: ComponentFixture<FrageEinzelnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrageEinzelnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrageEinzelnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
