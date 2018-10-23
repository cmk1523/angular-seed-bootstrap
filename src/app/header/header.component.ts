import { Component, OnInit } from '@angular/core';
import {User} from '../shared/objects/User';
import {InMemoryDatabase} from '../shared/InMemoryDatabase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User = new User();

  constructor() { }

  ngOnInit() {
    this.user = InMemoryDatabase.users[0];
  }

}
