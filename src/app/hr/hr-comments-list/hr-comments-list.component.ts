import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MsalService } from '@azure/msal-angular';
import { HrCommentsService } from 'src/app/services/hr-comments.service'; 
import { Guid } from 'guid-typescript';
import { ViewAspirationListComponent } from '../view-aspiration-list/view-aspiration-list.component';
import { EditHrCommentsComponent } from '../edit-hr-comments/edit-hr-comments.component';
import { AspirationService } from 'src/app/services/aspiration.service';
import { ViewParticularDetailsComponent } from '../view-particular-details/view-particular-details.component';


@Component({
  selector: 'app-hr-comments-list',
  templateUrl: './hr-comments-list.component.html',
  styleUrls: ['./hr-comments-list.component.css'],
})
export class HrCommentsListComponent {
stag: any;
getID(arg0: any) {
throw new Error('Method not implemented.');
}
  dataSource: any;

  displayedColumns: string[] = [ 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  data = {
    "deleted": false,
    "aspirationTitle": '',
    "aspirationStatus": '',
    "createdBy": Guid.parse,
    "comments": '',
  };
  location: any;

  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private authService: MsalService,
    private hrCommentsService: HrCommentsService,
    private aspirationService: AspirationService
  ) {}

  ngOnInit() {
    this.getAll();
  }
  
  add(){
    this.dialog.open(ViewAspirationListComponent,{ disableClose: true});
    this.dialog.afterAllClosed.subscribe((open: any) => {
      this.getAll();
    });
   
  }

  edit(ele: any) {
    const dialogRef = this.dialog.open(EditHrCommentsComponent, {
      disableClose: true,
      data: ele,
    });
    this.dialog.afterAllClosed.subscribe((open: any) => {
      this.getAll();
    });
  }

  getAll() {
    this.hrCommentsService.getAll().subscribe(
      (response: any) => {
        console.log(response);
        this.dataSource = new MatTableDataSource(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  update(ele: any) {
    this.hrCommentsService.update([ele]).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  delete(ele: number) {
    console.log(ele);
    this.hrCommentsService.delete([ele]).subscribe(
      (response: any) => {
        console.log(response);
        this.getAll();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  detail(ele: any) {
    this.dialog.open(ViewParticularDetailsComponent, {
      disableClose: true,
      data: ele,
    });
    this.dialog.afterAllClosed.subscribe(() => {
      this.getAll();
    });
  }

}
