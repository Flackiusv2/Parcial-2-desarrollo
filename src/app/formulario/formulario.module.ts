import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioDetailComponent } from './formulario-detail/formulario-detail.component';
import { FormularioListComponent } from './formulario-list/formulario-list.component';

@NgModule({
  declarations: [FormularioDetailComponent,
    FormularioListComponent
  ],
  imports:[
    CommonModule
  ],
  exports:[FormularioDetailComponent,
    FormularioListComponent]
})
export class FormularioModule { }
