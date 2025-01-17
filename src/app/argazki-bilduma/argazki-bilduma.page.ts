import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-argazki-bilduma',
  templateUrl: './argazki-bilduma.page.html',
  styleUrls: ['./argazki-bilduma.page.scss'],
  standalone: false,
})

export class ArgazkiBildumaPage implements OnInit {
@Input() titulua!: string;

  
  constructor() { }

  ngOnInit() {
  }
   

}
