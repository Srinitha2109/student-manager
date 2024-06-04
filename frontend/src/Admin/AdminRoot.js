import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNav from './AdminNav'

function AdminRoot() {
  return (
    <div>
      <div style={{ display: "flex", minHeight: "100vh" }}>
            <AdminNav/>
            <div style={{ flex: 1, padding: "10px" }}>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default AdminRoot