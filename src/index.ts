import express from 'express';

const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (_, res) => {
	res.send('Hello world');
});

app.listen(PORT, () => `App is listening on port: ${PORT}`);
