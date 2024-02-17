'use server';

const deleteReq = async id => {
	const response = await fetch(`http://localhost:3005/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return response.json();
};

export default deleteReq;
