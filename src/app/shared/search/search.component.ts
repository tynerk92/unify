import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'unify-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() search: EventEmitter<string>

  searchFormGroup: FormGroup = new FormGroup({
    search: new FormControl(''),
  })

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.search.emit(this.searchFormGroup.controls.search.value)
  }
}
