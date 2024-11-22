import { Component, Input, OnInit } from '@angular/core';
import { FormularioResponse } from '../formulario/formularioResponse';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-response-list',
  templateUrl: './response-list.component.html',
  styleUrls: ['./response-list.component.css'],
  imports: [FormsModule, CommonModule],
  standalone: true
})
export class ResponseListComponent implements OnInit {
  @Input() responses: FormularioResponse[] = [];

  constructor() { }

  ngOnInit() {
  }
}