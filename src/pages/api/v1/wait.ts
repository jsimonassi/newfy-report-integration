import { NextApiRequest, NextApiResponse } from 'next';

const wait = (req: NextApiRequest, res: NextApiResponse) => {

    const startWaiting = async () => {
        const waitingTimeMs = req.body?.waitingTimeMs ?? 10000;
        const startTime = new Date().toLocaleString();
        
        setTimeout(() => {
            return res.status(200).json(
                { 
                    message: "Espera realizada!",
                    startTime: startTime,
                    endTime: new Date().toLocaleString(),
                    tip: "Consulte " + req.headers.host + " para mais informações."
                }
            );
        }, waitingTimeMs);
    }

    switch (req.method) {
        case 'POST':
            return startWaiting();
        default:
            return res.status(405).end(`Método ${req.method} não é permitido. Utilize POST.`)
    }
}

export default wait;