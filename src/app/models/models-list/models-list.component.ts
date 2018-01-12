import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarModel } from '../car-model.model';



@Component({
  selector: 'app-models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['./models-list.component.css']
})
export class ModelsListComponent implements OnInit {
  @Input() models: CarModel[];
  @Output() makerSelected = new EventEmitter<void>();
  model: string;

  constructor() { }

  ngOnInit() {
  }

  onSelectedCar(car: CarModel){
    this.model = car.name;
    this.makerSelected.emit();
  }

}
