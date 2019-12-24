import { Component, OnInit } from '@angular/core';
import {DynamicMenu} from '../entity';
import {UserService} from '../user.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  show = -1;
  controller = '展开';
  dynamicMenus: DynamicMenu[];
  name: string;
  constructor(private indexService: UserService) { }
  ngOnInit() {
    this.getMenus();
  }
  getMenus() {
    this.dynamicMenus = [
      {
        menusRole: {
          menus: [
            {
              url: 'superAdmin',
              description: '权限设置'
            }
          ],
          role: {
            id: 1,
            description: '超级管理员'
          }
        }
      }
    ];
  }
  exchange() {
    if (this.controller === '展开') {
      this.controller = '收起';
    } else {
      this.controller = '展开';
    }
  }

}

// {
//   menusRole: {
//     menus: [
//       {
//         url: 'abc',
//         description: '部门管理'
//       },
//       {
//         url: 'superAdmin',
//         description: '职务管理'
//       }
//     ],
//       role: {
//       id: 1,
//         description: '管理员'
//     }
//   }
// },
// {
//   menusRole: {
//     menus: [
//       {
//         url: 'efg',
//         description: '个人信息管理'
//       }
//     ],
//       role: {
//       id: 1,
//         description: '员工'
//     }
//   }
// }
// ];
