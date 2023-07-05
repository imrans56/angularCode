import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';
import { AddCommentComponent } from '../add-comment/add-comment.component';
import { Guid } from 'guid-typescript';
import { AspirationService } from 'src/app/services/aspiration.service';
@Component({
  selector: 'app-view-aspiration-list',
  templateUrl: './view-aspiration-list.component.html',
  styleUrls: ['./view-aspiration-list.component.css']
})
export class ViewAspirationListComponent {
  dataSource:any;
  displayedColumns:string[] = ['a','b','c','d','e','f'];
  data= {
    "id":0,
    "title": '',
    "description": '',
    "type": '',
    "status": '',
    "createdBy": Guid.parse('00000000-0000-0000-0000-000000000000')
};

aspirationid:number=0;

constructor(private dialog: MatDialog,private http: HttpClient, 
  private authService: MsalService, 
  private aspirationService: AspirationService
  ) {}
  ngOnInit() {
    this.getAspiration();
  }
  getAspiration() {
    this.aspirationService.getAspiration().subscribe(
      (response: any) => {
        console.log(response);
        this.dataSource = response;
      },
      (error) => {
  console.log(error);
      }
    );
  }
  add(ele: any) {
    console.log(ele);
    this.dialog.open(AddCommentComponent, {
      disableClose: true,
      data: ele,
      height: '570px',
      width: '1000px',
    });
    this.dialog.afterAllClosed.subscribe((open: any) => {
      this.getAspiration();
    });
  }
}
