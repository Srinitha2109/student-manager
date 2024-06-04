import React from 'react'
import './CoursesEnrolled.css'

function CoursesEnrolled() {
    let student = [
        {sno:1,cid:1234,cname:'Data Science',noofapplicants:10},
        {sno:2,cid:2345,cname:'Machine Learning',noofapplicants:20},
        {sno:3,cid:3456,cname:'Data Analyst',noofapplicants:30},
        {sno:4,cid:4567,cname:'Web Development',noofapplicants:40}
    ]
  return (
    <div>
        <div className='container'>
            <table className='table mt-5 table-hover table-secondary table-responsive table-striped text-center'>
                <thead>
                    <tr>
                        <th className='sno'>Sno</th>
                        <th className='cid'>CID</th>
                        <th className='name'>CName</th>
                        <th className='count'>No of Applicants</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map(obj=><tr key={obj.cid}>
                            <td>{obj.sno}</td>
                            <td>{obj.cid}</td>
                            <td>{obj.cname}</td>
                            <td>{obj.noofapplicants}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default CoursesEnrolled