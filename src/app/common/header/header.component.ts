import { Component, OnInit } from '@angular/core';
import { ICONS } from '../../utils';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})

export class HeaderComponent implements OnInit {
  public iconPath: string = ICONS;

  constructor() {
  }

  ngOnInit() {
  }
}
