import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MakersListComponent } from './makers/makers-list/makers-list.component';
import { MakerItemComponent } from './makers/makers-list/maker-item/maker-item.component';
import { ModelsListComponent } from './models/models-list/models-list.component';
import { ModelItemComponent } from './models/models-list/model-item/model-item.component';


@NgModule({
  declarations: [
    AppComponent,
    MakersListComponent,
    MakerItemComponent,
    ModelsListComponent,
    ModelItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
