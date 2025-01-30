import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="ex-1 p-8 transition-all duration-300 ease-in-out">
          <Routes>
            <Route path="/" element={<h1 className="text-2xl font-semibold">Dashboard</h1>} />
            <Route path="/home" element={<h1 className="text-2xl font-semibold">Home</h1>} />
            <Route path="/analytics" element={<h1 className="text-2xl font-semibold">Analytics</h1>} />
            <Route path="/properties" element={<h1 className="text-2xl font-semibold">Properties</h1>} />
            <Route path="/schedule" element={<h1 className="text-2xl font-semibold">Schedule</h1>} />
            <Route path="/settings" element={<h1 className="text-2xl font-semibold">Settings</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;