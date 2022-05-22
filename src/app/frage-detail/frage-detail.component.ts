import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
//import { FragenServiceService } from '../fragen-service.service';

import { Frage } from "../shared/frage";
//import { FRAGEN } from "../shared/mock-fragen";

@Component({
  selector: 'lps-frage-detail',
  templateUrl: './frage-detail.component.html',
  styleUrls: ['./frage-detail.component.css']
})
export class FrageDetailComponent implements OnInit {
  @Input() frage!: Frage;
  /*@Input()*/ fragen!: Frage[];

  constructor(private route: ActivatedRoute,
              /*private fs: FragenServiceService*/) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params['fragenId'];
  }

}
