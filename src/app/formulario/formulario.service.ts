import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formulario } from './formulario';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root',

})
export class FormularioService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getFormularios(): Observable<Formulario[]> {
    return this.http.get<Formulario[]>(this.apiUrl);
  }

  addFormulario(formulario: Formulario): Observable<Formulario> {
    return this.http.post<Formulario>(this.apiUrl, formulario);
  }
  




}
