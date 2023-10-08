import express from 'express'
import CarsController from '../controllers/customcar.js'

const router = express.Router()

router.get('/', CarsController.getCars)


export default router