import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'unify-add-teams-widget',
  templateUrl: './add-teams-widget.component.html',
  styleUrls: ['./add-teams-widget.component.scss'],
})
export class AddTeamsWidgetComponent implements OnInit {
  form: FormGroup = new FormGroup({
    teamName: new FormControl(''),
  })
  constructor() {}

  private get f() {
    return this.form.controls
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const teamName = this.f.teamName.value
  }
}
