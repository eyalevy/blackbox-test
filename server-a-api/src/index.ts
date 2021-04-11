import 'dotenv/config';

import {port} from './framework/environment';
import app from './server';

(async () => {
    
    app.listen(port, () => {
        console.log('server-api is RUNNING!', {port});
    });
})().catch((err) => console.error('error caught at index', {err}));
