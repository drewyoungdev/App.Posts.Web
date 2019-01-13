import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'sort-dropdown',
  templateUrl: './sort-dropdown.component.html',
  styleUrls: ['./sort-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SortDropdownComponent implements OnInit {
  selected: string = environment.defaultSortType;

  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.change.emit(this.selected);
  }
}
