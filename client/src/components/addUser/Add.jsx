import React from 'react'
import './add.css'
import { Link } from 'react-router-dom'

const Add = () => {
  return (
    <div className='addUser'>
        <Link to={'/'}>Back</Link>
        <h3>Add New User</h3>
        <form className='addForm'>
            <div className='inputGrp'>
                <label htmlFor="firstname">First Name</label>
                <input type="text" id='fname' name='firstname' autoComplete='off' placeholder='First Name' />
            </div>
            <div className='inputGrp'>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id='lname' name='lastname' autoComplete='off' placeholder='Last Name' />
            </div>
            <div className='inputGrp'>
                <label htmlFor="email">Email</label>
                <input type="text" id='email' name='email' autoComplete='off' placeholder='Email' />
            </div>
            <div className='inputGrp'>
                <label htmlFor="password">Password</label>
                <input type="text" id='password' name='password' autoComplete='off' placeholder='Password' />
            </div>
            <div className='inputGrp'>
                <button type='submit'>ADD USER</button>
            </div>
        </form>
    </div>
  )
}

export default Add