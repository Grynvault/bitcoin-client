/** @format */

import React, { useState } from 'react';
//MUI import
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

function LoanCreation() {
	const [step, setStep] = useState(1);
	const [loanAmount, setLoanAmount] = useState('');
	const [btcCollateral, setBtcCollateral] = useState('');
	const [loanDuration, setLoanDuration] = useState('');

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
							<div className='flex flex-row gap-2 items-center'>Fees: 0 BTC</div>
							<Button variant='contained'>Request Loan</Button>
						</div>
					</CardComponent>
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
										<div>P2SH Address:</div>
									</AccordionSummary>
									<AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</AccordionDetails>
								</Accordion>
							</div>
							<Button variant='contained'>Fund BTC</Button>
						</div>
					</CardComponent>
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
