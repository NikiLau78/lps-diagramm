import { Component, OnInit } from '@angular/core';

import { FragenServiceService } from "../fragen-service.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'lps-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  constructor(public fs: FragenServiceService, private route: ActivatedRoute) { }
  //checked: boolean;
  //checker: boolean;

  //checkSort: string;
  //checkPruef: string;

  ngOnInit() {
  }

  vollP(event: any) {
    this.fs.teilPruef = false;
    //this.fs.vollPruef = event.target.checked;
    console.log('voll',event);
    /*console.log(event);
    this.fs.test2();*/
  }
  teilP(event: any){
    console.log('teil',event);
    this.fs.teilPruef = true;
    //this.fs.test();
  }

  sort(event: any) {
    this.fs.random = false; 
    this.fs.zufall = 'sortiert';
  }

  unSort(event: any) {
    this.fs.random = true;
    this.fs.zufall = ' unsortiert';
  }

  multi(event) {
    console.log(event);
    this.fs.fragMulti = event.target.checked;
  }

  single(event) {
    this.fs.fragSingle = event.target.checked;
    //this.checker = true;
  }

  fill(event) {
    console.log(event);
    this.fs.fragFill = event.target.checked;
  }
  /*mix() {
    this.fs.mix()
  }*/

}
