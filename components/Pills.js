import { shuffle } from 'lodash';
import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';


const colors = [
	"vert",
	"orange",
	"rose",
];

function Pills({locale}) {
	const [color, setColor] = React.useState(null);

	const handleColors = () => {
		setColor(shuffle(colors).pop());
	}

	React.useEffect(() => {
		handleColors()
	}	, []);



	return (
		<div className='flex flex-col items-center space-y-3 w-2/5 mx-auto font-bold text-md font-messapia text-xs'>
			<div onMouseEnter={handleColors} className={clsx({
								'pills -translate-x-[10%] sm:-translate-x-[25%] lg:translate-x-0 hover:bg-belvert': color === 'vert',
								'pills -translate-x-[10%] sm:-translate-x-[25%] lg:translate-x-0 hover:bg-belorange': color === 'orange',
								'pills -translate-x-[10%] sm:-translate-x-[25%] lg:translate-x-0 hover:bg-belrose': color === 'rose',
							})}>
				<Link href={'/work'}>{locale === "fr" ? "relations presse" : "Press Relations"}</Link>
			</div>
			<div onMouseEnter={handleColors}  className={clsx({
								'pills translate-x-[10%] sm:translate-x-[25%] lg:translate-x-0 hover:bg-belvert': color === 'vert',
								'pills translate-x-[10%] sm:translate-x-[25%] lg:translate-x-0 hover:bg-belorange': color === 'orange',
								'pills translate-x-[10%]  sm:translate-x-[25%] lg:translate-x-0 hover:bg-belrose': color === 'rose',
							})}>
				<Link href={'/work'}>{locale === "fr" ? "Marketing d'influence" : "Influencer Marketing"}</Link>
			</div>
			<div onMouseEnter={handleColors}  className={clsx({
								'pills -translate-x-[10%] sm:-translate-x-[25%] lg:translate-x-0 hover:bg-belvert': color === 'vert',
								'pills -translate-x-[10%] sm:-translate-x-[25%] lg:translate-x-0 hover:bg-belorange': color === 'orange',
								'pills -translate-x-[10%] sm:-translate-x-[25%] lg:translate-x-0 hover:bg-belrose': color === 'rose',
							})}>
				<Link href={'/work'}>{locale === "fr" ? "Stratégie 360˚" : "360˚ Strategy"}</Link>
			</div>
			<div onMouseEnter={handleColors}  className={clsx({
								'pills translate-x-[10%]  sm:translate-x-[25%] lg:translate-x-0 hover:bg-belvert': color === 'vert',
								'pills translate-x-[10%]  sm:translate-x-[25%] lg:translate-x-0 hover:bg-belorange': color === 'orange',
								'pills translate-x-[10%]  sm:translate-x-[25%] lg:translate-x-0 hover:bg-belrose': color === 'rose',
							})}>
				<Link href={'/work'}>{locale === "fr" ? "Partenariats" : "Strategic Partnerships"}</Link>
			</div>
			<div onMouseEnter={handleColors}  className={clsx({
								'pills -translate-x-[10%] sm:-translate-x-[25%] lg:translate-x-0 hover:bg-belvert': color === 'vert',
								'pills -translate-x-[10%] sm:-translate-x-[25%] lg:translate-x-0 hover:bg-belorange': color === 'orange',
								'pills -translate-x-[10%] sm:-translate-x-[25%] lg:translate-x-0 hover:bg-belrose': color === 'rose',
							})}>
				<Link href={'/work'}>{locale === "fr" ? "Évènements" : "Events"}</Link>
			</div>
			<div onMouseEnter={handleColors}  className={clsx({
								'pills translate-x-[10%]  sm:translate-x-[25%] lg:translate-x-0 hover:bg-belvert': color === 'vert',
								'pills translate-x-[10%]  sm:translate-x-[25%] lg:translate-x-0 hover:bg-belorange': color === 'orange',
								'pills translate-x-[10%]  sm:translate-x-[25%] lg:translate-x-0 hover:bg-belrose': color === 'rose',
							})}>
				<Link href={'/work'}>{locale === "fr" ? "Production de contenu" : "Content Production"}</Link>
			</div>
		</div>
	);
}

export default Pills;
