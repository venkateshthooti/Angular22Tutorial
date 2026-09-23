import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { LabelModule } from 'primeng/label';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [TableModule, InputTextModule, LabelModule, FormsModule,ProgressSpinnerModule],
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
  vendorsList: WritableSignal<any[]> = signal([])

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
    // this.httpClient.get('https://jsonplaceholder.typicode.com/photos').subscribe({
    //   next: (response: any) => {
    //     this.photosList.set(response)
    //   },
    //   error: (err: any) => {

    //   }
    // })
  }

  allVendors: any[] = [];

  recordsToShow = 10;

  isLoading = signal(false);

  getAllVendors() {

    this.httpClient
      .get("https://api.freeprojectapi.com/api/BusBooking/GetBusVendors")
      .subscribe({
        next: (response: any) => {

          this.allVendors = response;

          this.recordsToShow = 10;

          this.vendorsList.set(
            this.allVendors.slice(0, this.recordsToShow)
          );

        },

        error: (err: any) => {
          console.log(err);
        }
      });
  }


  onTableScroll(event: Event) {

    const element = event.target as HTMLElement;
    console.log(element,"bgbdwje")

    const reachedBottom =
      element.scrollTop + element.clientHeight >=
      element.scrollHeight - 5;

    console.log("details of scroll",{
      scrollTop: element.scrollTop,
      clientHeight: element.clientHeight,
      scrollHeight: element.scrollHeight,
      reachedBottom,
      
    },this.isLoading(),"ttttt",this.recordsToShow >= this.allVendors.length);

    if (!reachedBottom) {
      return;
    }

    if (this.isLoading()) {
      return;
    }

    if (this.recordsToShow >= this.allVendors.length) {
      return;
    }

    this.isLoading.set(true);

    setTimeout(() => {

      this.recordsToShow += 10;
      console.log("Records to show", this.recordsToShow)

      if (this.recordsToShow > this.allVendors.length) {
        this.recordsToShow = this.allVendors.length;
        console.log("Records to show exceeded array length", this.recordsToShow)
      }

      this.vendorsList.set(
        this.allVendors.slice(0, this.recordsToShow)
      );

      this.isLoading.set(false);

    }, 3000);
    
  }
}