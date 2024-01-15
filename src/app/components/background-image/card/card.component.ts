import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() labelPercent:string = "";
  @Input() labelText:string = "";
  @Input() urlImg:string ="";
  constructor() { }

  ngOnInit(): void {
  }

}
