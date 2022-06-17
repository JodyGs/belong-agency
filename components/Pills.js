import { shuffle } from 'lodash';
import Link from 'next/link';
import React from 'react';

const colors = [
	"belvert",
	"belorange",
	"belrose",
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
			<div onMouseEnter={handleColors} className={`pills hover:bg-${color}`}>
				<Link href={'/contact'}>Press Relations</Link>
			</div>
			<div onMouseEnter={handleColors} className={`pills hover:bg-${color}`}>
				<Link href={'/contact'}>Influencer Marketing</Link>
			</div>
			<div onMouseEnter={handleColors} className={`pills hover:bg-${color}`}>
				<Link href={'/contact'}>360˚ Strategy</Link>
			</div>
			<div onMouseEnter={handleColors} className={`pills hover:bg-${color}`}>
				<Link href={'/contact'}>Strategic Partnerships</Link>
			</div>
			<div onMouseEnter={handleColors} className={`pills hover:bg-${color}`}>
				<Link href={'/contact'}>Events</Link>
			</div>
			<div onMouseEnter={handleColors} className={`pills hover:bg-${color}`}>
				<Link href={'/contact'}>Content Production</Link>
			</div>
		</div>
	);
}

export default Pills;
