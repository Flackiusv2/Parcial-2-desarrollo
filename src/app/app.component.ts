import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioListComponent } from './formulario/formulario-list/formulario-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontParcial2';
}
