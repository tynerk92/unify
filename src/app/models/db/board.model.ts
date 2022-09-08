export interface Board {
  sections: BoardSection[]
}

export interface BoardSection {
  title: string
  startColumn?: number
  endColumn?: number
  colorRGB: string
}
