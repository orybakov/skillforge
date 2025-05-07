import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AppHeaderComponent} from './app-header/app-header.component';
import {AppSidebarComponent} from './app-sidebar/app-sidebar.component';

@Component({
  selector: 'app-app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    AppHeaderComponent,
    AppSidebarComponent,

  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent {
  public openedNav = signal<boolean>(true)

  public toggleNav(): void {
    this.openedNav.update(value => !value)
  }
}
