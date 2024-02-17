'use server';

const postReq = async body => {
	const response = await fetch('http://localhost:3005', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body,
	});
	return response.json();
};

export default postReq;
