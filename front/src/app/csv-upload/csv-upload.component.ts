import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { DataService } from '../data.service';

@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.css'],
})
export class CsvUploadComponent implements OnInit {
  constructor(private papa: Papa, private dataService: DataService) {}
  @Output() updateView = new EventEmitter();
  test: {}[] = [];

  ngOnInit(): void {}

  uploadToStorage() {
    this.dataService
      .sendPostRequest(JSON.stringify(this.test))
      .subscribe(() => this.updateView.emit());
  }

  handleFileSelect(evt: any) {
    const files = evt.target.files;
    const file = files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event: any) => {
      const csv = event.target.result;
      this.papa.parse(csv, {
        skipEmptyLines: true,
        header: true,
        complete: (results) => {
          // tslint:disable-next-line: prefer-for-of
          for (let i = 0; i < results.data.length; i++) {
            const transaction = {
              _id: results.data[i]._id,
              cardHolderHash: results.data[i].cardHolderHash,
              datetime: results.data[i].datetime,
              amount: results.data[i].amount,
            };
            this.test.push(transaction);
          }
          console.log(JSON.stringify(this.test));
        },
      });
    };
  }
}
