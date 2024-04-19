import getConfig from 'next/config';
import { NextApiRequest, NextApiResponse } from 'next';

const reports = (req: NextApiRequest, res: NextApiResponse) => {

    const updateXlsx = async () => {
        const url: string = req.body;

        if (!url)
            return res.status(400).json({ message: 'url is required' });

        return res.status(200).json({ message: "OK" });
    }

    const isWorking = async () => {
        return res.status(200).json({ message: "API is working." });
    }

    switch (req.method) {
        case 'GET':
            return isWorking();
        case 'POST':
            return updateXlsx();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}

export default reports;