import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  BaseUrl ='https://localhost:44396/api/DashBoard';
  constructor(private http: HttpClient, private authService: MsalService) {   }

  // for Aspiration Fullfillment
  public getAll() {
    return  this.http.get(`${this.BaseUrl}/Gett`);
     }

     //To get TypeWise Aspirations
     public getType(){
      return this.http.get(`${this.BaseUrl}/Get`);
     }

     //To get Status of the Aspirations

     public getStatus(){
       return this.http.post(`${this.BaseUrl}/Gett`,null)

     }

}
