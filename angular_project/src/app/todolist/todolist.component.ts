import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  linkActive: string = 'link_active';
  linkActive2: string = '';

  constructor() {}

  ngOnInit(): void {}

  changeAStyle(): void {
    this.linkActive = this.linkActive === '' ? 'link_active' : '';
    this.linkActive2 = this.linkActive2 === 'link_active' ? '' : 'link_active';
  }
}
