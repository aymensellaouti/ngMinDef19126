import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterSignal } from './counter-signal';

describe('CounterSignal', () => {
  let component: CounterSignal;
  let fixture: ComponentFixture<CounterSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterSignal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
