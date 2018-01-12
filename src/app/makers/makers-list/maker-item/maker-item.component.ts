import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Maker } from '../../maker.model';
import { CarModel } from '../../../models/car-model.model';

@Component({
  selector: 'app-maker-item',
  templateUrl: './maker-item.component.html',
  styleUrls: ['./maker-item.component.css']
})
export class MakerItemComponent implements OnInit {
  @Input() maker: Maker;
  @Output() makerSelected = new EventEmitter<void>();
  makerName: String;

  constructor() { }

  ngOnInit() {
  }

  onMakerSelected(maker: Maker){
    this.makerName = maker.name;
    this.makerSelected.emit();
  }
  
}
