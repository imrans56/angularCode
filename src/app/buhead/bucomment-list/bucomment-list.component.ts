import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MsalService } from '@azure/msal-angular';
import { BuheadCommentServiceService } from 'src/app/services/buhead-comment-service.service';
import { BuAspirationListComponent } from '../bu-aspiration-list/bu-aspiration-list.component';
import { EditBucommentComponent } from '../edit-bucomment/edit-bucomment.component';
import { ViewBucommentListComponent } from '../view-bucomment-list/view-bucomment-list.component';

@Component({
  selector: 'app-bucomment-list',
  templateUrl: './bucomment-list.component.html',
  styleUrls: ['./bucomment-list.component.css']
})
export class BucommentListComponent {

  dataSource:any;
  buhead: any=[];
  displayedColumns:string[]=['c','d','e','f','g','h','i','j','k','l','m']
  data= {
    "aspirationTitle": '',
    "aspirationType": '',
    "aspirationStatus": '',
    "createdBy": '00000000-0000-0000-0000-000000000000',
    "comments": '',
    "id": 0,
    "aspirationId":0,
    "aspirationFullFillBy": '',
    "aspirationBUApproved": false,
   // "name": 'any'
}

constructor(private dialog: MatDialog,private http: HttpClient, 
  private authService: MsalService, private buheadcommentservice: BuheadCommentServiceService) {
}

ngOnInit() {
  this.getAll();
}

add(){
  this.dialog.open(BuAspirationListComponent,{ disableClose: true});
  this.dialog.afterAllClosed.subscribe((open: any) => {
    this.getAll();
  });
}

getAll() {
   
  this.buheadcommentservice.getAll().subscribe((response:any) => {
    // console.log(response);
    this.buhead=response.data;
    // console.log(this.buhead);
    this.dataSource = new MatTableDataSource(response.data);
    // this.dataSource.wh
  }, (error: any) => {
    console.log(error);
  });
}


edit(ele:any) {
  const dialogRef= this.dialog.open(EditBucommentComponent,{ disableClose: true,
  data:ele });
  this.dialog.afterAllClosed.subscribe((open: any) => {
    this.getAll();
  });
}

delete(ele:number) {
  // console.log(ele);
  
  this.buheadcommentservice.delete([ele]).subscribe((response:any) => {
    // console.log(response);
    this.getAll();
  }, (error: any) => {
    console.log(error);
  });
}

  detail(ele: any) {

    this.dialog.open(ViewBucommentListComponent, {

      disableClose: true,

      data: ele,

    });

    this.dialog.afterAllClosed.subscribe(() => {

      this.getAll();

    });

  }
}