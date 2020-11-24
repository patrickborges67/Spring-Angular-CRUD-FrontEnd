import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as $ from 'jquery';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private baseUrl = 'http://localhost:8080/api/v1/usuarios';

  constructor(private http: HttpClient) { }

  getUsuario(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUsuario(usuario: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, usuario);
  //   return $.ajax({
  //     url: `${this.baseUrl}`,
  //     type: "POST",
  //     data: JSON.stringify({usuario}),
  //     dataType: "json",
  //     contentType: "application/json; charset=utf-8",
  
  // }).done(function(resposta) {
  //     console.log(resposta);
  
  // }).fail(function(jqXHR, textStatus ) {
  //     console.log("Request failed: " + textStatus);
  
  // }).always(function() {
  //     console.log("completou");
  // });
  }

  updateUsuario(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getUsuarioList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
