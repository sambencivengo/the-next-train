import * as dotenv from 'dotenv';
dotenv.config();
import setEnv from '@americanairlines/simple-env';

export const env = setEnv({
	required: {
		mtaApiKey: 'MTA_API_KEY',
	},
});
