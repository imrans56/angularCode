import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';
import { CxoCommentService } from 'src/app/services/cxo-comment.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-view-particular-details',
  templateUrl: './view-particular-details.component.html',
  styleUrls: ['./view-particular-details.component.css']
})
export class ViewParticularDetailsComponent{
  constructor(
    @Inject(MAT_DIALOG_DATA) public stag: any,
    private dialog: MatDialog,
    private http: HttpClient,
    private authService: MsalService,
    private cxoCommentService: CxoCommentService,
    private location:Location) {}
    goBack() {
      this.location.back();
    }
  getID(ele: any) {
    var a = [ele];
    console.log(a);
    this.cxoCommentService.getAll().subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
