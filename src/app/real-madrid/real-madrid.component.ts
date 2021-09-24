import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-real-madrid',
  templateUrl: './real-madrid.component.html',
  styleUrls: ['./real-madrid.component.css']
})
export class RealMadridComponent implements OnInit {

  count: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.count++;
  }

}
