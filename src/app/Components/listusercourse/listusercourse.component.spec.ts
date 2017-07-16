import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListusercourseComponent } from './listusercourse.component';

describe('ListusercourseComponent', () => {
  let component: ListusercourseComponent;
  let fixture: ComponentFixture<ListusercourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListusercourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListusercourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
