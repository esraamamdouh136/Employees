import { Injectable } from '@angular/core';
// InterFace
import { Employees } from './employees'
// resolve Data (To speed up the data)
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";  
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay } from "rxjs/operators";




@Injectable({
  providedIn: 'root'
})
export class DataServiceService implements Resolve<Employees[]> {
  _url : string ="../assets/Employees.json"

  constructor(private http : HttpClient) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Employees[] | Observable<Employees[]> | Promise<Employees[]> {
    throw new Error('Method not implemented.');
  }
  getDataJson()  {
    return this.http.get(this._url).pipe(delay(50))
  }
}





