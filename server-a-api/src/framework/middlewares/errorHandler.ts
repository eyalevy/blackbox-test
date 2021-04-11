import {NextFunction, Request, Response} from 'express';

const errorHandler = (err: any, req: Request, res: Response, _: NextFunction) => {
    const status = err.status || 500;
    const message = err.message || 'Error has occured';    
    console.error(message, {err, extra: {method: req.method, url: req.originalUrl}});

    res.sendStatus(status);
};

export default errorHandler;
