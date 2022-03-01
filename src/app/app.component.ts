import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'unify'

  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    this.http.get('server/test').subscribe((data) => {
      this.title = data.toString()
    })
  }
}
