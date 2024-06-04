import React from 'react'
import './StudentDetails.css'
import StudentPic from '../Assets/student.jpg'
import { useLocation } from 'react-router-dom'
import Box from '@mui/material/Box';

function StudentDetails() {

    let {state} = useLocation();

    // let student = {
    //     name: "Abhinav",
    //     email: "abhinavsai.janipireddy@gmail.com",
    //     rollno: "22071A1201",
    //     phone: "1234567890",
    //     gender: "male",
    //     dob: "2004-10-21",
    //     address: "test address",
    //     course: "IT",
    //     section: "A",
    //     year: "2022",
    //     caste: "Peraka",
    //     religion: "Muslim",
    //     parentName: "Allam Nagaraju",
    //     parentPhone: "1234567890"
    // }

  return (
    <>
    <Box height={100}></Box>
    <div className='bg-secondary p-3 mt-3'>
        <div className=' parent row-cols-sm-1'>
            <div className='me-3  bg-white'>
                <div className='justify-content-center text-center d-flex '>
                    <img className='img mx-auto mt-3' src={StudentPic} alt="" />
                </div>
                <div className='mt-3'>
                    <h4 className='text-center'>{state.name.toUpperCase()}</h4>
                    <h5 className='text-center'>{state.course}-{state.section} {state.year}</h5>
                </div>
            </div>
            <div className='p-2 bg-white '>
                <table className='table table-hover'>
                    <tbody>
                    <tr>
                        <td>Roll No:</td>
                        <td>{state.rollno}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{state.email}</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>{state.phone}</td>
                    </tr>
                    <tr>
                        <td>Date of birth:</td>
                        <td>{state.dob}</td>
                    </tr>
                    {/* <tr>
                        <td>Qualification:</td>
                        <td>{student.qualification}</td>
                    </tr> */}
                    <tr>
                        <td>Gender:</td>
                        <td>{state.gender}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='p-2 bg-white mt-2'>
            <p className=''>Address: {state.address}</p>
            <div className='d-flex'>
                <p className='me-5'>Caste: {state.caste}</p>
                <p className=''>Religion: {state.religion}</p>
            </div>
            
            <p className=''>Parent Name: {state.parentName}</p>
            <p className='mb-0'>Parent Phone: {state.parentPhone}</p>
        </div>
    </div>
    </>
  )
}

export default StudentDetails