import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Master } from '../../services/master';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  router = inject(Router)
  masterService=inject(Master)
  

  // loginObj: loginModel = new loginModel()
  loginObjApi: loginModelApi = new loginModelApi()

  onLogin() {
    debugger
    //   if (this.loginObj.email == 'abc@gmail.com' && this.loginObj.password == '112233') {
    //     localStorage.setItem('user1',this.loginObj.email)
    //     this.router.navigateByUrl('adminLayout/logo')

    //   } else {
    //     alert('Wrong credentials')
    //   }

    
    this.masterService.loginUser(this.loginObjApi).subscribe({
      next: (res: any) => {
        if (this.loginObjApi.EmailId == res.data.emailId) {
          localStorage.setItem("userEmailId", res.data.emailId)
          this.router.navigateByUrl('adminLayout/logo')
        }
        else {
          alert('Wrong credentials')
        }
      
      },error:(err:any)=>{
        debugger
        if(err.status==401){
          alert("Api error")
        }
      }
    })

  }

}

class loginModel {
  email: string;
  password: string;
  constructor() {
    this.email = ''
    this.password = ''
  }
}

export class loginModelApi {

  EmailId: string
  Password: string
  constructor() {
    this.EmailId = ''
    this.Password = ''

  }

}