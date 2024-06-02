import React from 'react'

function MakeAnnouncement() {
  return (
    <div>
        <h3 className='m-3 p-3 d-flex justify-content-center'>Make an Announcement</h3>
        <div className='m-3 p-3 border'>
        <form>
            <label htmlFor="title" className='form-label'>Title:</label>
            <input type="text" id="title" name="title" className='form-control' required />
            <br />
            <label htmlFor="content" className='form-label'>Content:</label>
            <textarea id="content" name="content" className='form-control' required></textarea>
            <button className='btn btn-primary mt-3'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default MakeAnnouncement