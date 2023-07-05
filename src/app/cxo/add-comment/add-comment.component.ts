import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';
import { CxoCommentService } from 'src/app/services/cxo-comment.service';
// import { AspirationService } from 'src/app/services/aspiration.service';
@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit{
  @Input() aspirationId: number = 0;
  cxo_comment = {
    "comments": '',
  };
  data = {
    "title": '',
    "description": '',
  };
  constructor(
    private http: HttpClient,
    private authService: MsalService,
    private cxoCommentService: CxoCommentService,
    @Inject(MAT_DIALOG_DATA) public stag: any
  ) { }
  ngOnInit() {
    console.log(this.stag);
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
  add(ele: any) {
    ele.aspirationid = this.stag.id;
    console.log([ele]);
    this.cxoCommentService.create([ele]).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}



