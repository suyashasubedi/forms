import { Component, OnInit } from '@angular/core';
import {Reciepe} from '../reciepe.model';// imported the class from  created module.ts

@Component({
  selector: 'app-reciepe-detail',
  templateUrl: './reciepe-detail.component.html',
  styleUrls: ['./reciepe-detail.component.css']
})
export class ReciepeDetailComponent implements OnInit {
  reciepes: Reciepe []= [
  new Reciepe( 'a test reciepe','only test','https://www.pxfuel.com/en/free-photo-xzgpl')//calling constructor ,match with the format
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
