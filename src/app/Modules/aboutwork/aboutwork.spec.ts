import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutwork } from './aboutwork';

describe('Aboutwork', () => {
  let component: Aboutwork;
  let fixture: ComponentFixture<Aboutwork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutwork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutwork);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
