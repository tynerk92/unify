import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms'

@Component({
  selector: 'unify-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() search: EventEmitter<string>

  searchFormGroup: UntypedFormGroup = new UntypedFormGroup({
    search: new UntypedFormControl(''),
  })

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.search.emit(this.searchFormGroup.controls.search.value)
  }
}
