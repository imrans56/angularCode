import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldControl } from '@angular/material/form-field';

import { BuheadRoutingModule } from './buhead-routing.module';
import { BuheadComponent } from './buhead.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { MatCardImage, MatCardModule } from '@angular/material/card';
import { AddBucommentComponent } from './add-bucomment/add-bucomment.component';
import { BuAspirationListComponent } from './bu-aspiration-list/bu-aspiration-list.component';
import { BucommentListComponent } from './bucomment-list/bucomment-list.component';
import { EditBucommentComponent } from './edit-bucomment/edit-bucomment.component';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { ViewBucommentListComponent } from './view-bucomment-list/view-bucomment-list.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    BuheadComponent,
    BucommentListComponent,
    AddBucommentComponent,
    BuAspirationListComponent,
    EditBucommentComponent,
    ViewBucommentListComponent,
  ],
  imports: [
    CommonModule,
    BuheadRoutingModule,
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
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule

  ]
})
export class BuheadModule { }
