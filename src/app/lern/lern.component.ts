import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Frage } from "../shared/frage";
import { FragenServiceService } from "../fragen-service.service";
import { FRAGEN } from '../shared/mock-fragen';

@Component({
  selector: 'lps-lern',
  templateUrl: './lern.component.html',
  styleUrls: ['./lern.component.css']
})
export class LernComponent implements OnInit {
  check: string;
  @Input() frage!: Frage;
  fragen: Frage[] = [];
  i!: number;
  ergebnis: number = 0;
  ergebnisFalsch: number = 0;
  a = new Array();
  falsch = new Array();
  nachFrage: string;
  checkTest: string;
  checkEnde: string;
  random: boolean;
  checkId = new Array();
  zaehler: number = 0;
  ergebnisDiagram: any[];

  constructor(
    private fs: FragenServiceService,
    //private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    //const fragenId = '1';
    this.random = false;
    console.log('einzeln davor')
    const params = this.route.snapshot.paramMap;
    console.log(params);
    this.fs.getSingleListe(1).subscribe(f => this.frage = f);
    console.log('einzeln danach'+ params)
  }

  getRandomInt(max) { //Zufallsgenerator
    const zufall = (Math.floor(Math.random() * Math.floor(max))+1);
    if (this.checkId.includes(zufall)){
      return this.getRandomInt(FRAGEN.length);
    }
    else {
      return zufall;
    }

  }

  /*showDetails(f: any) {
    console.log(f);
  }*/

  showFirst() { //kann so übernommen werden
    this.random = false;
    this.checkEnde = '';
    this.check = '';
    this.checkTest = '';
    this.ergebnis, this.ergebnisFalsch = 0;
    this.falsch = [];
    console.log(this.frage.fragenId);
    this.a = [];
    this.fs.getSingleListe(1).subscribe(f => this.frage = f);
    console.log(this.frage.fragenId);
  }

  showFirstRandom() { //kann so übernommen werden
    this.zaehler = 0;
    this.checkId = [];
    this.random = true;
    this.checkEnde = '';
    this.check = '';
    this.checkTest = '';
    this.ergebnis, this.ergebnisFalsch = 0;
    this.falsch = [];
    console.log(this.frage.fragenId);
    this.a = [];
    this.fs.getSingleListe(this.getRandomInt(FRAGEN.length)).subscribe(f => this.frage = f);
    console.log(this.frage.fragenId);
  }

  showRev() { //sollte überarbeitet werden (Arraygrenzen)!
    this.checkEnde = '';
    if (this.frage.fragenId > 1) {
    this.a = [];
    this.fs.getSingle(this.frage.fragenId -1).subscribe(f => this.frage = f);
    }
  }

  showNext() { // siehe showRev()!
    this.zaehler++
    this.checkEnde = '';
    this.a = [];
    this.checkTest = '';
    if (this.frage.fragenId < FRAGEN.length) {
    this.fs.getSingleListe(this.frage.fragenId +1).subscribe(f => this.frage = f);
    }
    else {
      this.checkEnde = 'ENDE'
    }
  }

  showNextRandom() { // siehe showRev()!
    this.checkEnde = '';
    this.a = [];
    this.checkTest = '';
    this.zaehler++;
    if (this.zaehler < FRAGEN.length) {
    this.fs.getSingleListe(this.getRandomInt(FRAGEN.length)).subscribe(f => this.frage = f);
    }
    else {
      this.checkEnde = 'ENDE'
    }
  }

  showLast() {
    this.check = ''
    this.a = [];
    this.fs.getSingleListe(FRAGEN.length).subscribe(f => this.frage = f);
  }

  getAnswers(event: any) {  
    if (this.frage.fragetyp == 'multi'){  
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
}

getFill(event: any) {
  console.log(event);
  this.a = [event.target.value];
}

  checkAntwort() { 
    console.log('Eingeloggt: ' + this.a);
    console.log('Korekte Antworten: ' + this.frage.korrekteAntwort);
    this.a.sort();
    this.checkId.push(this.frage.fragenId);
    if (JSON.stringify(this.a)==JSON.stringify(this.frage.korrekteAntwort)) {
      this.check = 'RICHTIG';
      console.log("korrekte Antwort :D");// hier wollen wir eine aktion im Browser erzeugen !!!
      this.ergebnis++;
      if (this.random == false){
      this.showNext();
      }
      else {
        this.showNextRandom();
      }
      //this.a = [];
      //this.fs.getSingle(this.frage.fragenId +1).subscribe(f => this.frage = f);

    }
    else { 
      this.check = 'FALSCH';
      //this.nachFrage = 'weiter?';
      console.log("falsche Antwort :(");// hier wollen wir eine aktion im Browser erzeugen !!!

      this.ergebnisFalsch++;
      this.falsch.push(this.frage.fragenId);
      if (this.random == false){
        this.showNext();
      }
      else {
        this.showNextRandom();
      }
    }
  }

  myCheckbox(i:number) {
       this.i = i;
  }

  clickEvent(i: number) { // evtl. in eine andere funktion mit übernehmen
    this.i = i;
    if(this.frage.fragetyp == 'single'){
    this.a = [];
    this.a = [i+1];
    console.log('clickevent'+i);}
}

  /*checkErgebnis() {
    this.check = `von ${this.zaehler} Fragen\n${this.ergebnis} Fragen richtig\n${this.ergebnisFalsch} Fragen falsch.`
    console.log(this.ergebnis);
    console.log(this.falsch);
  }*/
  checkErgebnis() {
    /*this.check = `von ${this.zaehler} Fragen\n${this.ergebnis} Fragen richtig\n${this.ergebnisFalsch} Fragen falsch.`
    */
    this.ergebnisDiagram = [
      { name: "richtig", value: this.ergebnis },
      { name: "falsch", value: this.ergebnisFalsch },
    ];
    
    /*console.log(this.ergebnis);
    console.log(this.falsch);*/

  }

  tipButton() {
    this.checkTest = 'Hier könnten einige Tips zu \nden Fragen stehen.'
  }

  loesungsButton() {
    this.checkTest = `Antwort = ${this.frage.korrekteAntwort}`;
  }

  vomStartButton() {
    if(this.random == false){
      this.showFirst();
    }
    else {
      this.showFirstRandom();
    }
  }
}

