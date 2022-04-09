import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

export default function RoutesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Suspense>
  );
}
