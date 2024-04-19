import express from 'express';
import reportController from '../controllers/reportController';

const router = express.Router();

router.post('/report', reportController.createOrUpdateReportOnDrive);

export default router;