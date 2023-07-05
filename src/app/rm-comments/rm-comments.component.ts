import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MsalService } from '@azure/msal-angular';
import { Guid } from 'guid-typescript';
import { RmCommentsService } from '../services/rm-comments.service';
import { DetailsRmcommentsComponent } from './details-rmcomments/details-rmcomments.component';
import { EditRmcommentsComponent } from './edit-rmcomments/edit-rmcomments.component';
import { ViewAspirationListComponent } from './view-aspiration-list/view-aspiration-list.component';

@Component({
  selector: 'app-rm-comments',
  templateUrl: './rm-comments.component.html',
  styleUrls: ['./rm-comments.component.css']
})
export class RmCommentsComponent {
  dataSource:any;

  displayedColumns:string[]=['a','b','c','d','e','f','g','h']

  data= {
    "id": 0,
    "deleted": false,
    "aspirationTitle": '',
    "aspirationType": '',
    "aspirationStatus": '',
    "createdBy": Guid.parse,
    "comments": ''
  }

  constructor(private dialog: MatDialog,private http: HttpClient, 
    private authService: MsalService, private rmCommentsService: RmCommentsService) {
  }

  ngOnInit() {
    this.getAll();
  }

  add(){
    this.dialog.open(ViewAspirationListComponent,{ disableClose: true});
    this.dialog.afterAllClosed.subscribe((open: any) => {
      this.getAll();
    });
  }

  edit(ele:any) {
    const dialogRef= this.dialog.open(EditRmcommentsComponent,{ disableClose: true,
    data:ele });
    this.dialog.afterAllClosed.subscribe((open: any) => {
      this.getAll();
    });
  }

  getAll() {  
      this.rmCommentsService.getAll().subscribe((response:any) => {
        console.log(response);
        this.dataSource = new MatTableDataSource(response.data);
      }, (error) => {
        console.log(error);
      });
}

update(ele:any) {
  this.rmCommentsService.update([ele]).subscribe((response:any) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
}

delete(ele:number) {
  console.log(ele);
  
  this.rmCommentsService.delete([ele]).subscribe((response:any) => {
    console.log(response);
    this.getAll();
  }, (error) => {
    console.log(error);
  });

}

detail(ele:any){
  this.dialog.open(DetailsRmcommentsComponent,{ disableClose: true,
    data:ele });
    this.dialog.afterAllClosed.subscribe((open: any) => {
      this.getAll();
    });
}
}
