import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  //debugger
  const token = localStorage.getItem('resLoginToken')

  const newRequest = req.clone({
    setHeaders: {

      Authorization: "Bearer " + token
      // Authorization: `Bearer ${token}`

    }

  })

  return next(newRequest);
};
