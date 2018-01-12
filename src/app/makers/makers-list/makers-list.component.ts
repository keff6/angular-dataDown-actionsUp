import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Maker } from '../maker.model';
import { CarModel } from '../../models/car-model.model';

@Component({
  selector: 'app-makers-list',
  templateUrl: './makers-list.component.html',
  styleUrls: ['./makers-list.component.css']
})
export class MakersListComponent implements OnInit {
  makers: Maker[] = [
    new Maker("Toyota","Japan", [new CarModel("Corolla",1988),new CarModel("Rav4",2016)]),
    new Maker("Honda","Japan",[new CarModel("Civic Si",2009),new CarModel("Accord",2016)]),
    new Maker("Lada","Russia",[new CarModel("Niva",1972),new CarModel("Samara",1995)]),
  ];

  @Output() makerSelected = new EventEmitter<Maker>();
  public mkerSelected: string;

  constructor() { }

  ngOnInit() {
  }

  onMakerSelected(maker: Maker){
    this.mkerSelected = maker.name;
    this.makerSelected.emit(maker);
  }

}
