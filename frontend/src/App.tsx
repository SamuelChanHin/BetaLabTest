import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import UserProfilePage from "./pages/UserProfilePage";
import FriendListPage from "./pages/FriendListPage";
import LoginPage from "./pages/LoginPage";
import { useAuth } from "./provider/AuthProvider";
import AppLayout from "./components/Layout/AppLayout";

function App() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <Router>
        <Routes>
          <Route path="/login/*" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/users/*" element={<UserListPage />} />
          <Route path="/user/:userId/*" element={<UserProfilePage />} />
          <Route path="/friends/*" element={<FriendListPage />} />
          <Route path="*" element={<Navigate to="/users" />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
