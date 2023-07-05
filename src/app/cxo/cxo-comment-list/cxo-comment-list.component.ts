import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MsalService } from '@azure/msal-angular';
import { ViewAspirationListComponent } from '../view-aspiration-list/view-aspiration-list.component';
import { EditCommentComponent } from '../edit-comment/edit-comment.component';
import { CxoCommentService } from 'src/app/services/cxo-comment.service';
import { Guid } from 'guid-typescript';
import { ViewParticularDetailsComponent } from '../view-particular-details/view-particular-details.component';

@Component({
  selector: 'app-cxo-comment-list',
  templateUrl: './cxo-comment-list.component.html',
  styleUrls: ['./cxo-comment-list.component.css']
})
export class CxoCommentListComponent {

  dataSource:any;
  cxo: any=[];

  displayedColumns:string[]=['a','b','c','d','e','f','g']

  data= {
    "aspirationTitle": '',
    "aspirationType": '',
    "aspirationStatus": '',
    "createdBy": Guid.parse('00000000-0000-0000-0000-000000000000'),
    "comments": '',
    "id": 0,
    "aspirationId":0,
    "name": 'any'
  }

  constructor(private dialog: MatDialog,private http: HttpClient, 
    private authService: MsalService, private cxoCommentService: CxoCommentService) {
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
    const dialogRef= this.dialog.open(EditCommentComponent,{ disableClose: true,
    data:ele });
    this.dialog.afterAllClosed.subscribe((open: any) => {
      this.getAll();
    });
  }

  getAll() {
      this.cxoCommentService.getAll().subscribe((response:any) => {
        console.log(response);
        this.cxo=response.data;
        console.log(this.cxo);
        this.dataSource = new MatTableDataSource(response.data);
      }, (error) => {
        console.log(error);
      });
}
update(ele:any) {
  this.cxoCommentService.update([ele]).subscribe((response:any) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
}

delete(ele:number) {
  console.log(ele);
  
  this.cxoCommentService.delete([ele]).subscribe((response:any) => {
    console.log(response);
    this.getAll();
  }, (error) => {
    console.log(error);
  });
}
detail(ele:any){
  this.dialog.open(ViewParticularDetailsComponent,{
    disableClose: true,
    data:ele,
  });
  this.dialog.afterAllClosed.subscribe(()=>{
    this.getAll();
  });
}

}
