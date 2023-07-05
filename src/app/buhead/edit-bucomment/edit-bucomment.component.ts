import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BuheadCommentServiceService } from 'src/app/services/buhead-comment-service.service';

@Component({
  selector: 'app-edit-bucomment',
  templateUrl: './edit-bucomment.component.html',
  styleUrls: ['./edit-bucomment.component.css']
})

export class EditBucommentComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public stag:any,
  private BuheadCommentServiceService: BuheadCommentServiceService) {}

  update(ele:any) {
    console.log(ele);
    this.BuheadCommentServiceService.update([ele]).subscribe((response:any) => {
      console.log(response);
    }, (error:any) => {
      console.log(error);
    });
  
  }

}
