import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { ChildNgContent } from '../ng-content/child-ng-content/child-ng-content';

@Component({
  selector: 'app-ng-temp-container',
  imports: [NgFor, NgIf, NgTemplateOutlet, ChildNgContent],
  templateUrl: './ng-temp-container.html',
  styleUrl: './ng-temp-container.scss',
})
export class NgTempContainer {

  studentList: { studId: number, isActive:boolean, name: string, city: string, rollNo: number, age: number }[] = [
    { studId: 101, isActive:true, name: 'John Doe', city: 'New York', rollNo: 1, age: 20 },
    { studId: 102, isActive:false, name: 'Jane Smith', city: 'Los Angeles', rollNo: 2, age: 22 },
    { studId: 103, isActive:true, name: 'Bob Johnson', city: 'Chicago', rollNo: 3, age: 21 },
    { studId: 104, isActive:false, name: 'Alice Brown', city: 'Houston', rollNo: 4, age: 23 },
    { studId: 105, isActive:false, name: 'Charlie Davis', city: 'Phoenix', rollNo: 5, age: 20 },
    { studId: 103, isActive:true, name: 'Bob Johnson', city: 'Chicago', rollNo: 3, age: 21 },
    { studId: 104, isActive:true, name: 'Alice Brown', city: 'Houston', rollNo: 4, age: 23 },
    { studId: 105, isActive:false, name: 'Charlie Davis', city: 'Phoenix', rollNo: 5, age: 20 }
  ];

  loggedUserName="Venkatesh"

}
