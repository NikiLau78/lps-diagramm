/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PruefComponent } from './pruef.component';

describe('PruefComponent', () => {
  let component: PruefComponent;
  let fixture: ComponentFixture<PruefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
