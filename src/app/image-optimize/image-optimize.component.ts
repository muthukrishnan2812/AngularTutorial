import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-image-optimize',
  templateUrl: './image-optimize.component.html',
  styleUrl: './image-optimize.component.scss'
})
export class ImageOptimizeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  posts: any[]=[]
  ngOnInit(): void {
    this.getImage()
  }
  getImage() {
    return this.http.get(`https://fakestoreapi.com/products`).subscribe((res: any) => {
      this.posts = res;
    console.log(this.posts);
    })
  }
}
