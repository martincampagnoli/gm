import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  //to update to an external API
  url = '/assets/mock/to-render.json';

  getData(): Observable<any> {
    return this.httpClient.get(this.url);
  }
}
