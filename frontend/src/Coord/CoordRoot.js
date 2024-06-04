import React from 'react'
import { Outlet } from "react-router-dom";
import CoordNav from "./CoordNav";

function CoordRoot() {
  return (
    <div>
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <CoordNav />
            <div style={{ flex: 1, padding: "10px" }}>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default CoordRoot