import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sort-dropdown',
  templateUrl: './sort-dropdown.component.html',
  styleUrls: ['./sort-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SortDropdownComponent implements OnInit {
  selected: string = 'Best';

  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.change.emit(this.selected);
  }

  onChange() {
    this.change.emit(this.selected);
  }
}
