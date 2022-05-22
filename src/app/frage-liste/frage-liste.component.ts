import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Frage } from "../shared/frage";
import { FragenServiceService } from "../fragen-service.service";

@Component({
  selector: 'lps-frage-liste',
  templateUrl: './frage-liste.component.html',
  styleUrls: ['./frage-liste.component.css']
})
export class FrageListeComponent implements OnInit {

  fragen: Frage[] = [];
  frage!: Frage;

  constructor(private fragenService: FragenServiceService ) { }

  ngOnInit(): void {
    this.getFragen();
  }
  
  getFragen(): void {
    this.fragen = this.fragenService.getFragenAll();
  }
 
}
