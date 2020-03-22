import { Component, Input, OnInit } from '@angular/core';
import { ICONS } from '../../utils';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})

export class ListComponent implements OnInit {
  public iconPath: string = ICONS;
  @Input() public userMode: boolean = true;
  @Input() public list: any[] = [];
  @Input() public loading: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }
}
