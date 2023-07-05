import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AspirationService } from 'src/app/services/aspiration.service';
import { NgForm } from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-edit-aspiration',
  templateUrl: './edit-aspiration.component.html',
  styleUrls: ['./edit-aspiration.component.css']
})

export class EditAspirationComponent {
  @ViewChild('addForm') addForm!: NgForm
  constructor(
    @Inject(MAT_DIALOG_DATA) public stag: any,
    private aspirationService: AspirationService
  ) {}

  update(ele: any) {
    console.log(ele);
    this.aspirationService.update([ele]).subscribe((response: any) => {
      console.log(response);
    }, (error: any) => {
      console.log(error);
    });
  }
}
