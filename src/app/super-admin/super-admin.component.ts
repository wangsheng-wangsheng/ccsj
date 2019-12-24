import { Component, OnInit } from '@angular/core';

import {UserService} from '../user.service';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {
  name: string;

  constructor(private superAdminService: UserService) { }

  ngOnInit() {
  }

}
