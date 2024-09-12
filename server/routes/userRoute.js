import express from 'express'
import { create, getAll, getOne } from '../controllers/userController.js'

const route = express.Router()

route.post("/create", create)
route.get("/getall", getAll)
route.get("/getone/:id", getOne)
export default route