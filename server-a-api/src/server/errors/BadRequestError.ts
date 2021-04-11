export class BadRequestError extends Error {
    status = 400;
    type = 'BadRequest';
    message = '';

    constructor(message: string) {
        super(message);
        this.message = message;
    }
}
