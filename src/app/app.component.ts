import { Component, OnInit } from '@angular/core';
import { MarvellousService } from './marvellous.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone:false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Client';
  message:any;

  constructor(private service:MarvellousService)
  {}

  ngOnInit(): void {
      this.service.getBatches().subscribe(data=>{
        this.message = data;
      })
  }
}
