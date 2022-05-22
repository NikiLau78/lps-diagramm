import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrageListeComponent } from "./frage-liste/frage-liste.component";
import { FrageEinzelnComponent } from "./frage-einzeln/frage-einzeln.component";
import { HomeComponent } from './home/home.component';
import { LernComponent } from './lern/lern.component';
import { PruefComponent } from './pruef/pruef.component';
import { OptionComponent } from './option/option.component';

const routes: Routes = [
  {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'liste',
    component: FrageListeComponent
  },
  {
    path: 'details',
    component: FrageEinzelnComponent
  },
  {
    path: 'liste/:fragenId',
    component: FrageEinzelnComponent
  },
  /*{
    path: 'single',
    component: SingleChoiceComponent
  },*/
  {
    path: 'lernmodus',
    component: LernComponent
  },
  {
    path: 'pruefmodus',
    component: PruefComponent,
  },
  {
    path: 'optionen',
    component: OptionComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
