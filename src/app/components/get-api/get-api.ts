import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.scss',
})
export class GetApi {

  httpClient = inject(HttpClient)

  constructor(private htpClint: HttpClient) {
    // Old way of inject service and needed to inject in two ways , we can use only one way
    this.getAllUsers()
    this.getAllPhotos()
    this.getAllVendors()

  }

  userList: WritableSignal<any[]> = signal([])
  photosList: WritableSignal<any[]> = signal([])
  vendorsList:WritableSignal<any[]>=signal([])
  
  getAllUsers() {
    this.httpClient.get("https://jsonplaceholder.typicode.com/users").subscribe({
      next: (res: any) => {
        this.userList.set(res)
        //debugger
      },
      error: (err: any) => {

      }
    })
  }
  getAllPhotos() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/photos').subscribe({
      next: (response: any) => {
        this.photosList.set(response)
      },
      error: (err: any) => {

      }
    })
  }
  getAllVendors(){
    this.httpClient.get("https://api.freeprojectapi.com/api/BusBooking/GetBusVendors").subscribe({
      next:(response:any)=>{
        this.vendorsList.set(response)
      },
      error:(err: any)=>{

      }

    })
  }

}
