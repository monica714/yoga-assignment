import express from 'express';
import { registerForm,loginUser } from '../controller/formController.js';
const router = express.Router();

// Route for submitting the form
router.post('/submitUser', registerForm);
router.post('/loginUser', loginUser)

export default router;