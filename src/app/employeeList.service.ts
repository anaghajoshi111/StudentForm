import {Injectable} from '@angular/core';

@Injectable()

export class EmployeeListService{
    employeeList = [{ fname:"Sandeep",lname:"Pal", technology:"Java", salary:5000, dateOfBirth:new Date(1992,3,18), incrementPercent:0.25},
                    { fname:"Sanjana",lname:"Roy", technology:"PHP",salary:12000, dateOfBirth:new Date(1998,12,11), incrementPercent:0.35},
                    { fname:"Anagha", lname:"Joshi", technology:"Node",salary:15000, dateOfBirth:new Date(1867,11,25), incrementPercent:0.05}]


  getEmployees(){
   return this.employeeList;
  }
}