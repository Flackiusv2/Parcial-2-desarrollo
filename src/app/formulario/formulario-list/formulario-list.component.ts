import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../formulario.service';
import { Formulario, FormularioResponse } from '../formulario';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-list',
  templateUrl: './formulario-list.component.html',
  styleUrls: ['./formulario-list.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class FormularioListComponent implements OnInit {
  formularios: Array<Formulario> = [];
  selected: boolean = false;
  selectedFormulario!: Formulario;
  p: number = 1;
  prompt: string = '';
  response: FormularioResponse | null = null;

  constructor(private forumlarioservice: FormularioService) {}

  getFormularios(): void {
    this.forumlarioservice.getFormularios().subscribe((formularios) => (this.formularios = formularios));
  }

  onSelected(formulario: Formulario): void {
    this.selected = true;
    this.selectedFormulario = formulario;
  }

  addFormulario(formulario: Formulario): void {
    this.forumlarioservice.addFormulario(formulario).subscribe((response) => {
      this.response = response;
      this.getFormularios();
    });
  }

  sendPrompt(): void {
    console.log('Sending prompt:', this.prompt); // Log the prompt
    const formulario = new Formulario(this.prompt, 'The format for the responde has three keys : (\'title\',\'joke\', and \'rating\'): \'title\' is  just a short title for the joke with less than 50 characters; \'joke\' contains the acutal joke; and \'rating\' has a rating for the joke, similar to the ratings used for movies.');
    this.forumlarioservice.addFormulario(formulario).subscribe(
      (response) => {
        console.log('API response:', response); // Log the response
        this.response = response;
      },
      (error) => {
        console.error('API error:', error); // Log any errors
      }
    );
  }

  ngOnInit() {
    this.getFormularios();
  }
}