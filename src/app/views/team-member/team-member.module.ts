import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TeamMemberRoutingModule } from './team-member-routing.module'
import { BoardComponent } from './board/board.component'
import { DraggableCardComponent } from './board/draggable-card/draggable-card.component'
import { BoardSectionComponent } from './board/board-section/board-section.component'
import { BoardColumnComponent } from './board/board-column/board-column.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AddStoryToBoardDialog } from './board/add-story-to-board-dialog/add-story-to-board-dialog.component'
import { DialogModule } from '@angular/cdk/dialog'

@NgModule({
  declarations: [
    BoardComponent,
    DraggableCardComponent,
    BoardSectionComponent,
    BoardColumnComponent,
    AddStoryToBoardDialog,
  ],
  imports: [
    CommonModule,
    TeamMemberRoutingModule,
    FontAwesomeModule,
    DialogModule,
  ],
})
export class TeamMemberModule {}
