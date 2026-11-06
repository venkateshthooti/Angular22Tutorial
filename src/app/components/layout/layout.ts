import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

  router=inject(Router)
  //private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  loggedUserEmail='';

  // constructor() {
  //   if (this.isBrowser) {
  //     this.loggedUserEmail = localStorage.getItem('user1') ?? '';
  //   }
  // }
  constructor(){

  //  this.loggedUserEmail = localStorage.getItem('user1') ?? '';
   const loggedData = localStorage.getItem('userEmailId')
   // Above line may return string or null so null check is mandatory.
   if(loggedData !=null){
    this.loggedUserEmail=loggedData
   }

  }

  onLogout() {
    // if (this.isBrowser) {
      localStorage.removeItem('userEmailId');
      this.router.navigateByUrl('/login');
    // }
  }
}
