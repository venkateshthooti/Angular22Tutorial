import { DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CustomPipePipe } from '../../pipes/custom-pipe-pipe';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DecimalPipe,SlicePipe,JsonPipe,DatePipe,CustomPipePipe,],
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss',
})
export class Pipes {

  studentName='cheatn jogi'

  uppercaseStudentName=''

  address= 'gadderagaDi, MANCherial, HYD'
  productPrice=12564.6876

  rollNoList = [11,12,13,14,15,16,17,18]

  studentObj = {
    name:'chetan',
    city:'pune',
    phone:88626261
  }

  currentDate=new Date()
  cardNumber='2323242425252626'
  // constructor(){
  //   this.uppercaseStudentName=this.studentName.toUpperCase()
  // }
}
