import React from 'react'
import ViewAnnouncements from '../Components/ViewAnnouncements'
import { Box } from '@mui/material'

function StudentAnnouncements() {
  return (
    <div>
      <Box height={100}/>
        <div className='mt-4'>
          <ViewAnnouncements/>
        </div>
    </div>
  )
}

export default StudentAnnouncements