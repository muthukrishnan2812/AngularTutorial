import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-edit-crud',
  templateUrl: './table-edit-crud.component.html',
  styleUrl: './table-edit-crud.component.scss'
})
export class TableEditCrudComponent implements OnInit{
  userArray :any[]=[];
constructor(private http:HttpClient){}
ngOnInit(): void {
  this.loadAllUser();
  
}
loadAllUser(){
  this.http.get(`https://jsonplaceholder.typicode.com/users`)
  .subscribe((res:any)=>{
    this.userArray = res;
  })
}
onedit(userObj:any){
  this.userArray.forEach((element)=>{
    element.isEdit=false;
  })
  userObj.isEdit=true;
}
onAdd(){
  const obj={
    "id":1,
    "name":"",
    "username":"",
    "email":"",
    "phone":"",
    "website":"",
    "isEdit":true
  }
  this.userArray.unshift(obj);
}
update(userObj:any){
  debugger;
}
cancel(obj:any){
  obj.isEdit=false
}
}
