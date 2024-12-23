export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Замініть наступний код на версію за допомогою Record

type UserRoleList = Record<UserRole, string>;

const RoleDescription: UserRoleList = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
