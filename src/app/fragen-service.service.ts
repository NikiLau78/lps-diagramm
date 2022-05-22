import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

import { Frage } from './shared/frage';
import { FRAGEN } from "./shared/mock-fragen";

@Injectable({
  providedIn: 'root'
})
export class FragenServiceService {
  teilPruef: boolean = false;
  anzahlFragen: number;
  pruefung: string; 
  fragMulti: boolean = true;
  fragSingle: boolean = true;
  fragFill: boolean = true;
  random: boolean = false;
  zufall: string = 'sortiert';
  uiCheck: string;
  frage: Frage;
  fragen: Frage[];
constructor() { }

getSingle(index: any): Observable<Frage> {
  
 console.log('service ' + index);
    return of(this.getFragen()[index]); 
}

getFragen(): Frage[] {
  return this.fragen;
}

initPool() {
  let fragen: Frage[] = JSON.parse(JSON.stringify(FRAGEN));
  if(this.random)
  {
    fragen = fragen.sort(()=>Math.random()-0.5);
    console.log(fragen.map((f) => f.fragenId));
  }
  let erlaubt = [];
  if(this.fragMulti){
    erlaubt.push('multi')
  } 
  if(this.fragSingle){
    erlaubt.push('single')
  } 
  if(this.fragFill){
    erlaubt.push('fill')
  } 
  fragen = fragen.filter((f: Frage)=> erlaubt.includes(f.fragetyp))
  console.log('fragen.fragenpool' , fragen.length, erlaubt, fragen)
  this.anzahlFragen = fragen.length;
  this.fragen = fragen;
}

checkAntwort() {
  console.log('Antwort Korrekt?!')
}

// Funktionen für Frageliste und Frage-Einzeln.
  getFragenAll(): Frage[] {
    return FRAGEN;
  }

  getSingleListe(fragenId: any): Observable<Frage> {  
  console.log('service ' + fragenId);
  return of(FRAGEN[fragenId-1]); 
  }

}