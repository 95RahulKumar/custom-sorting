import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { data } from './data';
import { MatSort, Sort } from '@angular/material/sort';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  constructor(private data: DataService, private router: Router) {}
  get sortedheadVal() {
    return this.data.getSortHeaderObj();
  }
  get getActiveHead(): string {
    return this.sort.active;
  }
  ngOnInit() {
    this.dataSource = new MatTableDataSource(data);
    this.sortData(this.sortedheadVal);
    this.sort.active = this.sortedheadVal.active;
    this.sort.direction = this.sortedheadVal.direction;
  }

  sortData(sort: Sort) {
    const tableData = data.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource = new MatTableDataSource(tableData);
      return;
    }
    this.data.setSortHeaderObj(sort);
    const sortdata = tableData.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'position-left':
          return this.compare(a.position, b.position, isAsc);
        case 'position-right':
          return this.compare(a.position, b.position, isAsc);
        case 'name-left':
          return this.compare(a.name, b.name, isAsc);
        case 'name-right':
          return this.compare(a.name, b.name, isAsc);
        case 'weight':
          return this.compare(a.weight, b.weight, isAsc);
        case 'symbol':
          return this.compare(a.symbol, b.symbol, isAsc);
        default:
          return 0;
      }
    });

    this.dataSource = new MatTableDataSource(sortdata);
  }
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  route() {
    this.router.navigateByUrl('/welcome');
  }
}
