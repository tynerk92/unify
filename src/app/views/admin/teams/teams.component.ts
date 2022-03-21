import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Team } from 'src/app/models/db/team.model'

@Component({
  selector: 'unify-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  teams: Team[]
  createTeamForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
  })

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    // TODO this needs to be an NGRX action/effect
    this.http.get<Team[]>('/api/teams/list').subscribe((teams: Team[]) => {
      this.teams = teams
    })
  }

  submitCreateTeam(): void {
    if (this.createTeamForm.valid) {
      const teamName = this.createTeamForm.controls.name.value
      // TODO this needs to be an NGRX action/effect
      this.http.post('/api/teams/create', { teamName }).subscribe()
    }
  }
}
