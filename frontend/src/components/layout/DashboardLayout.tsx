import { Sidebar } from "./Sidebar";
import { DashboardHeader } from "@/components/ui/DashboardHeader";
import { DashboardFooter } from "@/components/ui/DashboardFooter";
import { semanticColors } from "@/helpers/colors";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div style={styles.app}>
      <Sidebar />

      <div style={styles.page}>
        <DashboardHeader title="Dashboard" />

        <main style={styles.content}>{children}</main>

        <DashboardFooter />
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  app: {
    minHeight: "100vh",
    display: "flex",
    background: semanticColors.background.secondary,
    color: semanticColors.text.primary,
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },

  page: {
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
  },

  content: {
    flex: 1,
    padding: 28,
    overflow: "auto",
  },
};