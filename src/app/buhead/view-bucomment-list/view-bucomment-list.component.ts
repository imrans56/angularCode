import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';
import { BuheadCommentServiceService } from 'src/app/services/buhead-comment-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-bucomment-list',
  templateUrl: './view-bucomment-list.component.html',
  styleUrls: ['./view-bucomment-list.component.css']
})
export class ViewBucommentListComponent {

  constructor(

    @Inject(MAT_DIALOG_DATA) public stag: any,
    private dialog: MatDialog,
    private http: HttpClient,
    private authService: MsalService,
    private aspirationService: BuheadCommentServiceService,
    private location:Location) {}

    goBack() {
      this.location.back();
    }

  getID(ele: any) {
    var a = [ele];
    console.log(a);
    this.aspirationService.getAll().subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
