import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/dashboard-page/Dashboard";
import Users from "./pages/users-page/Users";
import TestCodes from "./pages/test-codes-page/TestCodes";
import TestResults from "./pages/test-result-page/TestResults";
import Questions from "./pages/questions-page/Questions";
import OralTestSlot from "./pages/oral-test-slot-page/OralTestSlot";
import Settings from "./pages/settings-page/Settings";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/test-codes" element={<TestCodes />} />
          <Route path="/test-results" element={<TestResults />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/oral-test-slot" element={<OralTestSlot />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
