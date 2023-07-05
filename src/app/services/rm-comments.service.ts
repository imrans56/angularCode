import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class RmCommentsService {
  aspiration_id: number =0;

  temp: any =null;
  baseUrls = "https://localhost:44396/api/Aspiration";
  baseUrl = "https://localhost:44396/api/AspirationComments";
  constructor(private http: HttpClient, private authService: MsalService) { }

  public getAspiration() {
    return this.http.get(`${this.baseUrls}/Get`);
  }

  public getAlls() {
    return this.http.post(`${this.baseUrls}/Get`, null);
  }

  public updateAspi(element: any) {
    return this.http.put(`${this.baseUrls}/Update`, element);
  }


  public getAll() {
    return this.http.post(`${this.baseUrl}/Get`, null);
  }

  public create(element: any) {
    return this.http.post(`${this.baseUrl}/Create`, element);
  }

  public update(element: any) {
    return this.http.put(`${this.baseUrl}/Update`, element);
  }

  public delete(element: [number]) {
    return this.http.delete(`${this.baseUrl}/Delete/`, { body: element });
  }
}
