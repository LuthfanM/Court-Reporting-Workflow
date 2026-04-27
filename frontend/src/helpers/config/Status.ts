import type { JobStatus } from "@/types/common";

export function getJobStatusStyle(status: JobStatus): React.CSSProperties {
  switch (status) {
    case "NEW":
      return {
        background: "#eff6ff",
        color: "#1d4ed8",
        border: "1px solid #bfdbfe",
      };

    case "ASSIGNED":
      return {
        background: "#fefce8",
        color: "#a16207",
        border: "1px solid #fde68a",
      };

    case "TRANSCRIBED":
      return {
        background: "#f5f3ff",
        color: "#6d28d9",
        border: "1px solid #ddd6fe",
      };

    case "REVIEWED":
      return {
        background: "#ecfdf5",
        color: "#047857",
        border: "1px solid #a7f3d0",
      };

    case "COMPLETED":
      return {
        background: "#f3f4f6",
        color: "#374151",
        border: "1px solid #d1d5db",
      };

    default:
      return {
        background: "#f3f4f6",
        color: "#374151",
        border: "1px solid #d1d5db",
      };
  }
}