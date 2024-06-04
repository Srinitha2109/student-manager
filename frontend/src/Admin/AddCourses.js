import React from 'react'
import { useForm } from 'react-hook-form'
import './AddCourses.css' 

function AddCourses() {
    let {register, handleSubmit} = useForm();

    function handleFormSubmit(data) {
      
      console.log(data);
    }
    return (
      <div className='me-2'>
        <h3 className='text-center'>Add Course</h3>
          <form className=' w-100 mt-3 border border-2 rounded-2 p-3 ' onSubmit={handleSubmit(handleFormSubmit)} >
            <div >
              <label htmlFor=" courseId" className='form-label fs-5 '>Course ID</label>
              <input type='text' id="courseId" className='form-control mb-2' {...register("courseId")}></input>
            </div>

            <div >
              <label htmlFor=" courseName" className='form-label fs-5 '>Course Name</label>
              <input type='text' id="courseName" className='form-control mb-2' {...register("courseName")}></input>
            </div>

            <div className='col-lg-12'>
                        <label htmlFor="branch" className='form-label fs-5'>Branch</label>
                        <select id="branch" name="branch" className='form-select' {...register("branch")}>
                            <option value="CSE" >CSE</option>
                            <option value="IT"  >IT</option>
                            <option value="ECE" >ECE</option>
                            <option value="EEE" >EEE</option>
                            <option value="MECH">MECH</option>
                            <option value="CIVIL">CIVIL</option>
                        </select>
                    </div>
          
            <div >
              <label htmlFor='description' className='form-label fs-5'>Description</label>
              <textarea className='form-control mb-3' id='description' rows="3" {...register("description")}></textarea>
            </div>
  
            <div>
              <button type='submit' className='btn btn-success '>Add</button>
            </div>
  
          </form>
          
        </div>
    )
  }

export default AddCourses