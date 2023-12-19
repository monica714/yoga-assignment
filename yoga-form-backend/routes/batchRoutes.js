import express from 'express';
import { editBatch, setBatch } from '../controller/batchController.js';
import { CompletePayment } from '../controller/paymentController.js';
const router = express.Router();

// router.post('/submitBatch', batchController);
router.put('/payment',CompletePayment)
router.put('/setBatch', setBatch);
router.put('/editBatch/:id', editBatch);

export default router;