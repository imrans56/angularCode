import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RmCommentsRoutingModule } from './rm-comments-routing.module';
import { RmCommentsComponent } from './rm-comments.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ViewAspirationListComponent } from './view-aspiration-list/view-aspiration-list.component';
import { EditRmcommentsComponent } from './edit-rmcomments/edit-rmcomments.component';
import { AddRmcommentsComponent } from './add-rmcomments/add-rmcomments.component';
import { DetailsRmcommentsComponent } from './details-rmcomments/details-rmcomments.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [
    RmCommentsComponent,
    ViewAspirationListComponent,
    EditRmcommentsComponent,
    AddRmcommentsComponent,
    DetailsRmcommentsComponent
  ],
  imports: [
    CommonModule,
    RmCommentsRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatRadioModule,
  ]
})
export class RmCommentsModule { }
