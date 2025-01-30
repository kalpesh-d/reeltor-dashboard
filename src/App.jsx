import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Properties from "./pages/Properties";
import Schedule from "./pages/Schedule";
import Setting from "./pages/Setting";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 transition-all duration-300 ease-in-out ml-24 bg-[#fafafa]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/settings" element={<Setting />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;