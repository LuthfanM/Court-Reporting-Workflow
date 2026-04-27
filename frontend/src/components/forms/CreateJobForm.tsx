import { styles } from "./CreateJobForm.styles";

type CreateJobFormProps = {
  caseName: string;
  duration: number;
  location: string;
  jobLocation: "PHYSICAL" | "REMOTE";
  onCaseNameChange: (value: string) => void;
  onDurationChange: (value: number) => void;
  onLocationChange: (value: string) => void;
  onJobLocationChange: (value: "PHYSICAL" | "REMOTE") => void;
  onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
};

type FormFieldProps = {
  label: string;
  children: React.ReactNode;
};

function FormField({ label, children }: FormFieldProps) {
  return (
    <div style={styles.fieldRow}>
      <label style={styles.label}>{label}</label>
      <div style={styles.fieldControl}>{children}</div>
    </div>
  );
}

export function CreateJobForm({
  caseName,
  duration,
  location,
  jobLocation,
  onCaseNameChange,
  onDurationChange,
  onLocationChange,
  onJobLocationChange,
  onSubmit,
}: CreateJobFormProps) {
  return (
    <section style={styles.panel}>
      <div style={styles.header}>
        <h2 style={styles.title}>Create Job</h2>
        <p style={styles.subtitle}>
          Add a new court reporting job and choose whether it is physical or
          remote.
        </p>
      </div>

      <form onSubmit={onSubmit} style={styles.form}>
        <FormField label="Case Name">
          <input
            style={styles.input}
            value={caseName}
            onChange={(e) => onCaseNameChange(e.target.value)}
            placeholder="Example: Check Warehouse"
            required
          />
        </FormField>

        <FormField label="Duration (Minutes)">
          <input
            style={styles.input}
            type="number"
            min={1}
            value={duration}
            onChange={(e) => onDurationChange(Number(e.target.value))}
            placeholder="Example: 60"
            required
          />
        </FormField>

        <FormField label="Location">
          <input
            style={styles.input}
            value={location}
            onChange={(e) => onLocationChange(e.target.value)}
            placeholder="Example: Jakarta"
            required
          />
        </FormField>

        <FormField label="Type">
          <select
            style={styles.input}
            value={jobLocation}
            onChange={(e) =>
              onJobLocationChange(e.target.value as "PHYSICAL" | "REMOTE")
            }
          >
            <option value="PHYSICAL">Physical</option>
            <option value="REMOTE">Remote</option>
          </select>
        </FormField>

        <div style={styles.actions}>
          <button style={styles.button} type="submit">
            Create Job
          </button>
        </div>
      </form>
    </section>
  );
}

