/** @format */

import { useState } from 'react';
import LoanCreation from './pages/LoanCreation';
import LoanRepayment from './pages/LoanRepayment';
//MUI Imports
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//CSS
import './App.css';

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
	const [account, setAccount] = useState(null);
	const [step, setStep] = useState(1);
	const [value, setValue] = useState(0);

	const connectUnisatWallet = async () => {
		const account = await connectUnisat();
		setAccount(account);
	};

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			{account ? (
				<>
					<h2>
						Welcome to Grynvault
						<br />
						Bitcoin Lending Platform
					</h2>
					<Button
						variant='outlined'
						onClick={connectUnisatWallet}>
						Connect Unisat Wallet
					</Button>
				</>
			) : (
				<>
					<Box sx={{ width: '100%' }}>
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
							<Tabs
								value={value}
								onChange={handleChange}
								aria-label='basic tabs example'>
								<Tab
									label='Create Loan'
									{...a11yProps(0)}
								/>
								<Tab
									label='Pay Loan'
									{...a11yProps(1)}
								/>
							</Tabs>
						</Box>
						<CustomTabPanel
							value={value}
							index={0}>
							<LoanCreation
								account={account}
								step={step}
								setStep={setStep}
							/>
						</CustomTabPanel>
						<CustomTabPanel
							value={value}
							index={1}>
							<LoanRepayment />
						</CustomTabPanel>
					</Box>
				</>
			)}
		</>
	);
}

export default App;

/**
 *
 * Components
 *
 */
function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}
