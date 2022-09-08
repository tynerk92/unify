import { DIALOG_DATA } from '@angular/cdk/dialog'
import { Component, Inject, OnInit } from '@angular/core'

@Component({
  selector: 'unify-add-story-to-board-dialog',
  templateUrl: './add-story-to-board-dialog.component.html',
  styleUrls: ['./add-story-to-board-dialog.component.scss'],
})
export class AddStoryToBoardDialog implements OnInit {
  constructor(@Inject(DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}
}
