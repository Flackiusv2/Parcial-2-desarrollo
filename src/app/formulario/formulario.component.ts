import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormularioService } from './formulario.service';
import { FormularioResponse } from './formularioResponse';
import { ResponseListComponent } from '../response-list/response-list.component';
import { ResponseDetailComponent } from '../response-detail/response-detail.component';

@Component({
  selector: 'app-formulario',
  templateUrl: 'formulario.component.html',
  styleUrls: ['formulario.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, ResponseListComponent, ResponseDetailComponent]
})
export class FormularioComponent implements OnInit {
  prompt: string = '';
  response!: FormularioResponse;
  responses: FormularioResponse[] = [];
  selectedResponse!: FormularioResponse;
  errorMessage: string = '';
  isPromptValid: boolean = false;

  constructor(private forumlarioservice: FormularioService) {}

  validatePrompt(event: Event): void {
    const input = (event.target as HTMLTextAreaElement).value;
    this.isPromptValid = input.length >= 150;
    this.errorMessage = this.isPromptValid ? '' : 'The prompt must be at least 150 characters long.';
  }

  sendPrompt(): void {
    if (this.isPromptValid) {
      let prompt = (document.getElementById('gptPrompt') as HTMLTextAreaElement).value;
      console.log(prompt);
      this.forumlarioservice.addFormulario(prompt).subscribe(rta => {
        this.responses.push(rta);
      });
    }
  }

  onJokeSelected(response: FormularioResponse) {
    this.selectedResponse = response;
  }

  ngOnInit() {}
}