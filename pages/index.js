import React from 'react';
import Header from '../components/Header';

export default function Home() {
	return (
		<div className='h-screen'>
			<Header />
			<main>
				{/* Hero Banner */}
				<div className='grid grid-cols-12 max-h-[800px] overflow-hidden relative'>
					<div className='bg-belrose col-span-6 font-messapia uppercase text-justify p-4 leading-[1] flex flex-col justify-between h-[800px]'>
						<h1 className='max-w-[870px]'>
							<span className='lg:text-7xl'>
								A PR <span className='txtstroke text-transparent'>Boutique</span>{' '}
							</span>
							<span className='lg:text-7xl'>
								Agency with <span className='txtstroke text-transparent'>a</span>{' '}
							</span>
							<span className='text-[110px]'>
								<span className='txtstroke text-transparent'>focus</span> on
							</span>{' '}
							<span className='text-[83px]'>
								Sustainable{' '}
								<span className='txtstroke text-transparent text-[140px]'>
									Beauty
								</span>
							</span>
						</h1>
						<p>
							* We{' '}
							<span className='txtstroke-thin text-transparent text-[19px]'>
								help
							</span>{' '}
							our clients to create content and communicate their stories
							effectively{' '}
							<span className='txtstroke-thin text-transparent text-[19px]'>
								to gain
							</span>{' '}
							maximum exposure and generate{' '}
							<span className='txtstroke-thin text-transparent text-[19px]'>
								sales
							</span>
						</p>
					</div>
					<div className='col-span-6 flex mx-auto space-x-10'>
						<svg
							className='fill-belorange h-[1000px] mt-[10vh]'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 11.38 30.81'
						>
							<path d='M8.62 0L1.5.04C.67.04 0 .71 0 1.54v27.77c0 .83.67 1.5 1.5 1.5h6.86c.23 0 .48 0 .71-.02 1.09-.09 1.98-.83 2.22-1.89.07-.28.07-.58.07-.88 0-3.63-.02-7.27.02-10.88.02-1.36-.51-2.42-1.92-2.86-.02 0-.04-.04-.09-.11 1.48-.48 2.01-1.52 1.99-2.98-.04-2.82-.05-5.64 0-8.47C11.41.99 10.11-.03 8.62 0zM6.33 25.5c0 .39-.32.71-.71.71s-.71-.32-.71-.71V4.32c0-.39.32-.71.71-.71s.71.32.71.71V25.5z' />
						</svg>
						<svg
							className='fill-belviolet rotate-180 h-[1000px] mt-[40vh]'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 11.38 30.81'
						>
							<path d='M8.62 0L1.5.04C.67.04 0 .71 0 1.54v27.77c0 .83.67 1.5 1.5 1.5h6.86c.23 0 .48 0 .71-.02 1.09-.09 1.98-.83 2.22-1.89.07-.28.07-.58.07-.88 0-3.63-.02-7.27.02-10.88.02-1.36-.51-2.42-1.92-2.86-.02 0-.04-.04-.09-.11 1.48-.48 2.01-1.52 1.99-2.98-.04-2.82-.05-5.64 0-8.47C11.41.99 10.11-.03 8.62 0zM6.33 25.5c0 .39-.32.71-.71.71s-.71-.32-.71-.71V4.32c0-.39.32-.71.71-.71s.71.32.71.71V25.5z' />
						</svg>
					</div>
				</div>
				{/* End of Hero Banner ||
				    Bandeau */}
				<div className='flex uppercase justify-around align-center text-[45px] font-agrandir-grand pt-3 pb-1 border-y-2 border-black whitespace-nowrap space-x-10'>
					<p>big agency skills</p>
					<p>small agency vibes</p>
					<p>big agency skills</p>
				</div>
				{/* End of Bandeau
				What we do */}
				<div className='grid grid-cols-10'>
					<div className='col-span-5'>
					
					</div>
					<div className='col-span-5 bg-green-600'></div>
				</div>
			</main>
		</div>
	);
}
