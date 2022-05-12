import React from 'react';
import { Button, Card, CardMedia } from '@mui/material';
// should be mapped
export default function BrailleCard() {
	function nextCardClick() {
		console.log('a click');
		// fetch another card from the db
	}

	return (
		// center the styling

		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component='img'
				height='140'
				alt='North American Braille alphabet'
				image='static/images/A.jpg'
			/>
			A braille card
			<Button onClick={nextCardClick}>Next card</Button>
		</Card>
	);
}
