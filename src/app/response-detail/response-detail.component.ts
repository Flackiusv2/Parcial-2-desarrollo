import { Component, Input, OnInit } from '@angular/core';
import { FormularioResponse } from '../formulario/formularioResponse';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-response-detail',
  templateUrl: './response-detail.component.html',
  styleUrls: ['./response-detail.component.css'],
  imports: [FormsModule, CommonModule],
  standalone: true
})
export class ResponseDetailComponent implements OnInit {
  @Input() response!: FormularioResponse;

  constructor() { }

  ngOnInit() {
  }
}