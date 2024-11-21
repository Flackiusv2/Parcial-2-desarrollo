import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../formulario.service';
import { FormularioDetail } from '../formulario-detail';

@Component({
  selector: 'app-formulario-list',
  templateUrl: './formulario-list.component.html',
  styleUrls: ['./formulario-list.component.css']
})
export class FormularioListComponent implements OnInit {

  formularios: Array<FormularioDetail> = [];
  
  selected: boolean = false;
  selectedFormulario!: FormularioDetail;
  p: number =1;

  constructor(private forumlarioservice: FormularioService) { }

  getFormularios(): void {
    this.forumlarioservice.getFormularios().subscribe(formularios => this.formularios = formularios);
  }

  onSelected(formulario: FormularioDetail): void {
    this.selected = true;
    this.selectedFormulario = formulario;
  }

  ngOnInit() {
    this.getFormularios();
  }

}
