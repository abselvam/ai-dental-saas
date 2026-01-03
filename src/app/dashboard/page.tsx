import Navbar from "@/components/Navbar";
import { SignOutButton } from "@clerk/nextjs";
import React from "react";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <h1>Dashboard</h1>
      <SignOutButton />
    </div>
  );
}

export default Dashboard;
