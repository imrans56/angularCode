import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class WelcomeAspirationService {

  aspBaseUrl = 'https://localhost:44396/api/Aspiration';
  wcBaseUrl ='https://localhost:44396/api/WelcomeAsipration';
  constructor(private http: HttpClient, private authService: MsalService) {   }

  public getAll() {
    return  this.http.post(`${this.aspBaseUrl}/Get`,null);
     }

     public getWelcome(){
      return this.http.post(`${this.wcBaseUrl}/Get`,null);
     }
    
    //  public create(element:any) {
    //   return  this.http.post(`${this.baseUrl}/Create`,element);
    // }
    
    //  public update(element:any){
    //   return  this.http.put(`${this.baseUrl}/Update`,element);
    //  }
    
    //  public delete(element:[number]){
    //   return  this.http.delete(`${this.baseUrl}/Delete/`, {body:element});
    //  }

}
