import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { HrCommentsService } from 'src/app/services/hr-comments.service';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AspirationService } from 'src/app/services/aspiration.service';

@Component({
  selector: 'app-add-hr-comments',
  templateUrl: './add-hr-comments.component.html',
  styleUrls: ['./add-hr-comments.component.css'],
})
export class AddHrCommentsComponent implements OnInit {
  @Input() aspirationId: number = 0;
  hr_comment = {
    "comments": '',
  };

  data = {
    "title": '',
    "description": '',
  };

  constructor(
    private http: HttpClient,
    private authService: MsalService,
    private aspirationService: AspirationService,
    private hrCommentsService: HrCommentsService,

    @Inject(MAT_DIALOG_DATA) public stag: any
  ) {}

  ngOnInit() {
    console.log(this.stag);
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

  add(ele: any) {
    ele.aspirationid = this.stag.id;
    console.log([ele]);
    this.hrCommentsService.create([ele]).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
