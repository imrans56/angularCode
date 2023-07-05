import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MsalService } from '@azure/msal-angular';
import { AddBucommentComponent } from '../add-bucomment/add-bucomment.component';
import { AspirationService } from 'src/app/services/aspiration.service';

@Component({
  selector: 'app-bu-aspiration-list',
  templateUrl: './bu-aspiration-list.component.html',
  styleUrls: ['./bu-aspiration-list.component.css']
})

export class BuAspirationListComponent {

  // contact = {
  //   firstName: 'John',
  //   lastName: 'Doe',
  //   email: 'johndoe@example.com',
  //   phone: '555-555-5555'
  // };
  
  
  // dataSource:MatTableDataSource<any> = new MatTableDataSource;
  dataSource:any;
  // buhead: any=[];
  displayedColumns:string[] = ['a','b','c','d','e','f','g','h']
  data= {
    "id":0,
    "title": '',
    "description": '',
    "type": '',
    "status": '',
    "fullFillBy":'',
    "buApproved": '',
    "deleted": false
}

aspirationid: number = 0;

constructor(private dialog: MatDialog,
  private http: HttpClient, 
  private authService: MsalService, 
  private aspirationService: AspirationService) {}

  ngOnInit() {
     this.getAll();
  }


  getAll() {
    this.aspirationService.getAll().subscribe((response:any) => {
      this.dataSource = response.data;
    }, (error) => {
      console.log(error);
    });
}

addComment(element:any){
  console.log("inside adComent");
  console.log(element);
  

    // this.aspirationService.aspiration = element;
  this.dialog.open(AddBucommentComponent,{disableClose:true,  data: element});
  this.dialog.afterAllClosed.subscribe((open:any) => {
    this.getAll();
  });
}



}
