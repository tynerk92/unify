import { Component, OnInit } from '@angular/core'
import { Overlay } from '@angular/cdk/overlay'
import { ToolbarService } from './toolbar.service'

@Component({
  selector: 'unify-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  accountOverlayOpen = false

  constructor(private toolbarService: ToolbarService) {}

  ngOnInit(): void {}

  toggleAccountOverlay() {
    this.accountOverlayOpen = !this.accountOverlayOpen
  }

  onLogoutClick() {
    this.toolbarService.logout()
  }
}
