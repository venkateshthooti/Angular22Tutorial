import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { error } from 'console';
import { Observable, of, Subject } from 'rxjs';
import { Master } from '../../services/master';

@Component({
  selector: 'app-rxjs',
  imports: [],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.scss',
})
export class Rxjs {

  rollNo = 3
  rollNumList = of([12, 14, 16, 17, 18, 19])


  masterServ = inject(Master)


  constructor() {
    const promise = new Promise((resolve, reject) => {
      if (this.rollNo % 2 == -0) {
        resolve("Num is odd")
      } else {
        reject("Num is odd")
      }
    });

    promise.then((res) => {
      console.log(res)
    }).catch((error) => {
      console.log(error)
    })

    const observable1 = new Observable((res) => {
      if (this.rollNo % 2 == 0) {
        res.next("Num is even")
      } else {
        res.error("Num is odd")
      }
    })

    observable1.subscribe({
      next: (response: any) => {
        debugger
        console.log(response)
      },
      error: (err: any) => {
        debugger
        console.log(err)
      }
    })
    this.rollNumList.subscribe({
      next: (res: number[]) => {
        debugger
      }
    })

    this.masterServ.$selectedRollSubject.subscribe({
      next: (res: any) => {
        debugger
        console.log("dropdown value through subject rxjs component " + res)
      }
    })

    this.masterServ.$selctedRollBehaviourSubject.subscribe({
      next: (res: any) => {
        debugger
        console.log("dropdown value through BehaviourSubject rxjs component " + res)
      }
    })


  }

}
