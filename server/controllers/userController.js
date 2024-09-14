// All api are in the controller folder

import User from '../models/userModel.js'

// POST code
export const create = async(req,res)=>{
    try {
        const userData = new User(req.body)

        if(!userData){
            return res.status(404).json({msg: 'User data not found'})
        }

        const savedData = await userData.save()
        res.status(200).json({
            msg: 'User Created Successfully',
            user: savedData
        })

    } catch (error) {
        res.status(500).json({error: error})
    }
}
// POST code End


// GET code
export const getAll = async(req,res)=>{
    try {
        const userData = await User.find()
        if(!userData){
            return res.status(404).json({msg:"Users not found"})
        }
        res.status(200).json(userData)

    } catch (error) {
        res.status(500).json({error:error})
    }
}
// GET code End

// GET One user
export const getOne = async(req,res)=>{
    try {
        const id = req.params.id
        const userExist = await User.findById(id)
        if(!userExist){
            res.status(404).json({msg:"User not found"})
        }
        res.status(200).json(userExist)
    } catch (error) {
        res.status(500).json({error: error})
    }
}
// GET One user End

//PUT request
export const update = async(req,res)=>{
    try {
        const id = req.params.id
        const userExist = await User.findById(id)
        if(!userExist){
            res.status(404).json({msg:"User not found!"})
        }
        const updatedData = await User.findByIdAndUpdate(id, req.body, {new: true})
        res.status(200).json({
            msg: "User updated successfully",
            user: updatedData
        })
    } catch (error) {
        res.status(500).json({error: error})
    }
}
// PUT END

// DELETE request
export const deleteUser = async(req,res)=>{
    try {
        const id = req.params.id
        const userExist = await User.findById(id)
        if(!userExist){
            res.status(404).json({msg:"User not found"})
        }
        await User.findByIdAndDelete(id)
        res.status(200).json({msg:"User deleted successfully"})
    } catch (error) {
        res.status(500).json({error:error})
    }
}