import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import './Login.css'
import admin from '../Assets/admin.jpg'
import coord from '../Assets/teacher.jpg'
import student from '../Assets/student.jpg'
import book from '../Assets/book.jpg'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLoginThunk } from '../Redux/Slices/userLoginSlice'


function Login() {
  let navigate = useNavigate();
  let{register,handleSubmit,formState:{errors}} = useForm();
  let dispatch = useDispatch();
  let {loginStatus,currentUser, userType} = useSelector(state => state.allUserLoginReducer)

  const handleSubmitButton = (data) => {
    console.log(data);
    dispatch(userLoginThunk(data));
  }

  useEffect(()=>{
      if(loginStatus){
        if(userType==='coord'){
          navigate('coord')
        }
        else if(userType==='admin'){
          navigate('admin')
        }
        else if(userType==='student'){
            navigate('student')
          }
      }
  },[loginStatus])

 

    return (
      <div login-container>
        <img  src={book} className="background-image"/>
        <form className='m-auto bg-white login-form w-50 mt-5 border border-3 p-4' onSubmit={handleSubmit(handleSubmitButton)} >

          <div>
          <label htmlFor=" login" className='form-label mb-4  '>Login as</label>
          <div className='form-check form-check-inline'>
            <input type="radio" className='form-check-input ' id="coord" value="coord" {...register("userType")}/>
            <label htmlFor="coord" className='form-check-label '>
            <div className=" p-2">
            <img src={coord} width="80px" height="80px" className="d-block teacher_img m-auto" alt='teacher image'/>
          <div>
          <h6 className="text-center">Coordinator</h6>
          </div>
        </div>
            </label>
          </div>


          <div className='form-check form-check-inline'>
            <input type="radio" className='form-check-input' id="student" value="student" {...register("userType")}/>
            <label htmlFor="student" className='form-check-label'>
            <div className=" p-2">
            <img src={student} width="80px" height="80px" className=" student_img " alt='student image'/>
          <div>
          <h6 className="text-center">Student</h6>
          </div>
        </div>
            </label>
          </div>

          <div className='form-check form-check-inline'>
            <input type="radio" className='form-check-input' id="admin" value="admin" {...register("userType")}/>
            <label htmlFor="admin" className='form-check-label'>
            <div className=" p-2">
            <img src={admin} width="80px" height="80px" className=" admin_img " alt='admin img'/>
          <div>
          <h6 className="text-center">Admin</h6>
          </div>
        </div>
            </label>
          </div>
          </div>

          
          <div className='mb-3'>
            <label htmlFor=" email" className='form-label mb-2'>Email ID</label>
            <input type='email' id="email" className='form-control ' {...register("email",{required:true})}></input>
            {errors.username?.type==='required' && <p className='text-danger'>please enter email ID</p>}
          </div>
        
        <div className='mb-3'>
        <label htmlFor=" password" className='form-label'>Password</label>
          <input type='password' id="password" className='form-control'  {...register("password",{required:true})}></input>
          {errors.password?.type==='required' && <p className='text-danger'>please enter password</p>}
        </div>
  
        <button className='btn btn-primary mt-2 w-25 d-block m-auto'>Login</button>
        </form>
        
      </div>
    )
}

export default Login;