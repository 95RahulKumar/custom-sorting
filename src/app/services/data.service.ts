import { Injectable } from '@angular/core';
import { Sort } from '@angular/material/sort';
export interface IsortedHeader {
  active: string;
  direction: string;
}
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  sortedheader: Sort = {
    active: '',
    direction: '',
  };
  setSortHeaderObj(data: Sort) {
    this.sortedheader = {
      ...this.sortedheader,
      active: data.active,
      direction: data.direction,
    };
  }
  getSortHeaderObj() {
    return this.sortedheader;
  }
}
