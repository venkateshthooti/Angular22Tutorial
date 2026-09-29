import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { response } from 'express';
import { Master } from '../../services/master';

@Component({
  selector: 'app-client-crud-get-put-post-delete',
  imports: [FormField],
  templateUrl: './client-crud-get-put-post-delete.html',
  styleUrl: './client-crud-get-put-post-delete.scss',
})
export class ClientCrudGETPUTPostDelete {

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
  clientDetailsModel = signal({
    "clientId": 0,
    "clientName": "",
    "businessName": "",
    "contactPerson": "",
    "contactNo": "",
    "altContactNo": "",
    "email": "",
    "createdDate": new Date(),
    "logo": ""
  })

  clientDetailsForm = form(this.clientDetailsModel)

  clientCradNumber = "9999888877776666"
  formattedClientCardNumber = ""

  constructor(private masterServ: Master) {
    this.getAllClients()
    debugger;
    const loggeduserName = this.masterServ.loggeduser
    this.formattedClientCardNumber = this.masterServ.getFormatedCardNumber(this.clientCradNumber)
  }
  clientsList: WritableSignal<any[]> = signal([])

  // getAllClients() {
  //   this.httpClient.get('https://api.freeprojectapi.com/api/SmartParking/GetAllClients').subscribe({
  //     next: (response: any) => {
  //       this.clientsList.set(response.data)
  //     }, error(err: any) {
  //       alert("Failed getting client details : " + err)
  //     }
  //   })
  // }
  getAllClients() {
    debugger
    this.masterServ.getClients().subscribe({
      next: (response: any) => {
        debugger
        this.clientsList.set(response.data)
      }, error(err: any) {
        alert("Failed getting client details : " + err)
      }
    })
  }
  // onSavePostClient() {
  //   debugger;
  //   this.httpClient.post("https://api.freeprojectapi.com/api/SmartParking/AddClient", this.clientDetailsForm().value()).subscribe({
  //     next: (response: any) => {
  //       if (response.result) {
  //         alert("Client details posted successfully")
  //       } else {
  //         alert(response.message)
  //       }
  //       this.getAllClients()
  //     }, error(err: any) {

  //     }
  //   })
  // }
  onSavePostClient() {
    debugger
    this.masterServ.postSaveClient(this.clientDetailsForm().value()).subscribe({
      next: (response: any) => {
        if (response.result) {
          alert("Client details posted successfully")
        } else {
          alert(response.message)
        }
        this.getAllClients()
      }, error(err: any) {
      }
    })
  }
  onEdit(item: any) {
    //debugger;
    this.clientDetailsModel.set({
      "clientId": item.clientId,
      "clientName": item.clientName,
      "businessName": item.businessName,
      "contactPerson": item.contactPerson,
      "contactNo": item.contactNo,
      "altContactNo": item.altContactNo,
      "email": item.email,
      "createdDate": item.createdDate,
      "logo": item.logo,
    })
  }
  onUpdateClientDetails() {
    this.httpClient.post("https://api.freeprojectapi.com/api/SmartParking/UpdateClient", this.clientDetailsForm().value())
      .subscribe({
        next: (response: any) => {
          if (response.result) {
            alert("Record Updated successfully")
          } else {
            alert("updation failed")
          }

        }
      })
  }
  deletePayload = signal({});

  onDelete(cid: number) {
    debugger;
    this.httpClient.post("https://api.freeprojectapi.com/api/SmartParking/DeleteClient?id=" + cid, {}).subscribe({
      next: (response: any) => {
        console.log("Request to clientId =", cid)
        console.log('Delete response:', response);

        if (response.result) {
          alert('Client details deleted successfully');
          this.getAllClients();
        } else {
          alert(response.message);
        }
      },
      error: (err: any) => {
        console.error('Delete API error:', err);
      }
    })
  }
  // onReset(){
  //   this.clientDetailsModel.set({
  //   "clientId": 0,
  //   "clientName": "",
  //   "businessName": "",
  //   "contactPerson": "",
  //   "contactNo": "",
  //   "altContactNo": "",
  //   "email": "",
  //   "createdDate": new Date(),
  //   "logo": ""
  //   })
  // }
}