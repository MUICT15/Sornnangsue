import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadmincourseComponent } from './listadmincourse.component';

describe('ListadmincourseComponent', () => {
  let component: ListadmincourseComponent;
  let fixture: ComponentFixture<ListadmincourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadmincourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadmincourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
