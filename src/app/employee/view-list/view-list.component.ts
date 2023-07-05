import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';
import { AspirationService } from 'src/app/services/aspiration.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent {
 constructor(@Inject(MAT_DIALOG_DATA) public stag:any,
 private dialog: MatDialog,private http:HttpClient,
 private authService: MsalService, private aspirationService: AspirationService,
 private location : Location){}
 goBack(){
  this.location.back();
 }

 getID(ele: any) {
  var a = [ele];
  console.log(a);
 this.aspirationService.update(a).subscribe((response:any) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
 };
}
 