import { HttpClient, HttpParams } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'unify-add-teams-widget',
  templateUrl: './add-teams-widget.component.html',
  styleUrls: ['./add-teams-widget.component.scss'],
})
export class AddTeamsWidgetComponent implements OnInit {
  teamCreatedMessage = ''

  form: FormGroup = new FormGroup({
    teamName: new FormControl('', [Validators.required]),
  })

  constructor(private readonly http: HttpClient) {}

  private get f() {
    return this.form.controls
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.form.markAllAsTouched()

    Object.keys(this.f).forEach((key) => {
      this.f[key].markAsDirty()
    })

    if (this.f.teamName.errors) {
      return
    }

    const teamName = this.f.teamName.value
    // TODO this needs to be an NGRX action/effect
    this.http.post(`/api/teams/create`, { teamName }).subscribe(() => {
      this.teamCreatedMessage = 'Successfully created new team: ' + teamName
      this.f.teamName.setValue('')
      setTimeout(() => (this.teamCreatedMessage = ''), 2000)
    })
  }

  fieldIsInvalid(fieldName: string): boolean {
    return this.f[fieldName].invalid && this.f[fieldName].dirty
  }
}
