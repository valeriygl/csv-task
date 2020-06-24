import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { CsvUploadComponent } from './csv-upload/csv-upload.component';
import { PapaParseModule } from 'ngx-papaparse';

@NgModule({
  declarations: [AppComponent, MatTableComponent, CsvUploadComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatTableModule,
    HttpClientModule,
    PapaParseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
