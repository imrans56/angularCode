import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MsalService } from '@azure/msal-angular';
import { BuheadCommentServiceService } from 'src/app/services/buhead-comment-service.service';
import { MatRadioModule } from '@angular/material/radio';
import { stagger } from '@angular/animations';
import { AspirationService } from 'src/app/services/aspiration.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-bucomment',
  templateUrl: './add-bucomment.component.html',
  styleUrls: ['./add-bucomment.component.css']
})
export class AddBucommentComponent {
  buApproved: any;
  @Input() aspirationId: number = 0;

  bu_comment = {
    "aspirationId": 0,
    "comments": '',
  };

  data = {
    "title": '',
    "type": '',
    "createdBy": '',
    "comments": '',
    "fullFillBy": new Date,
    "aspirationBUApproved": false,
  }


  constructor(private http: HttpClient,
    private authService: MsalService,
    private aspirationService: AspirationService,
    private buheadCommentServiceService: BuheadCommentServiceService,
    @Inject(MAT_DIALOG_DATA) public stag: any) { }

  ngOnInit() {
    console.log(this.stag)

  }

  getID(ele: any) {
    var a = [ele];
    console.log(a);
    this.buheadCommentServiceService.getAll().subscribe(
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
    this.buheadCommentServiceService.create([ele]).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
