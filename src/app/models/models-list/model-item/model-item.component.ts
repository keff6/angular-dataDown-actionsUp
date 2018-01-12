import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarModel } from '../../car-model.model';

@Component({
  selector: 'app-model-item',
  templateUrl: './model-item.component.html',
  styleUrls: ['./model-item.component.css']
})
export class ModelItemComponent implements OnInit {
  @Input() model: CarModel;

  @Output() selectedCar = new EventEmitter<CarModel>();

  constructor() { }

  ngOnInit() {
  }

  onSelectCar(){
    this.selectedCar.emit(this.model);
  }

}
