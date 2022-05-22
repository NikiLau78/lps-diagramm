import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";

import { Frage } from "../shared/frage";
import { FragenServiceService } from "../fragen-service.service";
//import { OptionComponent } from "../option/option.component";
//import { FRAGEN } from '../shared/mock-fragen';

@Component({
  selector: 'lps-pruef',
  templateUrl: './pruef.component.html',
  styleUrls: ['./pruef.component.css']
})
export class PruefComponent implements OnInit {
  check: string; // wird im prüfmodus nicht benötigt, muss auch aus der funktion raus!
  frage!: Frage;
  //fragen: Frage[] = [];
  i!: number; // muss in eine andere funktion!
  ergebnis: number = 0;
  ergebnisFalsch: number = 0;
  a = new Array();
  falsch = new Array();
  nachFrage: string;
  checkTest: string;
  checkEnde: string;
  random = this.fs.random;
  checkId = new Array();
  zaehler: number = 0;
  anzahlFragen: number;
  zeit: number = 0;
  teilPruef = this.fs.teilPruef;
  //vollPruef = this.fs.vollPruef;
  timeLeft: number = this.zeit;
  interval;
  pruefung = this.fs.pruefung; // zur anzeige im .html doc.
  zufall = this.fs.zufall;
  fragMulti = this.fs.fragMulti;
  fragSingle = this.fs.fragSingle;
  fragFill = this.fs.fragFill;
  index: number;
  auswahl: string;

  //private op: OptionComponent;

  constructor(
    private fs: FragenServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    /*this.startTimer();
    console.log('einzeln davor')*/
    const params = this.route.snapshot.paramMap;
    console.log(params);
    this.fs.initPool();
    //this.fs.getSingle(0).subscribe(f => this.frage = f);

    //console.log('einzeln danach'+ params)
  }

  /*getRandomInt(max) { //Zufallsgenerator
    const zufall = (Math.floor(Math.random() * Math.floor(max))+1);
    if (this.checkId.includes(zufall)){
      return this.getRandomInt(this.fs.anzahlFragen);
    }
    else {
      return zufall;
    }

  }*/

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.checkEnde = 'STOP!';
        this.checkErgebnis();
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  /*umschaltSortierung(event: any) {
    if (event.target.checked == true) {
      this.random = true;
    }
    if (event.target.checked == false){
      this.random = false;
    }
  }

  vollTeilPruefung(event: any) {
    if (event.target.checked == true) {
      this.anzahlFragen = 3;
      this.teilPruef = true;
    }
    if (event.target.checked == false){
      this.anzahlFragen = 7;
    }
  }*/

  /*showDetails(f: any) {
    console.log(f);
  }*/

  showFirst() { //kann so übernommen werden
    this.pauseTimer();
    this.startTimer();
    this.zaehler = 0;
    this.random = false;
    this.checkEnde = '';
    this.check = '';
    this.checkTest = '';
    this.ergebnis, this.ergebnisFalsch = 0;
    this.falsch = [];
    this.fs.initPool();
    console.log(this.frage.fragenId);
    this.a = [];
    this.fs.getSingle(0).subscribe(f => this.frage = f);
    this.index = 0;
    //this.typenCheckbox();
    console.log('FragenID PrüfKomp:', this.frage.fragenId);
  }

  /*showFirstRandom() { //kann so übernommen werden
    this.pauseTimer();
    this.startTimer();
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
    this.fs.getSingle(this.getRandomInt(this.fs.anzahlFragen)).subscribe(f => this.frage = f);
    //this.typenCheckbox();
    console.log(this.frage.fragenId);
  }*/

  /*showRev() { //sollte überarbeitet werden (Arraygrenzen)!
    this.checkEnde = '';
    if (this.frage.fragenId > 1) {
    this.a = [];
    this.fs.getSingle(this.frage.fragenId -1).subscribe(f => this.frage = f);
    }
  }*/

  showNext() { // siehe showRev()!
    this.zaehler++
    this.checkEnde = '';
    this.a = [];
    this.checkTest = '';
    if(this.falsch.length > 7){
      window.alert('mehr als 7 Falsche ANTWORTEN !!!\nnutze den Lernmodus')
      this.router.navigateByUrl("/lernmodus");
    }
    if (this.zaehler < this.anzahlFragen) {
      this.index++;
      this.fs.getSingle(this.index).subscribe(f => this.frage = f);
      //this.typenCheckbox();
    }
    else {
      this.checkEnde = 'ENDE';
      //this.checkErgebnis();
    }
  }

  /*showNextRandom() { // siehe showRev()!
    this.checkEnde = '';
    this.a = [];
    this.checkTest = '';
    this.zaehler++;
    if (this.zaehler < this.anzahlFragen) {
    this.fs.getSingle(this.getRandomInt(this.fs.anzahlFragen)).subscribe(f => this.frage = f);
    //this.typenCheckbox();
    }
    else {
      this.checkEnde = 'ENDE';
      //this.checkErgebnis();
    }
  }*/

  /*showLast() {
    this.check = ''
    this.a = [];
    this.fs.getSingle(this.index).subscribe(f => this.frage = f);
  }*/

  getAnswers(event: any) {
    if (this.frage.fragetyp == 'multi') {
      if (event.target.checked == true) {
        console.log(event);
        console.log(this.frage.antwortenId[this.i] + '. is true');
        this.a.push(this.frage.antwortenId[this.i]); // fügt den index ins array "a" hinzu
      }
      if (event.target.checked == false) {
        var x: any = this.a.findIndex(element => element == this.i + 1); //ermittelt die position der im index wo die antwortId drin steht
        console.log(this.frage.antwortenId[this.i] + '. is false');
        this.a.splice(x, 1); // löscht die Antwort aus dem array "a" im index x
      }
    }
  }
  @ViewChild('textantwort') textantwort: ElementRef;
  checkAntwort() {
    if (this.textantwort)
      this.textantwort.nativeElement.value = '';
    if (this.zaehler < this.anzahlFragen) {
      console.log('Eingeloggt: ' + this.a);
      console.log('Korekte Antworten: ' + this.frage.korrekteAntwort);
      this.a.sort();
      this.checkId.push(this.frage.fragenId);
      if (JSON.stringify(this.a) == JSON.stringify(this.frage.korrekteAntwort)) {
        this.check = 'RICHTIG';
        console.log("korrekte Antwort :D");// hier wollen wir eine aktion im Browser erzeugen !!!
        this.ergebnis++;
        //if (this.random == false){
        this.showNext();
        /*}
        else {
          this.showNextRandom();
        }*/
        //this.a = [];
        //this.fs.getSingle(this.frage.fragenId +1).subscribe(f => this.frage = f);
      }
      else {
        this.check = 'FALSCH';
        //this.nachFrage = 'weiter?';
        console.log("falsche Antwort :(");// hier wollen wir eine aktion im Browser erzeugen !!!
        if (this.teilPruef == true) {
          window.alert('FALSCH !!!!!!!')
         // this.showLast();
        }
        else {
          this.ergebnisFalsch++;
          this.falsch.push(this.frage.fragenId);
          //if (this.random == false){
          this.showNext();
          /*}
          else {
            this.showNextRandom();
          }*/
        }
      }
    }
    //}

  }

  getFill(event: any) {
    //console.log(event);
    this.a = [event.target.value];
  }

  clickEvent(i: number) { // evtl. in eine andere funktion mit übernehmen
    this.i = i;
    if (this.frage.fragetyp == 'single') {
      //this.a = [];
      this.a = [i + 1];
      console.log('clickevent' + i);
    }
  }

  checkErgebnis() {
    this.checkEnde = 'STOP!';
    const time = this.timeLeft;
    console.log(time);
    this.pauseTimer();
    this.checkTest = `von ${this.zaehler} Fragen\n${this.ergebnis} Fragen richtig\n${this.ergebnisFalsch} Fragen falsch.`
    console.log(this.ergebnis);
    console.log(this.falsch);
  }

  /*tipButton() {
    this.checkTest = 'Hier könnten einige Tips zu \nden Fragen stehen.'
  }*/

  /*loesungsButton() {
    this.checkTest = `Antwort = ${this.frage.korrekteAntwort}`;
  }*/

  vomStartButton() {
    this.auswahl = 'start';
    this.fs.getSingle(0).subscribe(f => this.frage = f);
    this.anzahlFragen = this.fs.anzahlFragen;
    this.teilPruef = this.fs.teilPruef;
    console.log(this.teilPruef);
    this.zeit = 5; // später auf 10 Sec. gehen
    this.timeLeft = this.zeit * this.anzahlFragen;
    //if(this.random == false){
    this.showFirst();
    /*}
    else {
      this.showFirstRandom();
    }*/
  }

  /*typenCheckbox() {
    if(this.frage.fragetyp == 'multi') {
      this.plHolder = '';
      this.randFarbe = 'border-color: white;'
      this.uiCheck = 'ui checkbox';
      this.boxCheck = 'checkbox';
      this.ex = 'example';
      this.typComp = 'multi';
    }
    if(this.frage.fragetyp == 'single') {
      this.plHolder = '';
      this.randFarbe = 'border-color: white;'
      this.uiCheck = ' ui radio checkbox';
      this.boxCheck = 'radio';
      this.ex = 'example2';
      this.typComp = 'single';
    }
    if(this.frage.fragetyp == 'fill') {
      //this.randFarbe = '';
      this.uiCheck = 'ui input focus';
      this.boxCheck = 'text';
      this.ex = 'vorname';
      //this.plHolder = 'Antwort';
    }
  }*/
}
