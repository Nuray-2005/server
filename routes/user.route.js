import express from 'express';
import {
    getUser,
    updateUser,
    deleteUser,
} from '../controllers/user.controller.js';
import { verifyToken } from '../lib/middleware.js';

const router = express.Router();

router.get('/:id', getUser);
router.patch('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);


export default router;