import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-privacidade',
  templateUrl: './privacidade.component.html',
  styleUrls: ['./privacidade.component.css']
})
export class PrivacidadeComponent implements OnInit {
   lastUpdatedDate = '15 de Outubro de 2023'; 

  constructor() { }

  ngOnInit(): void {
  }
}
