import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CxoCommentService } from 'src/app/services/cxo-comment.service';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public stag:any,
  private cxoCommentService: CxoCommentService){}

update(ele:any){
  var a=[ele];
  console.log(a);

  this.cxoCommentService.update(a).subscribe((response:any)=>{
    console.log(response);
  },(error)=>{
     console.log(error);
  });
}
}
