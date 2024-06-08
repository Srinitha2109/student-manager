import React from 'react'
import './TeacherDetails.css'
import teacher from '../Assets/teacher.jpg';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function TeacherDetails() {

    let {currentUser, userType} = useSelector(state => state.allUserLoginReducer)
    let user;
    let {state} = useLocation();
    if(userType === "admin"){
        user = state;
    }
    else{
        user = currentUser;
    }

    
    
        // const coord = {
        //     name: "abhinav",
        //     email: "abhinavsai.janipireddy@gmail.com",
        //     rollno: "22071A1227",
        //     phone: "7396732009",
        //     gender: "male",
        //     dob: "2004-05-25",
        //     address: "01-073/315, Veenus Enclave, Gajularamaram, Hyderabad",
        //     course: "IT",
        //     yearOfJoin: "2020",
        //     designation: "Assistant Professor",
        //     qualification: "Btech, Mtech, Phd",
        // }

  return (
    <>
    <Box height={100}/>
    <div className='bg-secondary p-3 mt-4'>
        <div className=' parent row-cols-sm-1'>
            <div className='me-3 p-2 bg-white'>
                <div className='justify-content-center text-center d-flex '>
                    <img className='img mx-auto' src={teacher} alt="" />
                </div>
                <div className='mt-3'>
                    <h4 className='text-center'>{user.name.toUpperCase()}</h4>
                    <h5 className='text-center'>{user.designation}</h5>
                </div>
            </div>
            <div className='p-2 bg-white '>
                <table className='table table-hover'>
                    <tbody>
                    <tr>
                        <td>Roll No:</td>
                        <td>{user.rollno}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>{user.phone}</td>
                    </tr>
                    <tr>
                        <td>Date of birth:</td>
                        <td>{user.dob}</td>
                    </tr>
                    <tr>
                        <td>Qualification:</td>
                        <td>{user.qualification}</td>
                    </tr>
                    <tr>
                        <td>Gender:</td>
                        <td>{user.gender}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='p-2 bg-white mt-2'>
            <p className='mb-0'>Address: {user.address}</p>
        </div>
    </div>
    </>
  )
}

export default TeacherDetails