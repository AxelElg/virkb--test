'use client';
import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import postReq from '../actions/postData';
import getReq from '../actions/getData';

export default function main() {
	const [list, setList] = useState([]);
	const [delay, setDelay] = useState(0);
	const [text, setText] = useState('post text');
	const [waiting, setWaiting] = useState(true);

	useEffect(() => {
		getReq().then(setList);
		setWaiting(false);
	}, []);

	const submitForm = async event => {
		event.preventDefault();
		if (!waiting) {
			setWaiting(true);
			const res = await postReq(JSON.stringify({ delay, text }));
			setList(res);
			setWaiting(false);
		}
	};

	let bottomArea = (
		<div className='loading-area'>
			<div className='loading-circle'></div>
		</div>
	);

	if (!waiting) {
		const listItems = list.map(e => (
			<ListItem id={e.id} text={e.text} delay={e.delay} setList={setList} />
		));

		bottomArea = <div className='list-area'>{listItems}</div>;
	}

	return (
		<div className='container'>
			<div className='main'>
				<form className='form' onSubmit={submitForm}>
					<input
						type='text'
						placeholder='post text'
						onChange={e => setText(e.target.value)}
					></input>
					<input
						type='number'
						min='0'
						defaultValue={delay}
						onChange={e => setDelay(e.target.value)}
					></input>
					<input type='submit' value='Submit' disabled={waiting} />
				</form>
				{bottomArea}
			</div>
		</div>
	);
}
