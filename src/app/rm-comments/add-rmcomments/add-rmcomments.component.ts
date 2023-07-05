import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MsalService } from '@azure/msal-angular';
import { RmCommentsService } from 'src/app/services/rm-comments.service';

@Component({
  selector: 'app-add-rmcomments',
  templateUrl: './add-rmcomments.component.html',
  styleUrls: ['./add-rmcomments.component.css']
})
export class AddRmcommentsComponent implements OnInit {
  @Input() aspirationId: number = 0;
  rm_comment = {
    "comments": '',
    "aspirationRMSApproved": false
  };

  // data = {
  //   "title": '',
  // };

  data1 : any = {
    "id": 0,
    "deleted": true,
    "title": '',
    "description": '',
    "type": '',
    "status": '',
    "rmsApproved": true,
    "buApproved": true,
    "fullFillBy":''
  }

  constructor(
    private http: HttpClient,
    private authService: MsalService,
    private rmCommentsService: RmCommentsService,

    @Inject(MAT_DIALOG_DATA) public stag: any
  ) { }

  ngOnInit() {
    // console.log(this.stag);
  }

  getID(ele: any) {
    var a = [ele];
    console.log(a);
    this.rmCommentsService.getAll().subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  add(ele: any) {
    ele.aspirationid = this.stag.id;
    console.log([ele]);
    this.rmCommentsService.create([ele]).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateAspiration(asp: any) {
    // var a = [asp];
    // console.log(a);
    // asp.rmsApproved
    console.log("Inside updateAspiration to all");
    console.log(asp);
    // this.rmCommentsService.updateAspi(asp).subscribe((response: any) => {
    //   console.log(response);
    // }, (error) => {
    //   console.log(error);
    // });
  }
}
