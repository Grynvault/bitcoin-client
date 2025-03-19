/** @format */

import React, { useState } from 'react';
//MUI import
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const btcPrice = 83000;
const initializeHtlc = '2N3aiPEYAW1hQXbqj4SJ1Bo4XXbjK42koTA';

const unsignedGetBackCollateral =
	'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';

const borrowerNativeSegwitAccount = 'tb1q3jmfx30rdhglnhvyd7ttt9lr26az3wx26e2hqc';

const connectUnisat = async () => {
	if (!window.unisat) {
		alert('Please install the Unisat Wallet extension.');
		return;
	}
	try {
		const accounts = await window.unisat.requestAccounts();
		return accounts[0];
	} catch (error) {
		console.error('Connection error:', error);
	}
};

const getPublicKey = async () => {
	try {
		let res = await window.unisat.getPublicKey();
		console.log(res);
		return res;
	} catch (e) {
		console.log(e);
	}
};

const getAccounts = async () => {
	try {
		let res = await window.unisat.getAccounts();
		console.log(res);
		return res;
	} catch (e) {
		console.log(e);
	}
};

function LoanCreation({ account, step, setStep }) {
	const [loanAmount, setLoanAmount] = useState(100);
	const [loanDuration, setLoanDuration] = useState('');
	const [loanDetails, setLoanDetails] = useState(null);
	const [transactionDetails, setTransactionDetails] = useState(null);

	const requestLoan = () => {
		const account = connectUnisat();
		console.log('account ->', account);

		const pubKey = getPublicKey();

		setLoanDetails({
			loanAmount: loanAmount,
			collateral: (loanAmount * (10 / 7)) / btcPrice,
			loanDuration: loanDuration,
			pubKey: pubKey,
		});
		connectUnisat();
	};

	const nextStep = () => {
		setStep((pre) => pre + 1);
	};

	const onChangeCollateral = () => {
		const collateral = (loanAmount * (10 / 7)) / btcPrice;
		return collateral;
	};

	const fundInitialCollateral = async () => {
		const collateralInSatoshis = parseInt(100000000 * ((loanAmount * (10 / 7)) / btcPrice));

		try {
			let txid = await window.unisat.sendBitcoin(initializeHtlc, collateralInSatoshis);
			console.log(txid);
			setTransactionDetails(txid);
		} catch (e) {
			console.log(e);
		}
	};

	const signToGetBackCollateral = async () => {
		try {
			let res = await window.unisat.signPsbt(unsignedGetBackCollateral, {
				autoFinalized: false,
				toSignInputs: [
					{
						index: 0,
						address: borrowerNativeSegwitAccount,
					},
				],
			});

			console.log('res =', res);
		} catch (error) {
			console.log('Error', error);
		}
	};

	const broadcastTheTransaction = async () => {};

	return (
		<div className='w-full text-start'>
			{step === 1 && (
				<div className='w-full text-start'>
					<div className='py-4'>Step #1: Request Loan</div>
					<CardComponent>
						<div className='flex flex-col gap-4'>
							<div className='flex flex-row gap-2 items-center'>
								Loan Amount: ${' '}
								<TextField
									id='standard-basic'
									label=''
									variant='standard'
									placeholder='100'
									value={loanAmount}
									onChange={(e) => setLoanAmount(e.target.value)}
								/>
							</div>
							<div>
								<div className='flex flex-row gap-2 items-center'>
									Collateral (LTV: 70%):{'  '}
									{onChangeCollateral().toFixed(8)} BTC
								</div>
								<div className='text-xs'>(1 BTC = $83,000)</div>
							</div>

							<div className='flex flex-row gap-2 items-center'>
								Duration:
								<TextField
									id='standard-basic'
									label=''
									variant='standard'
									placeholder='5'
									value={loanDuration}
									onChange={(e) => setLoanDuration(e.target.value)}
								/>
								hours
							</div>
							<div className='flex flex-row gap-2 items-center'>Fees: 0 BTC</div>
							<Button
								onClick={requestLoan}
								variant='contained'>
								Request Loan
							</Button>
						</div>
					</CardComponent>
					{loanDetails && (
						<div className='border p-4 mt-4'>
							<div>Loan Amount: {loanDetails.loanAmount}</div>
							<div>Collateral: {loanDetails.collateral.toFixed(8)} BTC</div>
							<div>Timelock: 30 minutes</div>
							<div>Loan Duration: {loanDetails.loanDuration} hours</div>
							<div>Borrower's Pubkey: {loanDetails.pubKey}</div>
							<Button
								variant='outlined'
								onClick={nextStep}>
								Next
							</Button>
						</div>
					)}
				</div>
			)}

			{step === 2 && (
				<div className='w-full text-start'>
					<div className='py-4'>Step #2: Fund Collateral</div>
					<CardComponent>
						<div className='w-full flex flex-col gap-4'>
							<div className='text-center'>
								Fund the BTC Collateral to <br /> Hash Time-lock Contract
								<Accordion>
									<AccordionSummary
										expandIcon={<>V</>}
										aria-controls='panel1-content'
										id='panel1-header'>
										<div>P2SH Address: {initializeHtlc}</div>
									</AccordionSummary>
									<AccordionDetails>{`
                                        OP_IF
                                            <locktime>
                                            OP_CHECKLOCKTIMEVERIFY
                                            OP_DROP
                                            <your public key>
                                            OP_CHECKSIG
                                        OP_ELSE
                                            OP_SHA256 
                                            <preimage>
                                            OP_EQUALVERIFY 
                                            <lender's public key>
                                            OP_CHECKSIG
                                        OP_ENDIF
                                        `}</AccordionDetails>
								</Accordion>
							</div>
							<Button
								onClick={fundInitialCollateral}
								variant='contained'>
								Fund {onChangeCollateral().toFixed(8)} BTC
							</Button>
						</div>
					</CardComponent>
					{transactionDetails && <div>{transactionDetails}</div>}
					<Button
						onClick={signToGetBackCollateral}
						variant='outlined'>
						Sign to get back Collateral
					</Button>
					<Button
						onClick={signToGetBackCollateral}
						variant='outlined'>
						Broadcast the transaction to get back Collateral
					</Button>
				</div>
			)}

			{step === 3 && (
				<div className='w-full text-start'>
					<div className='py-4'>Step #3: Withdraw loan</div>
					<CardComponent>
						<div className='w-full text-center flex flex-col gap-4'>
							<h1>$100</h1>
							<Button variant='contained'>Withdraw</Button>
						</div>
					</CardComponent>
				</div>
			)}
		</div>
	);
}

const RequestLoan = () => {
	const [loanAmount, setLoanAmount] = useState('');
	const [btcCollateral, setBtcCollateral] = useState('');
	const [loanDuration, setLoanDuration] = useState('');

	return (
		<div className='w-full text-start'>
			<div className='py-4'>Step #1: Request Loan</div>
			<CardComponent>
				<div className='flex flex-col gap-4'>
					<div className='flex flex-row gap-2 items-center'>
						Loan Amount: ${' '}
						<TextField
							id='standard-basic'
							label=''
							variant='standard'
							placeholder='100'
							value={loanAmount}
							onChange={(e) => setLoanAmount(e.target.value)}
						/>
					</div>
					<div className='flex flex-row gap-2 items-center'>
						Collateral:
						<TextField
							id='standard-basic'
							label=''
							variant='standard'
							placeholder='0.0001'
							value={btcCollateral}
							onChange={(e) => setBtcCollateral(e.target.value)}
						/>
						BTC
					</div>
					<div className='flex flex-row gap-2 items-center'>
						Duration:
						<TextField
							id='standard-basic'
							label=''
							variant='standard'
							placeholder='5'
							value={loanDuration}
							onChange={(e) => setLoanDuration(e.target.value)}
						/>
						hours
					</div>
					<div className='flex flex-row gap-2 items-center'>
						Fees:
						<TextField
							id='standard-basic'
							disabled
							label=''
							variant='standard'
							placeholder='0'
							value={0}
						/>
						BTC
					</div>
					<Button variant='contained'>Request Loan</Button>
				</div>
			</CardComponent>
		</div>
	);
};

const FundCollateral = () => {
	return (
		<div className='w-full text-start'>
			<div className='py-4'>Step #2: Fund Collateral</div>
			<CardComponent>
				<div className='w-full flex flex-col gap-4'>
					<div className='text-center'>
						Fund the BTC Collateral to <br /> Hash Time-lock Contract
						<Accordion>
							<AccordionSummary
								expandIcon={<>V</>}
								aria-controls='panel1-content'
								id='panel1-header'>
								<div>P2SH Address:</div>
							</AccordionSummary>
							<AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</AccordionDetails>
						</Accordion>
					</div>
					<Button variant='contained'>Fund BTC</Button>
				</div>
			</CardComponent>
		</div>
	);
};

const WithdrawLoan = () => {
	return (
		<div className='w-full text-start'>
			<div className='py-4'>Step #3: Withdraw loan</div>
			<CardComponent>
				<div className='w-full text-center flex flex-col gap-4'>
					<h1>$100</h1>
					<Button variant='contained'>Withdraw</Button>
				</div>
			</CardComponent>
		</div>
	);
};

const CardComponent = ({ children }) => {
	return <div className='p-4 shadow'>{children}</div>;
};

export default LoanCreation;
