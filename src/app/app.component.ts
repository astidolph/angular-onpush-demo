import { Component } from '@angular/core';
import { Cell } from './models/cell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cells: Cell[] = [];

  numCells = 5;

  constructor() {
    this.createCells(5);
  }

  createCells(numCells: number) {
    this.cells = [];

    for (let i = 0; i <= numCells; i++) {
      this.cells.push({
        id: i,
        selected: false
      });
    }
  }

  selectCell(idx: number) {
    const cellFound = this.cells.find(x => x.id === idx);

    if (!cellFound) {
      console.log('Cell not found');
    }

    cellFound.selected = !cellFound.selected;
  }


}
