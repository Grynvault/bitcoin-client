/** @format */

import { useState } from 'react';
import './App.css';
import { Buffer } from 'buffer';
import process from 'process';

window.Buffer = Buffer;
window.process = process;

const connectUnisat = async () => {
	if (!window.unisat) {
		alert('Please install the Unisat Wallet extension.');
		return;
	}

	try {
		const accounts = await window.unisat.requestAccounts();
		console.log('accounts', accounts);
		console.log('Connected Account:', accounts[0]);
		return accounts[0];
	} catch (error) {
		console.error('Connection error:', error);
	}
};

const signPsbt = async () => {
	try {
		let res = await window.unisat.signPsbt(
			'cHNidP8BAFICAAAAAZ7q9cb4VhAStWaB/oPQDkNaipHaIRIwzah2Js7x+HigAAAAAAD/////AVgCAAAAAAAAFgAUJHbpJXBJAzKkJHBPLCIoBruuBUkAAAAAAAEA4AIAAAAAAQGeCNOh/FpyOSQkMn0ZBow4dUjZBFvxvTD0xV2KOV+1xgEAAAAA/////wLoAwAAAAAAABepFD719yKQEunKj5y1d+QGq+invHXgh7FBAAAAAAAAFgAUJHbpJXBJAzKkJHBPLCIoBruuBUkCSDBFAiEA/UNfU6QlatrD0M+BUOCTJCehz0Te5ICPrSVASz82nRgCICphEuRhIjzxiKfbiAEjYKusSVLVuVZBKTidWvbOOPVWASEDZhfmHq0ZzxaX+0oQgfZAxbM1zbs6bmyK1NzVXDcZMFIAAAAAAQRGqCB+MqcpsSJu0ScPKCqMYwVNCbJryexT6ml3HOOBWN+t6IghA2YX5h6tGc8Wl/tKEIH2QMWzNc27Om5sitTc1Vw3GTBSrAAA',
			{
				autoFinalized: false,
				toSignInputs: [
					{
						index: 0,
						address: 'tb1qy3mwjftsfypn9fpywp8jcg3gq6a6up2fd9whj7',
					},
				],
			},
		);

		console.log('res =', res);
	} catch (error) {
		console.log('Error', error);
	}
};

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Grynvault Bitcoin Bond</h1>
			<button onClick={signPsbt}>Sign Psbt</button>
		</>
	);
}

export default App;
