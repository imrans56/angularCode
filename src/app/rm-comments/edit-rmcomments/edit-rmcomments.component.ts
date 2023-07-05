import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RmCommentsService } from 'src/app/services/rm-comments.service';

@Component({
  selector: 'app-edit-rmcomments',
  templateUrl: './edit-rmcomments.component.html',
  styleUrls: ['./edit-rmcomments.component.css']
})
export class EditRmcommentsComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public stag:any,
  private rmCommentsService: RmCommentsService) {}

  update(ele:any) {
    var a = [ele];
    console.log(a);
    
    this.rmCommentsService.update(a).subscribe((response:any) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  
  }
}
