import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuserscoreComponent } from './listuserscore.component';

describe('ListuserscoreComponent', () => {
  let component: ListuserscoreComponent;
  let fixture: ComponentFixture<ListuserscoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListuserscoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListuserscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
