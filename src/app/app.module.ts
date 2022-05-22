import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FrageListeComponent } from './frage-liste/frage-liste.component';
import { FrageDetailComponent } from './frage-detail/frage-detail.component';
import { FrageEinzelnComponent } from './frage-einzeln/frage-einzeln.component';
//import { SingleChoiceComponent } from './single-choice/single-choice.component';
import { HomeComponent } from './home/home.component';
import { LernComponent } from './lern/lern.component';
import { PruefComponent } from './pruef/pruef.component';
import { OptionComponent } from './option/option.component';
//import { MultiComponent } from './multi/multi.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [								
    AppComponent,
      FrageListeComponent,
      FrageDetailComponent,
      FrageEinzelnComponent,
      //SingleChoiceComponent,
      HomeComponent,
      LernComponent,
      PruefComponent,
      OptionComponent,
      //MultiComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
