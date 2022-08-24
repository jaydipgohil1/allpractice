import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistLzLoComComponent } from './adminlist-lz-lo-com.component';

describe('AdminlistLzLoComComponent', () => {
  let component: AdminlistLzLoComComponent;
  let fixture: ComponentFixture<AdminlistLzLoComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistLzLoComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminlistLzLoComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
