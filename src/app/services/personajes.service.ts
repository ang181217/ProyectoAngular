import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  obtenerPersonajes(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}`).pipe(
      map((response: any) => {
        return {
          info: response.info,
          results: response.results
        };
      })
    );
  }

  obtenerPersonajesPorId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
