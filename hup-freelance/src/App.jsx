import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Orders from "./pages/Orders";
import Payments from "./pages/Payments";
import Reports from "./pages/Reports";
import Reviews from "./pages/Reviews";
import Statistics from "./pages/Statistics";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/users" element={<Users />} />

      <Route path="/services" element={<Services />} />

      <Route path="/projects" element={<Projects />} />

      <Route path="/orders" element={<Orders />} />

      <Route path="/payments" element={<Payments />} />

      <Route path="/reports" element={<Reports />} />

      <Route path="/reviews" element={<Reviews />} />

      <Route path="/statistics" element={<Statistics />} />

      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;