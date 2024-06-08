import React from 'react'
import Box  from '@mui/material/Box'
import { useSelector } from 'react-redux'
import AddCourses from './AddCourses'

function AdminProfile() {
  let {currentUser} = useSelector(state => state.allUserLoginReducer)
  console.log("Working")

  return (
        <div className='mx-auto'>
          <h6 className='text-center text-dark'>Name: {currentUser.name}</h6>
          <h6 className='text-center text-dark'>Email: {currentUser.email}</h6>
        </div>
  )
}

export default AdminProfile