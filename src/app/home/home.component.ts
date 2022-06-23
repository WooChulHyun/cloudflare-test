import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule,],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  testRes: any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log(111)

    this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments').subscribe((data) => {
      console.log(data)
      this.testRes = data
    })

  }

}
