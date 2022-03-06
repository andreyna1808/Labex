import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function VerificaLogin() {
	const history = useHistory();
	useEffect(
		() => {
			const token = localStorage.getItem('token');

			if (token === null) {
				history.push('/login');
			}
			else {
				history.push('/dashboard')
			}
		},
		[history]
	);
}
