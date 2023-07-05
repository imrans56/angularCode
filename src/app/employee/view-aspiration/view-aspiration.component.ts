import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MsalService } from '@azure/msal-angular';
import { AddAspirationComponent } from '../add-aspiration/add-aspiration.component';
import { AspirationService } from 'src/app/services/aspiration.service';
import { EditAspirationComponent } from '../edit-aspiration/edit-aspiration.component';
import { ViewListComponent } from '../view-list/view-list.component';

@Component({
  selector: 'app-view-aspiration',
  templateUrl: './view-aspiration.component.html',
  styleUrls: ['./view-aspiration.component.css']
})
export class ViewAspirationComponent {

  dataSource:any;

  displayedColumns:string[]=['b','c','d','e','f','g']

  data= {
    "title": '',
    "description":'',
    "type":'',
    
  }

  constructor(private dialog: MatDialog,private http: HttpClient, 
    private authService: MsalService, private aspirationService: AspirationService) {

  }

  ngOnInit() {
    this.getAll();
  }

  add(){
    this.dialog.open(AddAspirationComponent,{ disableClose: true});
    this.dialog.afterAllClosed.subscribe((open: any) => {
      this.getAll();
    });
  }

  edit(ele:any) {
    const dialogRef= this.dialog.open(EditAspirationComponent,{ disableClose: true,
    data:ele });
    this.dialog.afterAllClosed.subscribe((open: any) => {
      this.update(ele);
    });
  }

  getAll() {
      this.aspirationService.getAll().subscribe((response:any) => {
        console.log(response);
        this.dataSource = new MatTableDataSource(response.data);
      }, (error) => {
        console.log(error);
      });
}

update(ele:any) {
  this.aspirationService.update([ele]).subscribe((response:any) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
}

delete(ele: number): void {
  const confirmed = confirm("Are you sure you want to delete this item?");

  if (confirmed) {
    console.log(ele);

    this. aspirationService.delete([ele]).subscribe(
      (response) => {
        console.log(response);
        this.getAll();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

detail(ele:any){
  this.dialog.open(ViewListComponent,{
    disableClose:true,
    data:ele,
  });
  this.dialog.afterAllClosed.subscribe(()=>{
    this.getAll();
  });
}

}
