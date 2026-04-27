export type HeaderMenuItem = {
  label: string;
  value: string;
  onClick?: () => void;
};

export const headerProfileMenuItems: HeaderMenuItem[] = [
  {
    label: "Profile",
    value: "profile",
  },
  {
    label: "Log out",
    value: "logout",
  },
];