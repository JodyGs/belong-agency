import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router'

function Footer() {
	const router = useRouter()
	const { pathname, asPath, query, isReady } = router
	console.log(router);
	console.log(isReady);

	return (
		<footer className='bg-belrose text-belorange mt-auto flex justify-between items-center py-3 px-8'>
			<div className='flex flex-col items-start'>
				<Link href={'#'}>Contact</Link>
				<div className="flex w-full justify-between">
					<Link href={`${pathname}`} locale={'fr'}>FR</Link>
					<Link href={`${pathname}`} locale={'en'}>EN</Link>
				</div>
			</div>
			<svg
				className='fill-belorange h-[80px]'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 64.5 174.71'
			>
				<path d='M48.9 0L8.5.21C3.8.21 0 4.01 0 8.71v157.5c0 4.7 3.8 8.5 8.5 8.5h38.9c1.3 0 2.7 0 4-.1 6.2-.5 11.2-4.7 12.6-10.7.4-1.6.4-3.3.4-5 0-20.6-.1-41.2.1-61.7.1-7.7-2.9-13.7-10.9-16.2-.1 0-.2-.2-.5-.6 8.4-2.7 11.4-8.6 11.3-16.9-.2-16-.3-32 0-48C64.7 5.61 57.3-.19 48.9 0zm-13 144.6c0 2.2-1.8 4-4 4s-4-1.8-4-4V24.51c0-2.2 1.8-4 4-4s4 1.8 4 4v120.1z' />
			</svg>
			<div className='flex flex-col items-end'>
				<Link href={'#'}>Instagram</Link>
				<Link href={'#'}>Linkedin</Link>
			</div>
		</footer>
	);
}

export default Footer;
