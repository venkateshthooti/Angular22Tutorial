import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.html',
  styleUrl: './logo.scss',
})
export class Logo {
  http=inject(HttpClient)

  userList=signal<any>([])

  ngOnInit():void{
    this.getAllusers()
  }

  getAllusers(){
    this.http.get('https://projectapi.gerasim.in/api/UserApp/GetAllUsers').subscribe({
      next:(response:any)=>{
        this.userList=response.data
      }
    })
  }
}
