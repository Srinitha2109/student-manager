import React from 'react'
import { Outlet } from 'react-router-dom'
import StudentNav from './StudentNav'

function StudentRoot() {
  return (
    <div>
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <StudentNav/>
            <div style={{ flex: 1, padding: "10px" }}>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default StudentRoot