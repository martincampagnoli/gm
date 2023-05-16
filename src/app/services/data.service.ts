import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  url = '/assets/mock/to-render.json';

  getData(): Observable<any> {
    return this.httpClient.get(this.url);
  }
}
