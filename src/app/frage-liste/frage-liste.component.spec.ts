/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FrageListeComponent } from './frage-liste.component';

describe('FrageListeComponent', () => {
  let component: FrageListeComponent;
  let fixture: ComponentFixture<FrageListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrageListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrageListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
