import { Component, Input, Output, EventEmitter, OnInit, DoCheck } from '@angular/core';
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
export class ResponseListComponent implements OnInit, DoCheck {
  @Input() responses: FormularioResponse[] = [];
  @Output() jokeSelected = new EventEmitter<FormularioResponse>();
  mostCommonRating: string | null = null;
  private previousResponsesLength: number = 0;
  constructor() { }

  ngOnInit() {
    this.calculateMostCommonRating();
  }

  ngDoCheck() {
    console.log("Cambio chamo")
    if (this.responses.length !== this.previousResponsesLength) {
      this.previousResponsesLength = this.responses.length;
      this.calculateMostCommonRating();
    }
  }

  onSelect(response: FormularioResponse) {
    this.jokeSelected.emit(response);
  }

  calculateMostCommonRating() {
    if (this.responses.length === 0) {
      this.mostCommonRating = null;
      return;
    }

    const ratingCounts: { [key: string]: number } = {};
    this.responses.forEach(response => {
      ratingCounts[response.rating] = (ratingCounts[response.rating] || 0) + 1;
    });

    this.mostCommonRating = Object.keys(ratingCounts).reduce((a, b) => 
      ratingCounts[a] > ratingCounts[b] ? a : b
    );
  }
}