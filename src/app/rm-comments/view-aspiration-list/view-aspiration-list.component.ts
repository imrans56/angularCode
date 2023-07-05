import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';
import { RmCommentsService } from 'src/app/services/rm-comments.service';
import { AddRmcommentsComponent } from '../add-rmcomments/add-rmcomments.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-aspiration-list',
  templateUrl: './view-aspiration-list.component.html',
  styleUrls: ['./view-aspiration-list.component.css']
})
export class ViewAspirationListComponent {
  
  dataSource:any;

  displayedColumns:string[]=['a','b','c','d','e','f']

  data= {
    title: '',
    description: '',
    type: '',
    status: ''
  };

  aspiration_id: number =0;
  constructor(private dialog: MatDialog,private http: HttpClient, 
    private authService: MsalService, private rmCommentsService: RmCommentsService) {
  }

  ngOnInit() {
    this.getAll();
  }

  addComment(element: any){
    console.log("inside addComment");
    console.log(element);
    this.dialog.open(AddRmcommentsComponent, {
      disableClose: true,
      data: element,
    });
    this.dialog.afterAllClosed.subscribe((open: any) => {
      this.getAll();
    });
  }

  getAll(){
    this.rmCommentsService.getAspiration().subscribe((response:any) => {
      console.log(response);
      this.dataSource = response;
    }, (error) => {
      console.log(error);
    });
  }
}
