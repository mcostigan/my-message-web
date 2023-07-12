import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporalGroupComponent } from './temporal-group.component';

describe('TemporalGroupsComponent', () => {
  let component: TemporalGroupComponent;
  let fixture: ComponentFixture<TemporalGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemporalGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporalGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
