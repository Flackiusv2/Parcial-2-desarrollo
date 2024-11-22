import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormularioResponse } from './formularioResponse';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  private apiUrl = environment.baseUrl; 

  constructor(private http: HttpClient) {}

  addFormulario(prompt: string): Observable<FormularioResponse> {
    const body = {
      prompt: prompt,
      format: "The format for the response has three keys: ('title','joke', and 'rating'): 'title' is just a short title for the joke with less than 50 characters; 'joke' contains the actual joke; and 'rating' has a rating for the joke, similar to the ratings used for movies."
    };
    return this.http.post<{ response: string }>(this.apiUrl, body).pipe(
      map(res => JSON.parse(res.response))
    );
  }
}