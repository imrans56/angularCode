import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MsalService } from '@azure/msal-angular';
import { AddHrCommentsComponent } from '../add-hr-comments/add-hr-comments.component';
import { AspirationService } from 'src/app/services/aspiration.service';
import { HrCommentsService } from 'src/app/services/hr-comments.service';

@Component({
  selector: 'view-aspiration-list',
  templateUrl: './view-aspiration-list.component.html',
  styleUrls: ['./view-aspiration-list.component.css'],
})
export class ViewAspirationListComponent {
  dataSource: any;

  displayedColumns: string[] = ['a', 'b', 'c', 'd', 'e'];

  data = {
    title: '',
    description: '',
    type: '',
    status: '',
  };

  aspirationid: number = 0;

  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private authService: MsalService,
    private aspirationService: AspirationService,
    private hrCommentsService: HrCommentsService
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
    this.dialog.open(AddHrCommentsComponent, {
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
