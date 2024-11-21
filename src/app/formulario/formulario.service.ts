import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Formulario, FormularioResponse } from './formulario';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getFormularios(): Observable<Formulario[]> {
    return this.http.get<Formulario[]>(this.apiUrl);
  }

  addFormulario(formulario: Formulario): Observable<FormularioResponse> {
    return this.http.post<{ response: string }>(this.apiUrl, formulario).pipe(
      map((res) => JSON.parse(res.response))
    );
  }
}