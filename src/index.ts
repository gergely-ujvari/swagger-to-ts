import https from 'https';
import fs from 'fs';
import {IncomingMessage} from "http";

function downloadSwagger(url: string, to: string, cb: (response: IncomingMessage) => void) {
    const file = fs.createWriteStream(to);
    https.get(url, (response) => {
        response.pipe(file);
        // after download completed close filestream
        file.on("finish", () => {
            file.close();
            cb(response);
        });
    });
}

downloadSwagger('https://football.api.sportal365.com/swagger.json', 'swagger/football.json', (response) => {
    console.log('done');
})