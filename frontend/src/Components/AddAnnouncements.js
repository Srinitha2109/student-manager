import React from 'react'
import { useForm } from 'react-hook-form';
import './AddAnnouncements.css'

function AddAnnouncements() {
  let {register, handleSubmit} = useForm();

  function handleFormSubmit(data) {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();
    const announcementData = {
        title: data.title,
        content: data.content,
        date: formattedDate,
        username: "srinitha"
    };
    console.log(announcementData);
  }
  return (
    <div className='me-2'>
      <h3 className='text-center'>Add Announcement</h3>
        <form className='add-form  mt-3 border border-2 rounded-2 p-3 ' onSubmit={handleSubmit(handleFormSubmit)} >
          <div >
            <label htmlFor=" title" className='form-label fs-3 mb-1'>Title</label>
            <input type='text' id="title" className='form-control' {...register("title")}></input>
          </div>
        
          <div >
            <label htmlFor='content' className='form-label fs-3'>Content</label>
            <textarea className='form-control mb-3' id='content' rows="3" {...register("content")}></textarea>
          </div>

          <div>
            <button type='submit' className='btn btn-success '>Add</button>
          </div>

        </form>
        
      </div>
  )
}

export default AddAnnouncements