import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bai13Component } from './bai13-component';

describe('Bai13Component', () => {
  let component: Bai13Component;
  let fixture: ComponentFixture<Bai13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bai13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Bai13Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
