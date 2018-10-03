import {Injectable} from '@angular/core';

@Injectable()

export class UsersListService{
    usersList = [{ name:"Sandeep", email:"sandeep@gmail.com", mobile:"8734374658"},
                    { name:"Sanjana", email:"sanjana@gmail.com", mobile:"9834374658"},
                    { name:"Anagha", email:"anagha@gmail.com", mobile:"7834374658"}]


  getUsers(){
   return this.usersList;
  }
}