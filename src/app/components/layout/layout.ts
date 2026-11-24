import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Master } from '../../services/master';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

  masterServ = inject(Master)
  router = inject(Router)
  //private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  loggedUserEmail = '';

  // constructor() {
  //   if (this.isBrowser) {
  //     this.loggedUserEmail = localStorage.getItem('user1') ?? '';
  //   }
  // }
  constructor() {

    //  this.loggedUserEmail = localStorage.getItem('user1') ?? '';
    const loggedData = localStorage.getItem('userEmailId')
    // Above line may return string or null so null check is mandatory.
    if (loggedData != null) {
      this.loggedUserEmail = loggedData
    }

  }

  onLogout() {
    // if (this.isBrowser) {
    localStorage.removeItem('userEmailId');
    this.router.navigateByUrl('/login');
    // }
  }
  onRollChange(event: any) {
    debugger
    const role = event.target.value
    this.masterServ.$selectedRollSubject.next(role)
    this.masterServ.$selctedRollBehaviourSubject.next(role)
  }
}
