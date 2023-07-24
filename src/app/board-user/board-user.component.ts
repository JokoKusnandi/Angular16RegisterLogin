import { Component } from '@angular/core';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent {
  id?: string;
  username?: string;
  password?: string;
  email?: string;
  token?: string;
}
