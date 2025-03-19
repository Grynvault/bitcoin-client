/** @format */

import React from 'react';
//MUI import
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

function LoanRepayment() {
	return (
		<div className='w-full text-start'>
			<CardComponent>
				<div className='w-full text-center flex flex-col gap-4'>
					<h1>$100</h1>
					<div>within 2 hours</div>
					<Accordion>
						<AccordionSummary
							expandIcon={<>V</>}
							aria-controls='panel1-content'
							id='panel1-header'>
							<div>P2SH Collateral Address:</div>
						</AccordionSummary>
						<AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</AccordionDetails>
					</Accordion>
					<Button variant='contained'>Pay Loan</Button>
				</div>
			</CardComponent>
		</div>
	);
}

const CardComponent = ({ children }) => {
	return <div className='p-4 shadow'>{children}</div>;
};

export default LoanRepayment;
