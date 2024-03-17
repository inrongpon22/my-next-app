"use client";
import React from "react";
import DashboardHeaderWrapper from "@/components/layout/header/DashboardHeaderWrapper";
import SidebarWrapper from "@/components/layout/sidebar/SidebarWrapper";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // const token = localStorage.getItem("token");

  // if (!token) window.location.replace("/auth/login");

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeaderWrapper />
      <div className="flex h-full">
        <SidebarWrapper />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
