import React, { useEffect } from 'react';

const MyApp = () => {
    const [url, setUrl] = React.useState<string>('');
    useEffect(() => {
        if (typeof window !== 'undefined') {
          setUrl(window.origin);
        }
      }, []);


    return (
        <div >
            <h1>Newfy Sleeper</h1>
            <p>Esta api possui o endpoint: <b>{url}/api/v1/wait</b></p>
            <p>Para usá-lo, envie um POST com o seguinte corpo:</p>
            <pre>
                {`{
 "waitingTimeMs": 5000
}`}
            </pre>
            <p>Este corpo irá fazer com que a API espere por 10 segundos antes de responder.</p>
            <p>Substitua o waitingTime pelo valor necessário em milissegundos.</p>
            <p>Se nada for enviado, o valor de 10000 ms será utilizado.</p>
        </div>
    );
}

export default MyApp;