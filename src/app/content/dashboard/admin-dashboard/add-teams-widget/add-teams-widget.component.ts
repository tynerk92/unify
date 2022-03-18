import { HttpClient, HttpParams } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'unify-add-teams-widget',
  templateUrl: './add-teams-widget.component.html',
  styleUrls: ['./add-teams-widget.component.scss'],
})
export class AddTeamsWidgetComponent implements OnInit {
  teamCreatedMessage = ''

  form: FormGroup = new FormGroup({
    teamName: new FormControl(''),
  })

  constructor(private readonly http: HttpClient) {}

  private get f() {
    return this.form.controls
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const teamName = this.f.teamName.value

    this.http.post(`/api/teams/create`, { teamName }).subscribe(() => {
      this.teamCreatedMessage = 'Successfully created new team: ' + teamName
      this.f.teamName.setValue('')
      setTimeout(() => (this.teamCreatedMessage = ''), 2000)
    })
  }
}
