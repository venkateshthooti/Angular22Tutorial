import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-bus-booking',
  imports: [FormField],
  templateUrl: './bus-booking.html',
  styleUrl: './bus-booking.scss',
})
export class BusBooking {
  httpClient = inject(HttpClient)

  // clientdetails: any = {
  //   "clientId": 0,
  //   "clientName": "string",
  //   "businessName": "string",
  //   "contactPerson": "string",
  //   "contactNo": "string",
  //   "altContactNo": "string",
  //   "email": "string",
  //   "createdDate": "2026-09-24T18:52:52.448Z",
  //   "logo": "string"
  // }
  busVendorsModel = signal({
    "vendorId": 0,
    "vendorName": "",
    "contactNo": "",
    "emailId": ""
  })

  busVendorsForm = form(this.busVendorsModel)

  constructor() {
    this.getAllBusVendors()
  }

  busVendorsList: WritableSignal<any[]> = signal([])

  getAllBusVendors() {
    this.httpClient.get('https://api.freeprojectapi.com/api/BusBooking/GetBusVendors').subscribe({
      next: (response: any) => {
        this.busVendorsList.set(response)
      }, error(err: any) {
        alert("Failed getting client details : " + err)
      }
    })
  }
  onSavePostBusVendor() {
    //debugger;
    this.httpClient.post("https://api.freeprojectapi.com/api/BusBooking/PostBusVendor", this.busVendorsForm().value()).subscribe({
      next: (response: any) => {
        debugger
        console.log(response)
        if (response.vendorId != 0) {
          alert("Client details posted successfully")
        } else {
          alert("Post failed")
        }
        this.getAllBusVendors()
      }, error(err: any) {

      }
    })
  }
  onEdit(item: any) {
    //debugger;
    this.busVendorsModel.set({
      "vendorId": item.vendorId,
      "vendorName": item.vendorName,
      "contactNo": item.contactNo,
      "emailId": item.emailId,
    })
  }
  onUpdateBusVendor() {
    debugger
    this.httpClient.put("https://api.freeprojectapi.com/api/BusBooking/PutBusVendors?id=" + this.busVendorsModel().vendorId, this.busVendorsForm().value())
      .subscribe({

        next: (response: any) => {
          debugger
          console.log(response, "resoponseeeeee")
          if (response == null) {
            alert("Record Updated successfully")
          } else {
            alert("updation failed")
          }

        }
      })
  }

  onDelete(cid: number) {

    const isConfirm = confirm("Are you sure you want to delete")
    if (isConfirm) {
      // debugger;
      this.httpClient.delete("https://api.freeprojectapi.com/api/BusBooking/DeleteBusVendor?id=" + cid, {
       
      }).subscribe({
        next: (response: any) => {
          console.log("Request to VendorId =", cid)
          console.log('Delete response:', response);

          if (response) {
            alert('Client details deleted successfully');
            this.getAllBusVendors();
          } else {
            alert(response.message);
          }
        },
        error: (err: any) => {
          console.error('Delete API error:', err);
        }
      })
    }

  }

}
