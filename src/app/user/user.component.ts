import { Component, OnInit } from '@angular/core';
import { UsersListService } from '../UsersList.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
name = '';
email = '';
mobile = '';

nameError = '';
emailError = '';
mobileError = '';

// students =[{name:"Anagha", email:"anagha@gmail.com", mobile:880606743},
//            {name:"Sanjana", email:"sanjaa@gmail.com", mobile:990606743}
// ]
students = [];

  
  constructor( private usersListService : UsersListService) { 
  }

  ngOnInit() {

    this.students = this.usersListService.getUsers();
  }

  addStudent(){
    if(this.name === '')
      this.nameError = "Please Enter Name"
    else
      this.nameError = "";

    
    if(this.email === '')
      this.emailError = "Please Enter Email"
    else
      this.emailError = "";
    
    
    if(this.mobile === '')
      this.mobileError = "Please Enter Mobile Number"
    else if(isNaN(parseInt(this.mobile))){
      this.mobileError = "Please Enter a Valid Mobile  Number"
    }
    else if(this.mobile.length !== 10){
    this.mobileError = "Mobile Number should have  10 digits";
    }
    else
      this.mobileError = "";
    
      

    
    if(this.name !== '' && this.email !== '' && this.mobile !== '' && !isNaN(parseInt(this.mobile)) && this.mobile.length == 10) {
      this.students.push({"name" : this.name , "email" : this.email , "mobile" : parseInt(this.mobile)});
      //this.name = '';
      //this.email = '';
      //this.mobile = '';
    }
  }

  showStudent(id){
    console.log(id);
    this.name = (this.students[id].name);
    this.email = (this.students[id].email);
    this.mobile = (this.students[id].mobile).toString();
  }
  updateStudent(id){
    this.students[id] = {"name":this.name,"email":this.email,"mobile":parseInt(this.mobile)};
    
  }

  deleteStudent(id:number){
    this.students.splice(id,1);
  }


  test = [{"id":10,"name":"sandeep","email":"sandeep@gmail.com"},
            {"id":10,"name":"sandeep","email":"sandeep@gmail.com"},
            {"id":10,"name":"sandeep","email":"sandeep@gmail.com"},
            {"id":10,"name":"sandeep","email":"sandeep@gmail.com"}  
          ]
}
