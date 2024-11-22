import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormularioService } from './formulario.service';
import { FormularioResponse } from './formularioResponse';
import { ResponseListComponent } from '../response-list/response-list.component';

@Component({
  selector: 'app-formulario',
  templateUrl: 'formulario.component.html',
  styleUrls: ['formulario.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, ResponseListComponent]
})
export class FormularioComponent implements OnInit {
  prompt: string = '';
  response!: FormularioResponse;
  responses: FormularioResponse[] = [];

  constructor(private forumlarioservice: FormularioService) {}

  sendPrompt(): void {
    let prompt = (document.getElementById('gptPrompt') as HTMLTextAreaElement).value;
    console.log(prompt);
    this.forumlarioservice.addFormulario(prompt).subscribe(rta => {
      console.log(rta);
      this.responses.push(rta);
  });
  }


  ngOnInit() {}
}