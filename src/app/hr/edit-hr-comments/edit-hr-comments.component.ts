import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HrCommentsService } from 'src/app/services/hr-comments.service';

@Component({
  selector: 'app-edit-hr-comments',
  templateUrl: './edit-hr-comments.component.html',
  styleUrls: ['./edit-hr-comments.component.css']
})
export class EditHrCommentsComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public stag:any,
  private hrCommentsService: HrCommentsService) {}

  update(ele:any) {
    var a = [ele];
    console.log(a);
    this.hrCommentsService.update(a).subscribe((response:any) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }
}
