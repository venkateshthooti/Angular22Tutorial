import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  debugger
  const router = inject(Router);
  // const isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  const isLocalDataPresent = localStorage.getItem('userEmailId');
  if (isLocalDataPresent == null) {
    router.navigateByUrl("/login");
    return false
  } else {
    return true
  }


};
