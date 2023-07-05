import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CxoRoutingModule } from './cxo-routing.module';
import { CxoComponent } from './cxo.component';
import { ViewAspirationListComponent } from './view-aspiration-list/view-aspiration-list.component';
import { ViewParticularDetailsComponent } from './view-particular-details/view-particular-details.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component';
import { CxoCommentListComponent } from './cxo-comment-list/cxo-comment-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    CxoComponent,
    ViewAspirationListComponent,
    ViewParticularDetailsComponent,
    AddCommentComponent,
    EditCommentComponent,
    CxoCommentListComponent
  ],
  imports: [
      CommonModule,
    CxoRoutingModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTooltipModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
  ]
})
export class CxoModule { }
