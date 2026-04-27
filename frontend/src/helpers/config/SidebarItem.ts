import {
  LayoutDashboard,
  BriefcaseBusiness,
  UserCheck,
  CircleCheckBig,
} from "lucide-react";

export type SidebarItem = {
  label: string;
  path: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
};

export const sidebarItems: SidebarItem[] = [
  {
    label: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Jobs",
    path: "/jobs",
    icon: BriefcaseBusiness,
  },
  {
    label: "Assignments",
    path: "/assignments",
    icon: UserCheck,
  },
  {
    label: "Payments",
    path: "/payments",
    icon: CircleCheckBig,
  },
];
