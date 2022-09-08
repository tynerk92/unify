import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardSectionComponent } from './board-section.component';

describe('BoardSectionComponent', () => {
  let component: BoardSectionComponent;
  let fixture: ComponentFixture<BoardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
