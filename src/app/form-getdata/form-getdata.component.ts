import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-getdata',
  templateUrl: './form-getdata.component.html',
  styleUrl: './form-getdata.component.scss'
})
export class FormGetdataComponent {
 todo:any
 id:any
 body:any
 title:any
 data:any
 todoForm:any=FormGroup
 

  constructor(private http:HttpClient) {}

  getData(id:number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
       .subscribe(data => {
         console.log('data-->',data)
        this.todo=data;
        this.todoForm.reset();
       })
   }
   postData(){
    return this.http.post(`https://jsonplaceholder.typicode.com/posts/`,{body:this.body, title: this.title})
    .subscribe(res=>{
      console.log(res);
      this.todo=res;
      console.log(typeof res)
      alert('data posted succesfully')
    })
   }
   deleteData(id:number){
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .subscribe(del=>{
      console.log('deleted id->'+id);
      console.log(del);
      this.todo=del;
      console.log(this.todo);
      
      alert('data deleted suceesfully');
    })
   }
 
}
