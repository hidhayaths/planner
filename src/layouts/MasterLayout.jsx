import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MasterLayout = () => {
  return (
    <>
      <Navbar />
      <main
        style={{
          position: "relative",
          minHeight: "calc(100vh - 150px)",
          paddingTop: 75,
        }}
      >
        <Outlet />
      </main>
    </>
  );
};

export default MasterLayout;
