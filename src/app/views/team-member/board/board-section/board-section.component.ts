import { Dialog, DialogRef } from '@angular/cdk/dialog'
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core'
import { BoardSection } from 'src/app/models/db/board.model'
import { AddStoryToBoardDialog } from '../add-story-to-board-dialog/add-story-to-board-dialog.component'

@Component({
  selector: 'div[unify-board-section]',
  templateUrl: './board-section.component.html',
  styleUrls: ['./board-section.component.scss'],
})
export class BoardSectionComponent implements AfterViewInit {
  @Input() data: BoardSection

  @ViewChild('boardSectionContainer')
  boardSectionContainerRef: ElementRef
  @ViewChild('boardSectionTitle')
  boardSectionTitleRef: ElementRef

  constructor(private dialogRef: Dialog) {}

  openAddStoryDialog() {
    this.dialogRef.open(AddStoryToBoardDialog, {
      data: {
        sectionTitle: this.data.title,
      },
    })
  }

  ngAfterViewInit(): void {
    this.setContainerStyles()
    this.setTitleStyles()
  }

  private setContainerStyles() {
    const boardSectionContainer = this.boardSectionContainerRef.nativeElement

    boardSectionContainer.style.backgroundColor = `rgba(${this.data.colorRGB}, 0.07)`
    boardSectionContainer.style.border = `3px dashed rgb(${this.data.colorRGB})`
  }

  private setTitleStyles() {
    const boardSectionTitle = this.boardSectionTitleRef.nativeElement

    boardSectionTitle.style.backgroundColor = `rgb(${this.data.colorRGB})`
  }
}
