'use server';

const getReq = async body => {
	const response = await fetch('http://localhost:3005', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		body,
	});
	return response.json();
};

export default getReq;
