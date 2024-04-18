import express from 'express'
import { deleteUser, getSingleUser, updateUser, getAllUser } from '../controllers/userController.js';
import { verifyAdmin} from '../utils/verifyToken.js';

const router = express.Router()

// delete user
router.delete('/:id',verifyAdmin, deleteUser);

// update user
router.put('/:id', verifyAdmin, updateUser);

//get single user
router.get('/:id', verifyAdmin, getSingleUser);

//get all user
router.get('/', verifyAdmin, getAllUser);

export default router