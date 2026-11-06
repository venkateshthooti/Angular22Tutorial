import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { loginModelApi } from '../components/login/login';
import { Observable } from 'rxjs';

@Service()
export class Master {

    loggeduser: string = ''

    getFormatedCardNumber(cardNo: string) {
        debugger
        const astrics = "**** **** ****"
        return astrics + " " + cardNo.substring(12)

    }

    http = inject(HttpClient)

    getClients() {
        debugger
        return this.http.get('https://api.freeprojectapi.com/api/SmartParking/GetAllClients')
    }

    postSaveClient(clientFormObj: any) {
        debugger
        return this.http.post("https://api.freeprojectapi.com/api/SmartParking/AddClient", clientFormObj)
    }

    loginUser(loginObjApi: loginModelApi):Observable<any> {
        return this.http.post('https://projectapi.gerasim.in/api/UserApp/login', loginObjApi)
    }

}
