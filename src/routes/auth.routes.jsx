import { Routes, Route, Navigate } from "react-router-dom";

import { SingIn } from "../pages/SingIn";
import { SingUp } from "../pages/SingUp";

export function AuthRoutes() {
  // eslint-disable-next-line no-unused-vars
  const user = localStorage.getItem("rocketNotes:user");

  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/register" element={<SingUp />} />
      {!user && <Route path="*" element={<Navigate to="/" />} />}
    </Routes>
  );
}
