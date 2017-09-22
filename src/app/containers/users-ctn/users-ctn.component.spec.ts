import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCtnComponent } from './users-ctn.component';

describe('UsersCtnComponent', () => {
  let component: UsersCtnComponent;
  let fixture: ComponentFixture<UsersCtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersCtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
