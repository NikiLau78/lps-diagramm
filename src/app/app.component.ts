//import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component } from '@angular/core';

//import { Frage } from "./shared/frage";

//type ViewState = 'liste' | 'details' | 'single';

@Component({
  selector: 'lps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bla: string

  /*frageChoice() {

    this.bla = '<button class="ui button" routerLink="lernmodus" routerLinkActive="active">Lernmodus</button><button class="ui button" routerLink="pruefmodus" routerLinkActive="active">Prüfmodus</button><button class="ui button" routerLink="home" routerLinkActive="active">Optionen</button>'
  }*/

  //fragen!: Frage;
  //viewState: ViewState = 'liste';

  /*showList() {
    this.viewState = 'liste';
  }

  showDetails(frage: Frage) {
    //console.log(frage)
    //console.log('APP.component');
    this.fragen = frage;
    if(frage.fragetyp == 'multi'){
      this.viewState = 'details';
    }
    if(frage.fragetyp == 'single'){
      this.viewState = 'single';
    }
  }*/

  /*showSingle(frage: Frage) {
    console.log('SINGLE.component');
    this.fragen = frage;
    this.viewState = 'single';
  }*/
  
  title = 'lps';
}
