const { readFileSync, writeFileSync, writeFile } = require('fs');

const path = require('path');

const dbPath = path.join(__dirname, '../../data/data.json');

const readData = async () => {
	const data = await JSON.parse(readFileSync(dbPath));
	return data;
};

const writeData = async data => {
	writeFileSync(dbPath, JSON.stringify(data, null, 4));
};

const getFromDB = async () => {
	const data = await readData();
	return data;
};

const addToDB = async (text, delay) => {
	const data = await readData();
	let i = 0;
	while (true) {
		if (data.every(e => e.id !== i)) {
			break;
		}
		i++;
	}
	data.push({ id: i, text, delay });
	writeData(data);

	await new Promise(resolve => setTimeout(resolve, delay * 1000));
	return data;
};

const deleteFromDB = async id => {
	const data = await readData();

	data.splice(
		data.findIndex(e => e.id === id),
		1
	);
	writeData(data);
	return data;
};

module.exports = {
	getFromDB,
	addToDB,
	deleteFromDB,
};
