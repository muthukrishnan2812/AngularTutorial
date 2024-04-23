import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-learn-crud',
  templateUrl: './learn-crud.component.html',
  styleUrls: ['./learn-crud.component.scss'], // Corrected property name
})
export class LearnCrudComponent implements OnInit {
  title = "helloworld";
  todo: any;
  value:any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
     this.getData();
    this.postData({ data: "muthukrishnan", title: "helloworld" });
    this.postData({ data:"rajamk", title:"hellomk" });

  }

  getData() {
   return this.http.get(`https://jsonplaceholder.typicode.com/photos/`)
      .subscribe(data => {
        console.log('data-->',data)
       this.todo=data;
      })
  
  }

  postData(data: any) {
    this.http.post(`https://jsonplaceholder.typicode.com/posts/`, data)
      .subscribe(response => {
        console.log(response);
       if (typeof response === 'object') {
          // If response is a single object, append it to existing data array
          console.log('this.value ->', this.value? true: false)
          this.value = this.value ? [...this.value, response] : [response];
        }
      }, error => {
        console.log(error);

      });
  }
}
