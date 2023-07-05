import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';
import { HrCommentsService } from 'src/app/services/hr-comments.service';

@Component({
  selector: 'app-view-particular-details',
  templateUrl: './view-particular-details.component.html',
  styleUrls: ['./view-particular-details.component.css'],
})
export class ViewParticularDetailsComponent {
  location: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public stag: any,

    private dialog: MatDialog,
    private http: HttpClient,
    private authService: MsalService,
    private hrCommentsService: HrCommentsService
  ) {}

  goBack() {
    this.location.back();
  }

  getID(ele: any) {
    var a = [ele];
    console.log(a);
    this.hrCommentsService.getAll().subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

