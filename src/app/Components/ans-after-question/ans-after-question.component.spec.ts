import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsAfterQuestionComponent } from './ans-after-question.component';

describe('AnsAfterQuestionComponent', () => {
  let component: AnsAfterQuestionComponent;
  let fixture: ComponentFixture<AnsAfterQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnsAfterQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnsAfterQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
