/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LernComponent } from './lern.component';

describe('LernComponent', () => {
  let component: LernComponent;
  let fixture: ComponentFixture<LernComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LernComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
