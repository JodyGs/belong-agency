import { shuffle } from 'lodash';
import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';


const colors = [
	"vert",
	"orange",
	"rose",
];

function Pills() {
	const [color, setColor] = React.useState(null);

	const handleColors = () => {
		setColor(shuffle(colors).pop());
	}

	React.useEffect(() => {
		handleColors()
	}	, []);



	return (
		<div className='flex flex-col items-center space-y-3 w-2/5 mx-auto font-bold text-md'>
			<div onMouseEnter={handleColors} className={clsx({
								'pills -translate-x-[10%] sm:-translate-x-[25%] lg:translate-x-0 hover:bg-belvert': color === 'vert',
								'pills -translate-x-[10%] sm:-translate-x-[25%] lg:translate-x-0 hover:bg-belorange': color === 'orange',
								'pills -translate-x-[10%] sm:-translate-x-[25%] lg:translate-x-0 hover:bg-belrose': color === 'rose',
							})}>
				<Link href={'/contact'}>Press Relations</Link>
			</div>
			<div onMouseEnter={handleColors}  className={clsx({
								'pills translate-x-[10%] sm:translate-x-[25%] lg:translate-x-0 hover:bg-belvert': color === 'vert',
								'pills translate-x-[10%] sm:translate-x-[25%] lg:translate-x-0 hover:bg-belorange': color === 'orange',
								'pills translate-x-[10%]  sm:translate-x-[25%] lg:translate-x-0 hover:bg-belrose': color === 'rose',
							})}>
				<Link href={'/contact'}>Influencer Marketing</Link>
			</div>
			<div onMouseEnter={handleColors}  className={clsx({
								'pills -translate-x-[10%] sm:-translate-x-[25%] lg:translate-x-0 hover:bg-belvert': color === 'vert',
								'pills -translate-x-[10%] sm:-translate-x-[25%] lg:translate-x-0 hover:bg-belorange': color === 'orange',
								'pills -translate-x-[10%] sm:-translate-x-[25%] lg:translate-x-0 hover:bg-belrose': color === 'rose',
							})}>
				<Link href={'/contact'}>360˚ Strategy</Link>
			</div>
			<div onMouseEnter={handleColors}  className={clsx({
								'pills translate-x-[10%]  sm:translate-x-[25%] lg:translate-x-0 hover:bg-belvert': color === 'vert',
								'pills translate-x-[10%]  sm:translate-x-[25%] lg:translate-x-0 hover:bg-belorange': color === 'orange',
								'pills translate-x-[10%]  sm:translate-x-[25%] lg:translate-x-0 hover:bg-belrose': color === 'rose',
							})}>
				<Link href={'/contact'}>Strategic Partnerships</Link>
			</div>
			<div onMouseEnter={handleColors}  className={clsx({
								'pills -translate-x-[10%] sm:-translate-x-[25%] lg:translate-x-0 hover:bg-belvert': color === 'vert',
								'pills -translate-x-[10%] sm:-translate-x-[25%] lg:translate-x-0 hover:bg-belorange': color === 'orange',
								'pills -translate-x-[10%] sm:-translate-x-[25%] lg:translate-x-0 hover:bg-belrose': color === 'rose',
							})}>
				<Link href={'/contact'}>Events</Link>
			</div>
			<div onMouseEnter={handleColors}  className={clsx({
								'pills translate-x-[10%]  sm:translate-x-[25%] lg:translate-x-0 hover:bg-belvert': color === 'vert',
								'pills translate-x-[10%]  sm:translate-x-[25%] lg:translate-x-0 hover:bg-belorange': color === 'orange',
								'pills translate-x-[10%]  sm:translate-x-[25%] lg:translate-x-0 hover:bg-belrose': color === 'rose',
							})}>
				<Link href={'/contact'}>Content Production</Link>
			</div>
		</div>
	);
}

export default Pills;
