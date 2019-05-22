import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangPageComponent } from './rang-page.component';

describe('RangPageComponent', () => {
  let component: RangPageComponent;
  let fixture: ComponentFixture<RangPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
