import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fc-bayern-munich',
  templateUrl: './fc-bayern-munich.component.html',
  styleUrls: ['./fc-bayern-munich.component.css']
})
export class FcBayernMunichComponent implements OnInit {

  count: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.count++;
  }

}
