import React from "react";
import Header from "./MUI Components/Header";
import Footer from "./MUI Components/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./MUI Components/Sidebar";
export default function Root() {
  return (
    <>
      <Header icon={<Sidebar />} />
      <Outlet />
      <Footer />
    </>
  );
}
