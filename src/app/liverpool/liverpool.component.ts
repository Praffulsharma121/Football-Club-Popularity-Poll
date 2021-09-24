import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liverpool',
  templateUrl: './liverpool.component.html',
  styleUrls: ['./liverpool.component.css']
})
export class LiverpoolComponent implements OnInit {

  count: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.count++;
  }

}
