import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserslistLzLoComComponent } from './userslist-lz-lo-com.component';

describe('UserslistLzLoComComponent', () => {
  let component: UserslistLzLoComComponent;
  let fixture: ComponentFixture<UserslistLzLoComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserslistLzLoComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserslistLzLoComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
