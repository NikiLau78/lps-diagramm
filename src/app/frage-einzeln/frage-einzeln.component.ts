import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Frage } from "../shared/frage";
import { FragenServiceService } from "../fragen-service.service";
import { FRAGEN } from '../shared/mock-fragen';

@Component({
  selector: 'lps-frage-einzeln',
  templateUrl: './frage-einzeln.component.html',
  styleUrls: ['./frage-einzeln.component.css']
})
export class FrageEinzelnComponent implements OnInit {
  check: string;
  @Input() frage!: Frage;
  fragen: Frage[] = [];
  i!: number;
  a = new Array();

  constructor(
    private fs: FragenServiceService,
    //private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {

    console.log('einzeln davor')
    const params = this.route.snapshot.paramMap;
    console.log(params);
    this.fs.getSingleListe(params.get('fragenId')).subscribe(f => this.frage = f);
    console.log('einzeln danach'+ params)
  }

  /*showDetails(f: any) {
    console.log(f);
  }*/

  showFirst() { //kann so übernommen werden
    console.log(this.frage.fragenId);
    this.a = [];
    this.check = '';
    this.fs.getSingleListe(1).subscribe(f => this.frage = f);
    console.log(this.frage.fragenId);
  }

  showRev() { //sollte überarbeitet werden (Arraygrenzen)!
    this.a = [];
    this.check = '';
    if(this.frage.fragenId > 1){
    this.fs.getSingleListe(this.frage.fragenId -1).subscribe(f => this.frage = f);
    }
    else{ this.check = 'ENDE'};
  }

  showNext() { // siehe showRev()!
    this.a = [];
    this.check = '';
    if (this.frage.fragenId < FRAGEN.length) {
    this.fs.getSingleListe(this.frage.fragenId +1).subscribe(f => this.frage = f);
    }
    else {
      this.check = 'ENDE';
    }
  }

  showLast() {
    this.a = [];
    this.check = '';
    this.fs.getSingleListe(FRAGEN.length).subscribe(f => this.frage = f);
  }

  getAnswers(event: any) {    
    if (event.target.checked == true) {
      console.log(this.frage.antwortenId[this.i] +'. is true');
      this.a.push(this.frage.antwortenId[this.i]); // fügt den index ins array "a" hinzu
    }  
    if (event.target.checked == false) {
      var x: any = this.a.findIndex(element => element == this.i+1); //ermittelt die position der im index wo die antwortId drin steht
      console.log(this.frage.antwortenId[this.i] + '. is false');
      this.a.splice(x,1); // löscht die Antwort aus dem array "a" im index x
    }
  }

  checkAntwort() { 
    console.log('Eingeloggt: ' + this.a);
    console.log('Korekte Antworten: ' + this.frage.korrekteAntwort);
    this.a.sort();
    if (JSON.stringify(this.a)==JSON.stringify(this.frage.korrekteAntwort)) {
      this.check = 'RICHTIG :D';
      console.log("korrekte Antwort :D");// hier wollen wir eine aktion im Browser erzeugen !!!
    }
    else { 
      this.check = 'Scheiß Antwort !!!'
      console.log("falsche Antwort :(");// hier wollen wir eine aktion im Browser erzeugen !!!
    }
  }

  myCheckbox(i:number) {
       this.i = i;
  }
}
