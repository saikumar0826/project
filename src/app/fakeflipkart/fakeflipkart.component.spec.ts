import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeflipkartComponent } from './fakeflipkart.component';

describe('FakeflipkartComponent', () => {
  let component: FakeflipkartComponent;
  let fixture: ComponentFixture<FakeflipkartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeflipkartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeflipkartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
