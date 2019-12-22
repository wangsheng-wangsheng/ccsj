import { Component, OnInit } from '@angular/core';
import {Menu} from '../entity';
import {UserService} from '../user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  menus: Menu[] = [{description: '部门管理', rooting: 'department'}, {description: '职位管理', rooting: 'job'}];
  constructor() { }
  ngOnInit() {
  }

}
