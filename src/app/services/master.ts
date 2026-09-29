import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class Master {
    loggeduser:string=''

    getFormatedCardNumber(cardNo:string){
        debugger
        const astrics="**** **** ****"
        return astrics+" "+cardNo.substring(12)
        
    }
    http=inject(HttpClient)
    getClients(){
        debugger
      return  this.http.get('https://api.freeprojectapi.com/api/SmartParking/GetAllClients')
    }
    postSaveClient(clientFormObj:any){
        debugger
        return this.http.post("https://api.freeprojectapi.com/api/SmartParking/AddClient",clientFormObj)
    }
}
