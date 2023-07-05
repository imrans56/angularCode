import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class WelcomeServicesService {

  aspBaseUrl = 'https://localhost:44396/api/Aspiration';

 wcBaseUrl ='https://localhost:44396/api/WelcomeAsipration';
  
constructor(private http: HttpClient, private authService: MsalService) {  }
  
  public getAll() {

    return this.http.post(`${this.aspBaseUrl}/Get`, null);

  }
  public getWelcome() {

    return this.http.post(`${this.wcBaseUrl}/Get`, null);

  }

}
