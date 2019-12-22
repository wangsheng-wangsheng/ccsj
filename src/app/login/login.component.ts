import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  private uname: string;
  private password: string;
  constructor(private router: Router) { }
  ngOnInit() { // 组件被创建
  }
  // login(un: string, up: string) { // 登录跳转页面
  //   this.uname = un;
  //   this.password = up;
  //   this.loginService.checkUser({username: this.uname, password: this.password})
  //     .subscribe((res) => {
  //       if (res.username) {
  //         window.localStorage.setItem('userName', res.username);
  //         this.router.navigateByUrl('/index/college');
  //       } else {
  //         alert(res.message);
  //       }
  //     });
  // }

}
