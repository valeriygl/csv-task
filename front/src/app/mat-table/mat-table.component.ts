import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

export interface Transaction {
  _id: number;
  cardHolderHash: string;
  datetime: number;
  amount: number;
}

const tableData: Transaction[] = [
  { _id: 1, cardHolderHash: 'asd141', datetime: 2020, amount: 23 },
  { _id: 2, cardHolderHash: 'asd241', datetime: 2021, amount: 23 },
  { _id: 3, cardHolderHash: 'dddd241', datetime: 2031, amount: 23 },
];
@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css'],
})
export class MatTableComponent implements OnInit {
  dataSource = tableData;
  public displayedColumns: string[] = [
    '_id',
    'cardHolderHash',
    'datetime',
    'amount',
    'delete',
  ];

  constructor(private dataService: DataService) {}

  getTotalAmount() {
    return this.dataSource
      .map((data) => data.amount)
      .reduce((acc, val) => acc + val, 0);
  }

  getAverageAmount() {
    return (
      this.dataSource
        .map((data) => data.amount)
        .reduce((acc, val) => acc + val, 0) / this.dataSource.length
    );
  }

  deleteItem(id: number): void {
    this.dataService.sendDeleteRequest(id).subscribe(() => this.ngOnInit());
  }

  ngOnInit(): void {
    this.dataService
      .sendGetRequest()
      .subscribe((data: Transaction[]) => (this.dataSource = data));
  }
}
