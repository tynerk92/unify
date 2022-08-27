import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TeamMemberDashboardComponent } from './dashboard.component'

describe('DashboardComponent', () => {
  let component: TeamMemberDashboardComponent
  let fixture: ComponentFixture<TeamMemberDashboardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamMemberDashboardComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(TeamMemberDashboardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
