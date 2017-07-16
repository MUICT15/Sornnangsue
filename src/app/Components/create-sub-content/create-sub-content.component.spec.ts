import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubContentComponent } from './create-sub-content.component';

describe('CreateSubContentComponent', () => {
  let component: CreateSubContentComponent;
  let fixture: ComponentFixture<CreateSubContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
