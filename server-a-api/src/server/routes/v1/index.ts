import {Router} from 'express';

import tester from './tester.route';

export default Router().use('/tester', tester);
