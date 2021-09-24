import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fc-barcelona',
  templateUrl: './fc-barcelona.component.html',
  styleUrls: ['./fc-barcelona.component.css']
})
export class FcBarcelonaComponent implements OnInit {

  count: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.count++;
  }
}
