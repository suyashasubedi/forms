import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-reciepe-item',
  templateUrl: './reciepe-item.component.html',
  styleUrls: ['./reciepe-item.component.css']
})
export class ReciepeItemComponent implements OnInit {
  @Input()Product;

  constructor() { }

  ngOnInit(): void {
  }

}
