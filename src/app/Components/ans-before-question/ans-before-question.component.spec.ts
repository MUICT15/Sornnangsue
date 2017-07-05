import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsBeforeQuestionComponent } from './ans-before-question.component';

describe('AnsBeforeQuestionComponent', () => {
  let component: AnsBeforeQuestionComponent;
  let fixture: ComponentFixture<AnsBeforeQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnsBeforeQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnsBeforeQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
