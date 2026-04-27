export type JobStatus =
  | "NEW"
  | "ASSIGNED"
  | "TRANSCRIBED"
  | "REVIEWED"
  | "COMPLETED";

export type JobLocation = "PHYSICAL" | "REMOTE";

export type Job = {
  id: string;
  caseName: string;
  duration: number;
  location: string;
  jobLocation: JobLocation;
  status: JobStatus;
  reporter?: Reporter | null;
  editor?: Editor | null;
  createdAt?: string;
  updatedAt?: string;
};

export type Reporter = {
  id: string;
  name: string;
  location: string;
  isAvailable: boolean;
};

export type Editor = {
  id: string;
  name: string;
  isAvailable: boolean;
};


export type CurrentMonthTotalResponse = {
  month: number;
  year: number;
  totalJobs: number;
  totalAmount: number;
};