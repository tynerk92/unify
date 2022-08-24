import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Team } from 'src/app/models/db/team.model'

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private readonly http: HttpClient) {}

  createNewTeam(teamName: string): Observable<Team> {
    return this.http.post<Team>(`/api/teams/create`, { teamName })
  }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>('/api/teams/list')
  }

  deleteTeam() {}
}
