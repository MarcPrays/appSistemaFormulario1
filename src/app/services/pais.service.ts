import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  // Servicio

  getPaises(): Observable<{nombre : string, codigo: string}[]> {
    // Si no se sabe que tipo de dato vamos a recibir
    return this.http.get<any[]>('https://restcountries.com/v3.1/lang/spanish')
      .pipe(
        map(resp =>
          resp.map(pais => ({ nombre: pais.name.common, codigo: pais.flag }))
        )
      );
  }
}
