import { Component,ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MsalService } from '@azure/msal-angular';
import { AspirationService } from 'src/app/services/aspiration.service';
import { state } from '@angular/animations';
import { NgForm } from '@angular/forms';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-add-aspiration',
  templateUrl: './add-aspiration.component.html',
  styleUrls: ['./add-aspiration.component.css']
})
export class AddAspirationComponent {
@ViewChild('addForm') addForm!: NgForm
  data= {
    "id": 0,
    "deleted": false,
    "title": '',
    "description": '',
    "type":'',
    "status":'',
    "Skill":'false',
    "Roles":'false',
    "Experience":'false',
    "Others":'false',
  };
  constructor(private http: HttpClient, private authService: MsalService,  
    private aspirationService: AspirationService) {
  }
  add(ele:any) {
    console.log("inside add");
    console.log([ele]);
 
      this.aspirationService.create([ele]).subscribe((response:any) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    
  }
}



