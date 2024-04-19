import express from 'express';
import reportController from '../controllers/ReportController';

const router = express.Router();


router.get('/', (_, res) => res.send("O ambiente está funcionando como esperado!"));
router.post('/report', reportController.createOrUpdateReportOnDrive);


export default router;