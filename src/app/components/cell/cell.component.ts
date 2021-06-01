import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Cell } from 'src/app/models/cell';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent {

  @Input() cell = new Cell();

  @Output() emitSelectedEvent = new EventEmitter<number>();

  constructor() { }

  emitSelected(id: number) {
    this.emitSelectedEvent.next(id);
  }

  dummyFire() {
    console.log(`cell ${this.cell.id} change detection fired`);
  }

}
