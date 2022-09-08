import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'any',
})
export class BoardService {
  private columnCount: number = 1

  constructor() {}

  public getColumnCount() {
    return this.columnCount <= 0 ? 1 : this.columnCount
  }

  public addColumn() {
    this.columnCount++
  }

  public removeColumn() {
    this.columnCount--
    this.checkMinColumns()
  }

  private checkMinColumns() {
    if (this.columnCount < 1) {
      this.columnCount = 1
    }
  }
}
