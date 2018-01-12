import { Component } from '@angular/core';
import { Maker } from './makers/maker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  makerSelected: string;

  onMakerSelected(maker: Maker){
    this.makerSelected = maker.name;
  }
}
