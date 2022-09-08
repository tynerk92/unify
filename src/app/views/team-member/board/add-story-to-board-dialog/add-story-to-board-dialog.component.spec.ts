import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AddStoryToBoardDialog } from './add-story-to-board-dialog.component'

describe('AddStoryToBoardDialogComponent', () => {
  let component: AddStoryToBoardDialog
  let fixture: ComponentFixture<AddStoryToBoardDialog>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddStoryToBoardDialog],
    }).compileComponents()

    fixture = TestBed.createComponent(AddStoryToBoardDialog)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
