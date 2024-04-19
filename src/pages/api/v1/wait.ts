import { NextApiRequest, NextApiResponse } from 'next';

const MAX_VERCEL_WAITING_TIME = 7000;

const wait = (req: NextApiRequest, res: NextApiResponse) => {

    const startWaiting = async () => {
        const waitingTimeMs = req.body?.waitingTimeMs && req.body?.waitingTimeMs < MAX_VERCEL_WAITING_TIME ? 
        req.body?.waitingTimeMs :
        MAX_VERCEL_WAITING_TIME;
        const startTime = new Date().toUTCString();
        
        setTimeout(() => {
            return res.status(200).json(
                { 
                    message: "Espera realizada!",
                    tempoDeEspera: waitingTimeMs,
                    startTime: startTime,
                    endTime: new Date().toUTCString(),
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