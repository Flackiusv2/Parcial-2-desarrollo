import { Component, Input, OnInit } from '@angular/core';
import { FormularioResponse } from '../formulario/formularioResponse';

@Component({
  selector: 'app-response-detail',
  templateUrl: './response-detail.component.html',
  styleUrls: ['./response-detail.component.css']
})
export class ResponseDetailComponent implements OnInit {
  @Input() response!: FormularioResponse;

  constructor() { }

  ngOnInit() {
  }
}