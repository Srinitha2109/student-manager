import React from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function RegisterStudent() {
    let{register,handleSubmit,formState:{errors}} = useForm();
    let navigate = useNavigate();

    async function handleSubmitButton(obj){
        obj.hasPhoto = "false";
        obj.profilePhoto = "";
        obj.todos = [];
        let res = await axios.post("http://localhost:4000/admin-api/student",obj)
        if(res.data.message === 'Student already exists'){
            console.log(res.data.message);
        }
        else{
            console.log(res.data.message);
            navigate('/admin/new-student');
        }
        console.log(obj);
    }


  return (
    <div className='back mt-5'>
        <div className='container back-1 mt-3'>
            <div className='row'>
                {/* <div className='col-md-6 p-5 d-block m-auto'>
                    <img src={signin_img} alt="image" className='img-fluid rounded'/>
                </div> */}
           
            <div className='col-md-6 p-3 d-block m-auto' >
                <div className='cardheight  p-1'>
            <h4 className='text-center mt-3'>Student Registration</h4>
            <form className="f-1 card shadow w-100 mt-3 p-4 d-block m-auto form" onSubmit={handleSubmit(handleSubmitButton)}>
                <div className='row row-cols-lg-2 gy-2'>
                <div className='mb-2 '>
                    <label htmlFor="name" className="form-label ">Name </label>
                    <input type="text" className="form-control" id="name" {...register('name',{required:true,minLength:4,max:6})}/>
                    {errors.name?.type==='required' && <p className='text-warning mb-0'>please enter first name</p>}

                </div>

                <div className='mb-2'>
                    <label htmlFor="email" className="form-label ">Email </label>
                    <input type="text" className="form-control" id="email" {...register('email',{required:true})}/>
                    {errors.email?.type==='required' && <p className='text-warning mb-0'>please enter email</p>}
                </div>

                <div className='mb-2'>
                    <label htmlFor="rollno" className="form-label ">Roll No </label>
                    <input type="text" className="form-control" id="rollno" {...register('rollno',{required:true})}/>
                    {errors.rollno?.type==='required' && <p className='text-warning mb-0'>please enter roll no</p>}
                </div>

                <div className='mb-2'>
                    <label htmlFor="phone" className="form-label">Phone Number </label>
                    <input type="text" className="form-control " id="phone" {...register('phone',{required:true})}/>
                    {errors.phone?.type==='required' && <p className='text-warning mb-0'>please enter phone number</p>}
                </div>

                <div className='mb-2'>
                    <label htmlFor="dob" className="form-label ">Date Of Birth </label>
                    <input type="date" className="form-control" id="dob" {...register('dob',{required:true})}/>
                    {errors.dob?.type==='required' && <p className='text-warning mb-0'>please enter date of birth</p>}
                </div>

                <div className='mb-2'>
                    <label >Gender </label>

                    <div className='form-check'>
                        <input type="radio" value="male"  id="m" className='form-check-input' {...register('gender',{required:true})}/>
                        <label htmlFor='m' className='form-check-label ' >Male</label>
                    </div> 

                    <div className='form-check'>
                        <input type="radio" value="female" id="f" className='form-check-input' {...register('gender',{required:true})}/>
                        <label htmlFor='f' className='form-check-label '>Female</label>
                    </div>
                    {errors.gender?.type==='required' && <p className='text-warning mb-0'>please select gender</p>} 
                </div>

                <div className='mb-2'>
                    <label htmlFor='course' >Course </label>
                    <select id="course" className='form-select' {...register('course',{required:true})} defaultValue="">
                        <option value="" disabled >Choose Course</option>
                        <option value="IT"> IT</option>
                        <option value=" CSE">  CSE</option>
                        <option value=" ECE"> ECE</option>  
                        <option value=" EEE"> EEE</option>

                    </select>
                    {errors.course && <p className='text-warning mb-0'>This field is required</p>}
                </div>

                <div className='mb-2'>
                    <label htmlFor='section' >Section </label>
                    <select id="section" className='form-select' {...register('section',{required:true})} defaultValue="">
                        <option value="" disabled >Choose section</option>
                        <option value="A">A</option>
                        <option value=" B"> B</option>
                        <option value="C"> C</option>
                        <option value="D"> D</option>
                    </select>
                    {errors.section && <p className='text-warning mb-0'>This field is required</p>}
                </div>

                <div className='mb-2'>
                    <label htmlFor='year' >Year </label>
                    <select id="year" className='form-select' {...register('year',{required:true})} defaultValue="">
                        <option value="" disabled >Choose Course</option>
                        <option value="I"> I</option>
                        <option value=" II">  II</option>
                        <option value=" III"> III</option>  
                        <option value=" IV"> IV</option>

                    </select>
                    {errors.year && <p className='text-warning mb-0'>This field is required</p>}
                </div>

                <div className='mb-2'>
                    <label htmlFor="caste" className="form-label ">Caste </label>
                    <input type="text" className="form-control" id="caste" {...register('caste',{required:true})}/>
                    {errors.caste?.type==='required' && <p className='text-warning mb-0'>please enter caste</p>}
                </div>

                <div className='mb-2'>
                    <label htmlFor="religion" className="form-label ">Religion </label>
                    <input type="text" className="form-control" id="religion" {...register('religion',{required:true})}/>
                    {errors.religion?.type==='required' && <p className='text-warning mb-0'>please enter religion</p>}
                </div>

                <div className='mb-2'>
                    <label htmlFor="pname" className="form-label ">Parent Name </label>
                    <input type="text" className="form-control" id="pname" {...register('parentName',{required:true})}/>
                    {errors.pname?.type==='required' && <p className='text-warning mb-0'>please enter parent name</p>}
                </div>

                <div className='mb-2'>
                    <label htmlFor="pphone" className="form-label">Parent Phone Number </label>
                    <input type="text" className="form-control " id="pphone" {...register('parentPhone',{required:true})}/>
                    {errors.pphone?.type==='required' && <p className='text-warning mb-0'>please enter phone number</p>}
                </div>



                
                <div>
                <label htmlFor='address'>Address </label>
                    <textarea className='form-control' id="address" rows="2" {...register('address',{required:true})}></textarea>
                    {errors.address && <p className='text-warning mb-0'>please give address</p>}
                </div>

                <div >
                <button className='btn btn-primary'>Submit</button>
                </div>
               
                </div>
            </form>
            </div>
            </div>
            </div>
        </div>
        </div>
    );
}
export default RegisterStudent;