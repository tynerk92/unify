import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamsWidgetComponent } from './add-teams-widget.component';

describe('AddTeamsWidgetComponent', () => {
  let component: AddTeamsWidgetComponent;
  let fixture: ComponentFixture<AddTeamsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTeamsWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeamsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
