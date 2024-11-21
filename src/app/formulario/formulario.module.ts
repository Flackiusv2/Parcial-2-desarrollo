import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioListComponent } from './formulario-list/formulario-list.component';

@NgModule({
  declarations: [
    FormularioListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormularioListComponent
  ]
})
export class FormularioModule { }