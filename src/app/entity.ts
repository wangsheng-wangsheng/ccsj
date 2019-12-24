export class DynamicMenu {
  menusRole: MenusRole;
}
export class MenusRole {
  menus: Menu[];
  role: Role;
}
export class RoleUser {
  role: Role[];
  user: User;
}
export class Menu {
  url: string;
  description: string;
}
export class User {
  id: number;
  name: string;
}
export class UserLogin {
  username: string;
  password: string;
}
export class Role {
  description: string;
  id: number;
}
export class Response {
  data: JSON;
  message: string;
}
