const express = require('express');
const { addToDB, timeout, deleteFromDB, getFromDB } = require('./actions/addToDB');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
	const data = await getFromDB();
	res.json(data);
});

app.post('/', async (req, res) => {
	const text = req.body.text;
	const delay = req.body.delay;
	const data = await addToDB(text, delay);
	res.json(data);
});

app.delete('/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	const data = await deleteFromDB(id);
	res.json(data);
});

app.listen(3005, () => {
	console.log('app is running');
});
