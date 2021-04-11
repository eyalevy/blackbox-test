import * as env from 'env-var';

const getInt = (key: string) => env.get(key).required().asInt();

const getString = (key: string) =>
    env
        .get(key)
        .required()
        .asString();

export const port = getInt('PORT') || 3000;
export const serverBBaseUrl = getString('SERVER_B_BASE_URL');
