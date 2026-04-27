import type { Editor, Reporter } from "../../types/common";
import { semanticColors } from "@/helpers/colors";
import {styles} from "./TeamStatusAvailability.styles";

type TeamStatusAvailabilityProps = {
  reporters: Reporter[];
  editors: Editor[];
};

export function TeamStatusAvailability({ reporters, editors }: TeamStatusAvailabilityProps) {
  return (
    <section style={styles.panel}>
      <h2 style={styles.title}>Team Availability</h2>

      <div style={styles.group}>
        <h3 style={styles.groupTitle}>Reporters</h3>

        <ul style={styles.list}>
          {reporters.map((reporter) => (
            <li key={reporter.id} style={styles.item}>
              <span>
                {reporter.name}
                <small style={styles.meta}> · {reporter.location}</small>
              </span>

              <Status available={reporter.isAvailable} />
            </li>
          ))}
        </ul>
      </div>

      <div style={styles.group}>
        <h3 style={styles.groupTitle}>Editors</h3>

        <ul style={styles.list}>
          {editors.map((editor) => (
            <li key={editor.id} style={styles.item}>
              <span>{editor.name}</span>
              <Status available={editor.isAvailable} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Status({ available }: { available: boolean }) {
  return (
    <span
      style={{
        ...styles.badge,
        background: available ? semanticColors.status.successBg : semanticColors.status.errorBg,
        color: available ? semanticColors.status.success : semanticColors.status.error,
      }}
    >
      {available ? "Available" : "Unavailable"}
    </span>
  );
}

