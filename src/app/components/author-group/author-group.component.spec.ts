import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorGroupComponent } from './author-group.component';

describe('AuthorGroupsComponent', () => {
  let component: AuthorGroupComponent;
  let fixture: ComponentFixture<AuthorGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
