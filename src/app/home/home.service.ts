import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { country, state, vaccineDetails } from './home.model';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  currentCountry: BehaviorSubject<any> = new BehaviorSubject(null);
  public currentCountry$ = this.currentCountry.asObservable();

  constructor(private http: HttpClient) {}

  getCountry(): Observable<country>{
    const url = `https://covid-api.mmediagroup.fr/v1/cases?country`;
    return this.http.get<country>(url);
  }

  getState(country: string) {
    const url = `https://covid-api.mmediagroup.fr/v1/cases?country=${country}`;
    return this.http.get<state>(url);

  }

  public setCurrentPage(value: string): void {
    this.currentCountry.next(value);
  }

  getVaccineDetails(country: string) {
    const url = `https://covid-api.mmediagroup.fr/v1/vaccines?country=${country}`;
    return this.http.get<vaccineDetails>(url);
  }
}
