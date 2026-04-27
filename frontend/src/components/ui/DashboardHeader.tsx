import { HeaderProfileMenu } from "../views/HeaderProfileMenu";
import { styles } from "./DashboardHeader.styles";

type DashboardHeaderProps = {
  title: string;
};

export function DashboardHeader({ title }: DashboardHeaderProps) {
  return (
    <header style={styles.header}>
      <div>
        <h1 style={styles.title}>{title}</h1>
      </div>

      <HeaderProfileMenu name="Admin" />
    </header>
  );
}