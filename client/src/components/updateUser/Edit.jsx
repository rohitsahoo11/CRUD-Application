import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import '../addUser/add.css'
import axios from 'axios'
import toast from 'react-hot-toast'

const Edit = () => {

    const users = {
        firstname: "",
        lastname: "",
        email:""
    }

    const navigate = useNavigate()
    const [user, setUser] = useState(users)
    const {id} = useParams()
    const inputChangeHandler = (e)=>{
        const {name,value} = e.target
        setUser({...user, [name]:value})
        //console.log(user)
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getone/${id}`)
        .then((response)=>{
            setUser(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[id])

    const submitForm = async(e)=>{
        e.preventDefault()
        await axios.put(`http://localhost:8000/api/update/${id}`,user)
        .then((response)=>{
            toast.success(response.data.msg, {position:'top-right'})
            navigate('/')
        })
        .catch(error=> console.log(error))
    }

  return (
    <div className='addUser'>
        <Link to={'/'} className='link'><i class="fa-solid fa-arrow-left"></i></Link>
        <h3>Update User</h3>
        <form className='addForm' onSubmit={submitForm}>
            <div className='inputGrp'>
                <label htmlFor="firstname">First Name</label>
                <input type="text" value={user.firstname} onChange={inputChangeHandler} id='fname' name='firstname' autoComplete='off' placeholder='First Name' />
            </div>
            <div className='inputGrp'>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" value={user.lastname} onChange={inputChangeHandler} id='lname' name='lastname' autoComplete='off' placeholder='Last Name' />
            </div>
            <div className='inputGrp'>
                <label htmlFor="email">Email</label>
                <input type="text" value={user.email} onChange={inputChangeHandler} id='email' name='email' autoComplete='off' placeholder='Email' />
            </div>
            <div className='inputGrp'>
                <button type='submit'>UPDATE USER</button>
            </div>
        </form>
    </div>
  )
}

export default Edit