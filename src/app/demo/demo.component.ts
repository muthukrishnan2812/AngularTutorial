import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {
  a = 50;
  b = 100;
  users = {name:['muthu','krishnan']}
  names =['ashok','rajesh','selva','sudala','sankar']
  value:boolean=true;
  color:string='red'
}
