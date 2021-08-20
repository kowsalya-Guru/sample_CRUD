import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { environment } from "../../environments/environment";
import { VendorData } from "./vendors-data.model";
const BACKEND_URL = environment.apiUrl + "/vendor";

@Injectable({ providedIn: "root" })
export class VendorService {

  private VendorListener = new Subject<boolean>();
  
  getComponentStatusListener() {
    return this.VendorListener.asObservable();
  }

  constructor(private http: HttpClient, private router: Router) {}

  createVendor = async(obj:VendorData) => new Promise<any>((resolve, rejects) => {
    this.http.post(BACKEND_URL , obj)
    .subscribe(
      response => {
          resolve(response);
      },
      error => {
        rejects(error);
      }
    );
  })


  readVendor = async(query?: any) => new Promise<any>((resolve, rejects) => {
    this.http.get<any>(BACKEND_URL +(query ? query :''))
    .subscribe(
      response => {
        resolve(response);
      },
      error => {
        rejects(error);
      }
    );
  }) 


  updateVendor = async (id, obj:VendorData) => new Promise<any>((resolve, rejects) => {
    this.http.put<any>(BACKEND_URL+ "/"  + id, obj)
    .subscribe(
      response => {
        resolve(response);
      },
      error => {
        rejects(error);
      }
    );
  })
  
  deleteVendor = async (id) => new Promise<any>((resolve, rejects) => {
    this.http.delete<any>(BACKEND_URL+ "/"  + id)
    .subscribe(
      response => {
        resolve(response);
      },
      error => {
        rejects(error);
      }
    );
  })
  
  
}