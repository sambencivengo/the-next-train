import express from 'express';
import { env } from './env';

const PORT = process.env.PORT || 8000;
const { mtaApiKey } = env;

const start = async () => {
	const app = express();

	app.get('/', (_, res) => {
		res.send('Hello world');
	});

	app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));
};

start();
