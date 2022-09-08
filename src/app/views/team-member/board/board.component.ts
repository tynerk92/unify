import { HttpClient } from '@angular/common/http'
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Self,
  SkipSelf,
  ViewChild,
} from '@angular/core'
import { BoardSection } from 'src/app/models/db/board.model'
import { BoardService } from './board.service'

@Component({
  selector: 'unify-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit, AfterViewInit {
  @ViewChild('boardContainer') boardContainerRef: ElementRef
  boardSections: BoardSection[]

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<BoardSection[]>('/api/board').subscribe((response) => {
      this.boardSections = response
      this.constructGrid()
    })
  }

  ngAfterViewInit(): void {
    this.constructGrid()
  }

  private constructGrid() {
    const boardContainer: HTMLDivElement = this.boardContainerRef.nativeElement

    boardContainer.style.gridTemplateRows = `repeat(${this.boardSections?.length}, 1fr)`
  }
}
