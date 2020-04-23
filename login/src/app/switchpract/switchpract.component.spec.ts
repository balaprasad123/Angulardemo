import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchpractComponent } from './switchpract.component';

describe('SwitchpractComponent', () => {
  let component: SwitchpractComponent;
  let fixture: ComponentFixture<SwitchpractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchpractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchpractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
