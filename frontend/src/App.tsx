import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Routes, Route } from "react-router-dom";
import { StatusPage } from "./pages/StatusPage";
import { AssignmentsPage } from "./pages/AssigmentsPage";
import { JobsPage } from "./pages/JobsPage";
import { DashboardPage } from "./pages/DashboardPage";
import { PaymentsPage } from "./pages/PaymentsPage";

function App() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/assignments" element={<AssignmentsPage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/payments" element={<PaymentsPage />} />
      </Routes>
    </DashboardLayout>
  );
}

export default App;
