import { Component, OnInit, Input } from '@angular/core';
import { Maker } from '../../maker.model';
import { CarModel } from '../../../models/car-model.model';

@Component({
  selector: 'app-maker-item',
  templateUrl: './maker-item.component.html',
  styleUrls: ['./maker-item.component.css']
})
export class MakerItemComponent implements OnInit {
  @Input() maker: Maker;
  makerName: String;

  constructor() { }

  ngOnInit() {
  }
  
}
