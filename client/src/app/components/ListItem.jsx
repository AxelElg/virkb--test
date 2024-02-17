import React from 'react';
import deleteReq from '../actions/deleteData';

export default function ListItem({ id, text, delay, setList }) {
	const deleteItem = event => {
		event.preventDefault();
		deleteReq(id).then(setList);
	};

	return (
		<div key={id} className='list-row'>
			<div className='list-row_right'>
				<code>{text}</code>
				<code>{`${delay} seconds`}</code>
			</div>
			<input className='list-row_left' type='button' value='delete' onClick={deleteItem} />
		</div>
	);
}
