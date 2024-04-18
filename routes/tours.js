import express from 'express'
import { createTour, deleteTour, updateTour, getSingleTour,getTourCount, getAlltour, getTourBySearch, getFeaturedTour} from './../controllers/tourController.js';
import { verifyAdmin } from '../utils/verifyToken.js';


const router = express.Router();

//create new tour
router.post('/', verifyAdmin, createTour);

//create delete tour
router.delete('/:id', verifyAdmin, deleteTour);

//create update tour
router.put('/:id', verifyAdmin, updateTour);

//get single tour
router.get('/:id',  getSingleTour);
//get all tour
router.get('/',  getAlltour);

//get tour by search
router.get("/search/getTourBySearch", getTourBySearch)
router.get("/search/getFeaturedTour", getFeaturedTour)
router.get("/search/getTourCount", getTourCount)

export default router;