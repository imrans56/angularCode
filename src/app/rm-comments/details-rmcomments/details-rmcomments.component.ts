import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';
import { RmCommentsService } from 'src/app/services/rm-comments.service';

@Component({
  selector: 'app-details-rmcomments',
  templateUrl: './details-rmcomments.component.html',
  styleUrls: ['./details-rmcomments.component.css']
})
export class DetailsRmcommentsComponent {

  location: any;
  constructor(@Inject(MAT_DIALOG_DATA) public stag: any,
    private dialog: MatDialog, private http: HttpClient,
    private authService: MsalService, private rmCommentsService: RmCommentsService,
   ) { }

  goBack() {
    this.location.back();
  }

  getID(ele: any) {
    var a = [ele];
    console.log(a);
    this.rmCommentsService.getAll().subscribe((response: any) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    }
    );
  }
}
