/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageFormComponent } from './pageForm.component';

describe('PageFormComponent', () => {
  let component: PageFormComponent;
  let fixture: ComponentFixture<PageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
