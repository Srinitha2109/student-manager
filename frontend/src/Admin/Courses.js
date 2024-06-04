import React from 'react'
import Box from '@mui/material/Box';
import AddCourses from './AddCourses';
import CoursesEnrolled from './CoursesEnrolled';


function Courses() {
  return (
    <>
    <Box height={100}/>
      <div>
        <AddCourses/>
      </div>
      <div>
        <CoursesEnrolled/>
      </div>
    </>
    
  )
}

export default Courses