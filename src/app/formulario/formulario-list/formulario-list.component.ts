import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../formulario.service';
import { FormularioDetail } from '../formulario-detail';
import { Formulario } from '../formulario';

@Component({
  selector: 'app-formulario-list',
  templateUrl: './formulario-list.component.html',
  styleUrls: ['./formulario-list.component.css'],
})
export class FormularioListComponent implements OnInit {
  formularios: Array<FormularioDetail> = [];
  selected: boolean = false;
  selectedFormulario!: FormularioDetail;
  p: number = 1;
  prompt: string = '';
  response: string | null = null;

  constructor(private forumlarioservice: FormularioService) { }

  getFormularios(): void {
    this.forumlarioservice.getFormularios().subscribe(formularios => this.formularios = formularios);
  }

  onSelected(formulario: FormularioDetail): void {
    this.selected = true;
    this.selectedFormulario = formulario;
  }

  addFormulario(formulario: FormularioDetail): void {
    this.forumlarioservice.addFormulario(formulario).subscribe(formulario => {
      this.formularios.push(formulario);
      this.getFormularios();
    });
  }

  sendPrompt(): void {
    const formulario = new Formulario(this.prompt, 'text');
    this.forumlarioservice.addFormulario(formulario).subscribe(response => {
      this.response = response.prompt;
    });
  }

  ngOnInit() {
    this.getFormularios();
  }
}