import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  API_charactersRickAndMorty = "https://rickandmortyapi.com/api/character";


  constructor(public http: HttpClient) { }

  public getCharacters(): Observable<any> {
    return this.http.get(this.API_charactersRickAndMorty);

  }
}
