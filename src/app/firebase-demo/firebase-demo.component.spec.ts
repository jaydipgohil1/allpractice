import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseDemoComponent } from './firebase-demo.component';

describe('FirebaseDemoComponent', () => {
  let component: FirebaseDemoComponent;
  let fixture: ComponentFixture<FirebaseDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirebaseDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirebaseDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
