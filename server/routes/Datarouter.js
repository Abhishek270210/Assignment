import express from 'express'
import {getData,postData,getFilteredData} from '../controllers/Datacontroller.js'
import ageValidation from '../middleware/age.js';

const router=express.Router();

router.get('/',getData);

router.post('/',ageValidation,postData);

router.post('/filterbycity',getFilteredData);

export default router