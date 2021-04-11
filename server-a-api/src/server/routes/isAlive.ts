import {Request, Response, Router} from 'express';

export default Router().get('/', (_: Request, res: Response) => res.status(200).send('Welcome'));
