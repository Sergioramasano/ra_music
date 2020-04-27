import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetAuthorService {

  constructor(private http: HttpClient) { }

  getSongByName(name: string, limit: string) : Observable<any> {
    const newName = name.split(' ').join('+').toLowerCase();
    return  this.http.get(`https://itunes.apple.com/search?term=${newName}&limit=${limit}`);
  }
}


