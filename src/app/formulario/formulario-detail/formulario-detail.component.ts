import { Component,Input, OnInit } from '@angular/core';
import { FormularioDetail } from '../formulario-detail';
import { FormularioService } from '../formulario.service';

@Component({
  selector: 'app-formulario-detail',
  templateUrl: './formulario-detail.component.html',
  styleUrls: ['./formulario-detail.component.css']
})
export class FormularioDetailComponent implements OnInit {
  @Input() formularioDetail?: FormularioDetail;
  selectedFormulario?: FormularioDetail;

  constructor(private formularioService: FormularioService) { 

  }

  ngOnInit() {
  }

  onSelected(formulario: FormularioDetail): void {
    this.selectedFormulario = formulario;
  }

}
