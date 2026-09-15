import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.scss',
})
export class Variables {

  studentName: string = 'Venkatesh';
  rollNo: number = 12345;
  isstudentActive: boolean = true;
  currentDate: Date = new Date();

  teacherName: string = 'Rahul';

  cityList: string[] = ['Hyderabad', 'Bangalore', 'Chennai', 'Mumbai'];
  rollNoList: number[] = [108201, 108202, 108203, 108204];

  student: { name: string; rollNo: number; isActive: boolean } = {
    name: 'Venkatesh',
    rollNo: 12345,
    isActive: true
  };
  studentList: { name: string; rollNo: number; isActive: boolean }[] = [
    { name: 'Venkatesh', rollNo: 12345, isActive: true },
    { name: 'Rajkumar', rollNo: 12346, isActive: false },
    { name: 'Suresh', rollNo: 12347, isActive: true }
  ];

  employee:any="chetan"; // This is of type any so alllowed to assign any type of value to it.
  constructor() { 
    //debugger;
    console.log("current student name: " + this.studentName);
    console.log(this.studentList);
    console.log(this.studentList[1]);
    console.log("Object 1 student name: " + this.studentList[1].name);
    
    this.studentName = 'Rahul'; //studentname changed to rahul

    //this.rollNo = "suresh"; // This will cause a type error since rollNo is of type number  
    this.employee = 1234; // This is allowed since employee is of type any
    this.employee = true; // This is also allowed since employee is of type any 
    this.employee = { name: 'Chetan', age: 30 }; // This is also allowed since employee is of type any
    this.employee = ['Chetan', 'Rahul', 'Suresh']; // This is also allowed since employee is of type any  
    this.employee = null; // This is also allowed since employee is of type any 
    this.employee = undefined; // This is also allowed since employee is of type any  
    this.employee = function() { console.log('Hello'); }; // This is also allowed since employee is of type any 
    this.employee = Symbol('Chetan'); // This is also allowed since employee is of type any 
    this.employee = new Date(); // This is also allowed since employee is of type any 
    this.employee = new RegExp('Chetan'); // This is also allowed since employee is of type any 
    this.employee = new Map(); // This is also allowed since employee is of type any  
    this.employee = new Set(); // This is also allowed since employee is of type any  
    
    console.log("After current student name change: " + this.studentName);
    this.studentList[1].name = 'Suresh'; // This is allowed since studentList is of type array of objects]
    console.log("After current student name change object[1] : " + this.studentList[1].name);
    
  }

}
