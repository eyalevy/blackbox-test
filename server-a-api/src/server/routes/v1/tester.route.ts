import axios from 'axios';
import {Request, Response, Router} from 'express';
import { serverBBaseUrl } from '../../../framework/environment';

export default Router().use('/', async (request: Request, response: Response) => {
    console.log("start tester")
    try {
        console.log("serverBBaseUrl",serverBBaseUrl)
        const result = await axios.post(`http://${serverBBaseUrl}/api/v1/tester`)
        console.log("fetch tester", result.data)
        response.status(200).send(result.data);
        return;
    } catch (error) {
        console.log("error while getting from tester", error)
    }
    
    response.status(200).send('empty')
});
