 import express from 'express';
import cors from 'cors'
import { test ,signUpUser,loginUser,getProfile} from '../controllers/authController.js'; // Use import for ES module

const router = express.Router();

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173' // corrected from `original` to `origin`
    })
);

router.get('/', test);
router.post('/signup',signUpUser)
router.post('/login',loginUser)
router.get('/profile',getProfile)
export default router; // Use export default
