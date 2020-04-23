import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeComponent } from './custome.component';

describe('CustomeComponent', () => {
  let component: CustomeComponent;
  let fixture: ComponentFixture<CustomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
