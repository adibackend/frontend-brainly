import { Dashboard } from "@/pages/Dashboard";
import AuthForms from "./pages/AuthForms";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/signup"
          element={
            <div className="flex justify-center items-center h-screen">
              <AuthForms initialTab="signup" />
            </div>
          }
        />
        <Route
          path="/signin"
          element={
            <div className="flex justify-center items-center h-screen">
              <AuthForms initialTab="login" />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
