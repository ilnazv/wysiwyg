import { Component, OnInit } from '@angular/core';

export class Cell {
  value?: string;
  color?: string;
  constructor(public id: number) { }
}

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  public cells: Cell[] = [];

  constructor() {
    this.reload();
  }

  ngOnInit() {
  }

  reload() {
    this.cells = [];
    for (let index = 0; index < 50; index++) {
      this.cells.push(new Cell(index));
    }
  }

}
