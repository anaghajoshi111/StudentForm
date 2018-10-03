import { Component, OnInit } from '@angular/core';
import {EmployeeListService} from '../employeeList.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeeList=[];

  constructor(private employeeListService: EmployeeListService) { }

  ngOnInit() {
    this.employeeList= this.employeeListService.employeeList;
  }

}
