import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.scss',
})
export class ControlFlow {


  isDivisible: boolean = true;
  divVisible() {
    this.isDivisible = !this.isDivisible;
  }
  isOfferAvailable: boolean = false;
  orderStatus: string = 'shipping';

  selectedCity: string = '';
  cityList: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
  studentList: { studId: number, name: string, city: string, rollNo: number, age: number }[] = [
    {studId: 101, name: 'John Doe', city: 'New York', rollNo: 1, age: 20 },
    {studId: 102, name: 'Jane Smith', city: 'Los Angeles', rollNo: 2, age: 22 },
    {studId: 103, name: 'Bob Johnson', city: 'Chicago', rollNo: 3, age: 21 },
    {studId: 104, name: 'Alice Brown', city: 'Houston', rollNo: 4, age: 23 },
    {studId: 105, name: 'Charlie Davis', city: 'Phoenix', rollNo: 5, age: 20 },
     {studId: 103, name: 'Bob Johnson', city: 'Chicago', rollNo: 3, age: 21 },
    {studId: 104, name: 'Alice Brown', city: 'Houston', rollNo: 4, age: 23 },
    {studId: 105, name: 'Charlie Davis', city: 'Phoenix', rollNo: 5, age: 20 }
  ];
  selectedStudentId:string = '';

}