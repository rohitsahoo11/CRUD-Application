import React, { useState } from 'react'
import './add.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Add = () => {

    const users = {
        firstname:"",
        lastname:"",
        email:"",
        password:""
    }
    const [user, setUser] = useState(users)
    const navigate = useNavigate()

    const inputHandler = (e)=>{
        const {name,value} = e.target
        setUser({...user,[name]:value})
    }

    const submitForm = async(e)=>{
        e.preventDefault()
        await axios.post('http://localhost:8000/api/create',user)
        .then((response)=>{
            toast.success(response.data.msg, {position: "top-right"})
            navigate('/')
        })
        .catch(error=>console.log(error))
    }

  return (
    <div className='addUser'>
        <Link to={'/'} className='link'><i class="fa-solid fa-arrow-left"></i></Link>
        <h3>Add New User</h3>
        <form className='addForm' onSubmit={submitForm}>
            <div className='inputGrp'>
                <label htmlFor="firstname">First Name</label>
                <input type="text" onChange={inputHandler} id='fname' name='firstname' autoComplete='off' placeholder='First Name' />
            </div>
            <div className='inputGrp'>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" onChange={inputHandler} id='lname' name='lastname' autoComplete='off' placeholder='Last Name' />
            </div>
            <div className='inputGrp'>
                <label htmlFor="email">Email</label>
                <input type="text" onChange={inputHandler} id='email' name='email' autoComplete='off' placeholder='Email' />
            </div>
            <div className='inputGrp'>
                <label htmlFor="password">Password</label>
                <input type="text" onChange={inputHandler} id='password' name='password' autoComplete='off' placeholder='Password' />
            </div>
            <div className='inputGrp'>
                <button type='submit'>ADD USER</button>
            </div>
        </form>
    </div> 
  )
}

export default Add