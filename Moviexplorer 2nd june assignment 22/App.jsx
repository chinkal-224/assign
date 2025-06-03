import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UpcomingMovies from "./pages/UpcomingMovies";

function App() {
  return (
    <Router>
      <Routes>

        {/* Home Route with Link to Upcoming Movies */}
        <Route
          path="/"
          element={
            <div className="p-4">
              <h1 className="text-2xl font-bold mb-4">Welcome to Movie Explorer</h1>
              <Link to="/movies/upcoming" className="text-blue-500 underline">
                Go to Upcoming Movies →
              </Link>
            </div>
          }
        />

        {/* Upcoming Movies Route */}
        <Route path="/movies/upcoming" element={<UpcomingMovies />} />

        {/* Fallback for Invalid Routes */}
        <Route path="*" element={<p className="p-4">Page Not Found</p>} />
      </Routes>
    </Router>
  );
}

export default App;
