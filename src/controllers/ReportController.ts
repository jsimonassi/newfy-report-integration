import { Request, Response } from 'express';
import googleDriveService from '../services/GoogleDriveService';

const reportController = {
  async createOrUpdateReportOnDrive(req: Request, res: Response) {
    try {
      // const { chave } = req.body;
      console.log('chave');
      const resultado = await googleDriveService.createOrUpdateXlsx('chave');
      // return res.json(resultado);
      return res.status(200).json({ error: 'Erro interno do servidor' });

    } catch (error) {
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
};

export default reportController;