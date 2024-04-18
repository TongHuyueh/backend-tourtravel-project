import express from 'express'
import {  createBooking, deleteBooking, getAllBooking, getBooking, updateBooking } from '../controllers/bookingController.js';
import { verifyAdmin } from '../utils/verifyToken.js';


const router = express.Router()

router.post("/", createBooking);
router.delete("/:id",verifyAdmin, deleteBooking);
router.get("/:id",verifyAdmin, getBooking);
router.get("/", verifyAdmin, getAllBooking);
router.put("/:id", verifyAdmin, updateBooking)

export default router