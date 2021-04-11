import axios from 'axios';
import {mockServerClient} from 'mockserver-client';

describe('tests', () => {
    beforeAll(async () => {
        mockServerClient('localhost',1080).mockAnyResponse(
            {
                'httpRequest': {
                    'method': 'POST',
                    'path': '/api/v1/tester',
                },
                'httpResponse': {
                    'statusCode': 200,
                    'body': JSON.stringify({ name: 'HELLLLLLLO' }),
                },
            }
        )
    });

    describe('tester route', () => {
        it(`tester`, async () => {
            const result = await axios.post('http://localhost:3000/api/v1/tester')
            console.log(result.data)
        });

       
    });
});

