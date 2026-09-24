import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bai13Detail } from './bai13-detail';

describe('Bai13Detail', () => {
  let component: Bai13Detail;
  let fixture: ComponentFixture<Bai13Detail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bai13Detail],
    }).compileComponents();

    fixture = TestBed.createComponent(Bai13Detail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
