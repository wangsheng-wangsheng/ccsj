import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Role, RoleUser} from '../entity';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  private uname: string;
  private password: string;
  roleUser: RoleUser;

  constructor(private router: Router, private loginService: UserService) {
  }

  ngOnInit() { // 组件被创建
  }

  login(un: string, up: string) { // 登录跳转页面
    this.uname = un;
    this.password = up;
    if (this.uname === '' || this.password === '') {
      alert('请输入账号或密码');
    } else {
      // 向后台获取角色和用
      this.loginService.login({username: this.uname, password: this.password}).subscribe(
        res => {
          if (!res ) {
            this.router.navigateByUrl('index/abc');
          } else {
            alert(res.message);
          }
        }
      );
    }
  }
}
      // for (const i of this.roleUser.role) {
      //   if (i.description) {
      //     if (i.description === '超级管理员') {
      //       this.router.navigateByUrl('superAdmin');
      //       break;
      //     } else {
      //       this.router.navigateByUrl('index/abc');
      //       break;
      //     }
      //   } else {
      //     alert('账号或密码输入错误!');
      //     break;
      //   }
      // }
