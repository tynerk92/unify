import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Team } from 'src/app/models/db/team.model'
import { createTeam, getAllTeams } from 'src/app/store/teams/teams.actions'
import { TeamsState } from 'src/app/store/teams/teams.reducer'
import { selectAllTeams } from 'src/app/store/teams/teams.selectors'

@Component({
  selector: 'unify-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  teams$: Observable<Team[]>
  createTeamForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
  })

  constructor(
    private readonly http: HttpClient,
    private readonly store: Store<TeamsState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getAllTeams())
    this.teams$ = this.store.pipe(select(selectAllTeams))
  }

  submitCreateTeam(): void {
    if (this.createTeamForm.valid) {
      const teamName = this.createTeamForm.controls.name.value
      this.store.dispatch(createTeam({ data: { teamName } }))
    }
  }
}
