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

  changeCellSelectedState = 0;

  showAppCellJson = false;

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

    // Comment this line out when using onPush change detection on cell components
    cellFound.selected = !cellFound.selected;

    // With OnPush detection activated on the cell components you will need to switch the way we change the selected property
    // This is because OnPush change detection requires more than just a change to the property on an object to be considered changed
    // You need to provide a new reference to an object in order for the change detection to trigger, like the below...

    // this.cells = this.cells.map(x => x.id === idx ? {...x, selected: !x.selected} : x);
  }


}
