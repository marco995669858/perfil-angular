import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import * as fromComponents from './components';

@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    FileUploadModule,
    DropdownModule,
    InputTextareaModule
  ],
  declarations: [...fromComponents.components],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    FileUploadModule,
    DropdownModule,
    InputTextareaModule,
    ...fromComponents.components
  ],
  bootstrap:[]
})
export class SharedModule { }
