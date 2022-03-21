import { HttpClient, HttpParams } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { createTeam } from 'src/app/store/teams/teams.actions'
import { TeamsState } from 'src/app/store/teams/teams.reducer'

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

  constructor(private readonly store: Store<TeamsState>) {}

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
    this.store.dispatch(createTeam({ data: { teamName } }))
  }

  fieldIsInvalid(fieldName: string): boolean {
    return this.f[fieldName].invalid && this.f[fieldName].dirty
  }
}
