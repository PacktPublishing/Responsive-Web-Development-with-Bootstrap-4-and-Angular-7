import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portfolio } from './portfolio.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Portfolio[]> {
    return this.httpClient.get<Portfolio[]>(environment.apiUrl);
  }
}
