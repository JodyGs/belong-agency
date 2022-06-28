import React from 'react';
import Link from 'next/link';
import Overlay from './Overlay';
import { shuffle } from 'lodash';
import clsx from 'clsx';
import menuHamburger from '../public/img/menu.png';

const colors = ['vert', 'orange', 'rose'];

function Header() {
	const [color, setColor] = React.useState(null);
	const [openNav, setOpenNav] = React.useState(false);

	const handleColors = () => {
		setColor(shuffle(colors).pop());
	};

	React.useEffect(() => {
		handleColors();
	}, []);

	const toggleNav = () => {
		setOpenNav(!openNav);
	};

	return (
		<>
			<header className='w-full px-6 border-b-2 border-black grid grid-cols-12 justify-between items-center text-sm font-messapia font-bold'>
				<div
					className={`${
						openNav ? 'w-full' : 'w-0 hidden'
					} h-full fixed top-0 bg-belorange z-10 left-0 overflow-x-hidden`}
				>
					<a
						href='#'
						onClick={toggleNav}
						className='text-belrose p-5 text-3xl absolute right-0 top-3 font-sweet-sans-pro font-light'
					>
						X
					</a>
					<nav className='flex flex-col text-3xl space-y-7 items-start px-5 text-belrose transition mt-10'>
						<svg
							className=' h-[120px] mb-10 fill-belrose'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 392 174.8'
						>
							<path d='M48.9.1L8.5.3C3.8.3 0 4.1 0 8.8v157.5c0 4.7 3.8 8.5 8.5 8.5h38.9c1.3 0 2.7 0 4-.1 6.2-.5 11.2-4.7 12.6-10.7.4-1.6.4-3.3.4-5 0-20.6-.1-41.2.1-61.7.1-7.7-2.9-13.7-10.9-16.2-.1 0-.2-.2-.5-.6 8.4-2.7 11.4-8.6 11.3-16.9-.2-16-.3-32 0-48C64.8 5.8 57.4 0 48.9.1zM36 144.8c0 2.2-1.8 4-4 4s-4-1.8-4-4V24.6c0-2.2 1.8-4 4-4s4 1.8 4 4v120.2zM102.8 98h15.8V71.6h-16.1V28.7H123v-20c0-4.7-3.8-8.5-8.5-8.5L74.2.1v166c0 4.7 3.8 8.5 8.5 8.5h40.5v-29h-20.4V98zM372.2 49.2H392V14.8C392 6.7 385.5.2 377.4.2h-35.6c-8 0-14.6 6.5-14.6 14.6v145.3c0 8.1 6.5 14.6 14.6 14.6h35.6c8 0 14.6-6.5 14.6-14.6V55.7h-19.8c-4.7 0-8.5 3.8-8.5 8.5v82.2c0 2.2-1.7 3.9-3.9 3.9h-.1c-2.1 0-3.9-1.7-3.9-3.9V27.9c0-2.2 1.7-3.9 3.9-3.9h.1c2.1 0 3.9 1.7 3.9 3.9v12.7c-.1 4.8 3.8 8.6 8.5 8.6zM281.3 10.5l16 73.4c.5 2.1-.7 4.3-2.8 4.9-2.2.6-4.4-.8-4.9-3l-17.2-79c-.9-3.9-4.3-6.7-8.3-6.7h-20v174.6h25V76.9c-.1-2.1 1.4-4.1 3.5-4.4 2.3-.2 4.2 1.5 4.4 3.7l4.7 90.4c.2 4.5 4 8.1 8.5 8.1h27.3V.1h-28c-5.3 0-9.3 5-8.2 10.4zM220.1 0h-35.6c-8 0-14.5 6.5-14.5 14.6v131.5h6.9c6 0 10.9 4.9 10.9 10.9v17.6h32.3c8 0 14.5-6.5 14.5-14.6V14.6c0-8.1-6.5-14.6-14.5-14.6zm-13.8 146.4c0 .3 0 .5-.1.8v.1c-.4 1.7-1.9 3-3.8 3h-.1c-2.1 0-3.9-1.8-3.9-3.9V27.8c0-.3 0-.5.1-.8v-.1c.4-1.7 1.9-3 3.8-3h.1c2.2 0 3.9 1.8 3.9 3.9v118.6z' />
							<path d='M176.9 148.4h-16.8V8.9c0-4.7-3.7-8.4-8.4-8.5L132.6.2v166.1c0 4.7 3.8 8.5 8.5 8.5h44.3v-17.9c0-4.7-3.8-8.5-8.5-8.5z' />
						</svg>
						<Link href={'/work'} className=''>
							<a className='hover:italic hover:text-belbeige'
								onClick={toggleNav}
							>
								work
							</a>
						</Link>
						<Link href={'/about'}>
							<a className='hover:italic hover:text-belbeige'
								onClick={toggleNav}
							>
								about
							</a>
						</Link>
						<Link href={'/presse'}>
							<a className='hover:italic hover:text-belbeige'
								onClick={toggleNav}
							>
								presse
							</a>
						</Link>
						<Link href={'/contact'}>
							<a className='hover:italic hover:text-belbeige'
								onClick={toggleNav}
							>
								Say hi !
							</a>
						</Link>
					</nav>
				</div>
				<button
					onClick={toggleNav}
					className='md:hidden icone-toggle bg-transparent rounded-full p-2 inline-flex items-center justify-center h-12 w-12'
				>
					<img
						src='/img/menu.png'
						alt='menu hamburger'
						className='h-full w-full'
					/>
				</button>
				<nav className='hidden md:block space-x-5 md:col-span-1 font-bold'>
					<Link href={'/work'}>
						<a
							onMouseEnter={handleColors}
							className={clsx({
								'hover:text-belvert hover:italic': color === 'vert',
								'hover:text-belorange hover:italic': color === 'orange',
								'hover:text-belrose hover:italic': color === 'rose',
							})}
						>
							work
						</a>
					</Link>
					<Link href={'/about'}>
						<a
							onMouseEnter={handleColors}
							className={clsx({
								'hover:text-belvert hover:italic': color === 'vert',
								'hover:text-belorange hover:italic': color === 'orange',
								'hover:text-belrose hover:italic': color === 'rose',
							})}
						>
							about
						</a>
					</Link>
					<Link href={'/presse'}>
						<a
							onMouseEnter={handleColors}
							className={clsx({
								'hover:text-belvert hover:italic': color === 'vert',
								'hover:text-belorange hover:italic': color === 'orange',
								'hover:text-belrose hover:italic': color === 'rose',
							})}
						>
							presse
						</a>
					</Link>
				</nav>
				<div className='col-span-10 mx-auto'>
					<svg
						className=' h-[94px] w-[100px]'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 392 174.8'
					>
						<path d='M48.9.1L8.5.3C3.8.3 0 4.1 0 8.8v157.5c0 4.7 3.8 8.5 8.5 8.5h38.9c1.3 0 2.7 0 4-.1 6.2-.5 11.2-4.7 12.6-10.7.4-1.6.4-3.3.4-5 0-20.6-.1-41.2.1-61.7.1-7.7-2.9-13.7-10.9-16.2-.1 0-.2-.2-.5-.6 8.4-2.7 11.4-8.6 11.3-16.9-.2-16-.3-32 0-48C64.8 5.8 57.4 0 48.9.1zM36 144.8c0 2.2-1.8 4-4 4s-4-1.8-4-4V24.6c0-2.2 1.8-4 4-4s4 1.8 4 4v120.2zM102.8 98h15.8V71.6h-16.1V28.7H123v-20c0-4.7-3.8-8.5-8.5-8.5L74.2.1v166c0 4.7 3.8 8.5 8.5 8.5h40.5v-29h-20.4V98zM372.2 49.2H392V14.8C392 6.7 385.5.2 377.4.2h-35.6c-8 0-14.6 6.5-14.6 14.6v145.3c0 8.1 6.5 14.6 14.6 14.6h35.6c8 0 14.6-6.5 14.6-14.6V55.7h-19.8c-4.7 0-8.5 3.8-8.5 8.5v82.2c0 2.2-1.7 3.9-3.9 3.9h-.1c-2.1 0-3.9-1.7-3.9-3.9V27.9c0-2.2 1.7-3.9 3.9-3.9h.1c2.1 0 3.9 1.7 3.9 3.9v12.7c-.1 4.8 3.8 8.6 8.5 8.6zM281.3 10.5l16 73.4c.5 2.1-.7 4.3-2.8 4.9-2.2.6-4.4-.8-4.9-3l-17.2-79c-.9-3.9-4.3-6.7-8.3-6.7h-20v174.6h25V76.9c-.1-2.1 1.4-4.1 3.5-4.4 2.3-.2 4.2 1.5 4.4 3.7l4.7 90.4c.2 4.5 4 8.1 8.5 8.1h27.3V.1h-28c-5.3 0-9.3 5-8.2 10.4zM220.1 0h-35.6c-8 0-14.5 6.5-14.5 14.6v131.5h6.9c6 0 10.9 4.9 10.9 10.9v17.6h32.3c8 0 14.5-6.5 14.5-14.6V14.6c0-8.1-6.5-14.6-14.5-14.6zm-13.8 146.4c0 .3 0 .5-.1.8v.1c-.4 1.7-1.9 3-3.8 3h-.1c-2.1 0-3.9-1.8-3.9-3.9V27.8c0-.3 0-.5.1-.8v-.1c.4-1.7 1.9-3 3.8-3h.1c2.2 0 3.9 1.8 3.9 3.9v118.6z' />
						<path d='M176.9 148.4h-16.8V8.9c0-4.7-3.7-8.4-8.4-8.5L132.6.2v166.1c0 4.7 3.8 8.5 8.5 8.5h44.3v-17.9c0-4.7-3.8-8.5-8.5-8.5z' />
					</svg>
				</div>
				<div className='col-span-1 flex space-x-7 items-center'>
					<svg
						className='mx-auto h-[30px] w-[30px]'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 30.859 30.945'
					>
						<g data-name='instagram icone'>
							<g data-name='Group 26'>
								<path
									d='M15.435 3.475c-2.362 0-4.725.006-7.087 0a4.576 4.576 0 0 0-2.035.505 5.1 5.1 0 0 0-2.03 1.79 5.357 5.357 0 0 0-.667 1.466 5.471 5.471 0 0 0-.153 1.612v13.751a4.646 4.646 0 0 0 .5 2.021 5.014 5.014 0 0 0 1.8 2.045 5.6 5.6 0 0 0 1.464.666 5.363 5.363 0 0 0 1.608.148c2.141.008 4.283 0 6.424 0a1.787 1.787 0 0 1 1.4.573 1.643 1.643 0 0 1 .391 1.653 1.719 1.719 0 0 1-.815 1.021 1.51 1.51 0 0 1-.722.205c-2.463.014-4.925.024-7.388-.007a5.237 5.237 0 0 1-1.653-.269c-.439-.153-.9-.263-1.324-.44a7 7 0 0 1-1.102-.587 8.032 8.032 0 0 1-1.1-.83 14.913 14.913 0 0 1-1.139-1.208 6.951 6.951 0 0 1-1.041-1.724 8.161 8.161 0 0 1-.429-1.268 13.308 13.308 0 0 1-.279-1.392 6.193 6.193 0 0 1-.05-.923V9.257c0-.3-.018-.606.006-.906a11.577 11.577 0 0 1 .179-1.534 9.007 9.007 0 0 1 .476-1.442 7.3 7.3 0 0 1 .635-1.288 13.3 13.3 0 0 1 1.143-1.464 6.866 6.866 0 0 1 1.609-1.31 7.184 7.184 0 0 1 1.731-.81c.314-.089.62-.2.933-.3.12-.035.252-.026.376-.052a14.357 14.357 0 0 1 2.959-.147c4.035 0 8.07-.009 12.106.006a10.67 10.67 0 0 1 1.892.178 7.509 7.509 0 0 1 1.438.473 9.518 9.518 0 0 1 1.306.641 8 8 0 0 1 1.673 1.36 8.452 8.452 0 0 1 1.451 2.051 8.925 8.925 0 0 1 .629 1.684 10.487 10.487 0 0 1 .31 2.763c-.007 4.355 0 8.711-.011 13.066a10.685 10.685 0 0 1-.178 1.9 10.219 10.219 0 0 1-.468 1.444 7.093 7.093 0 0 1-.959 1.771 7.373 7.373 0 0 1-1.5 1.606 14.781 14.781 0 0 1-1.224.859 5.548 5.548 0 0 1-.936.444c-.465.179-.941.332-1.416.483a2.228 2.228 0 0 1-.434.062c-.464.05-.928.127-1.394.139a1.635 1.635 0 0 1-1.468-.753 1.747 1.747 0 0 1 1.548-2.7 4.722 4.722 0 0 0 2.281-.583 5.329 5.329 0 0 0 2.447-2.864 4.358 4.358 0 0 0 .256-1.374c-.01-3.886 0-7.771 0-11.657 0-.919-.011-1.839 0-2.758a4.108 4.108 0 0 0-.316-1.48 5.037 5.037 0 0 0-4.8-3.3c-2.282.014-4.564.005-6.846.005Z'
									data-name='Path 319'
								/>
								<path
									d='M15.275 23.196a7.723 7.723 0 1 1 7.851-7.568 7.689 7.689 0 0 1-7.851 7.568Zm4.437-7.717a4.286 4.286 0 1 0-4.186 4.3 4.321 4.321 0 0 0 4.186-4.3Z'
									data-name='Path 320'
								/>
								<path
									d='M24.852 7.756a1.689 1.689 0 0 1-1.7 1.691 1.638 1.638 0 0 1-1.712-1.735 1.69 1.69 0 0 1 1.745-1.684 1.742 1.742 0 0 1 1.667 1.728Z'
									data-name='Path 321'
								/>
							</g>
						</g>
					</svg>
					<Link href={'/contact'}>
						<a className='font-bold animate-changeColor -translate-x-[30px]'>Say Hi !</a>
					</Link>
				</div>
			</header>
		</>
	);
}

export default Header;
