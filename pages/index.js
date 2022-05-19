import React from 'react';
import Header from '../components/Header';
import Pills from '../components/Pills';

export default function Home() {
	return (
		<div className='h-screen'>
			<Header />
			<main>
				{/* Hero Banner */}
				<div className='grid grid-cols-12 max-h-[800px] overflow-hidden relative'>
					<div className='bg-belrose col-span-6 font-messapia uppercase text-justify p-4 leading-[1] flex flex-col justify-between h-[800px]'>
						<h1 className='max-w-[870px] mx-auto'>
							<span className='lg:text-7xl'>
								A PR{' '}
								<span className='txtstroke text-transparent'>Boutique</span>{' '}
							</span>
							<span className='lg:text-7xl'>
								Agency with{' '}
								<span className='txtstroke text-transparent'>a</span>{' '}
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
						<p className='max-w-[870px] mx-auto'>
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
							className='fill-belorange h-[1000px] mt-[85px]'
							viewBox='0 0 11.38 30.81'
						>
							<path d='M8.62 0L1.5.04C.67.04 0 .71 0 1.54v27.77c0 .83.67 1.5 1.5 1.5h6.86c.23 0 .48 0 .71-.02 1.09-.09 1.98-.83 2.22-1.89.07-.28.07-.58.07-.88 0-3.63-.02-7.27.02-10.88.02-1.36-.51-2.42-1.92-2.86-.02 0-.04-.04-.09-.11 1.48-.48 2.01-1.52 1.99-2.98-.04-2.82-.05-5.64 0-8.47C11.41.99 10.11-.03 8.62 0zM6.33 25.5c0 .39-.32.71-.71.71s-.71-.32-.71-.71V4.32c0-.39.32-.71.71-.71s.71.32.71.71V25.5z' />
						</svg>
						<svg
							className='fill-belviolet rotate-180 h-[1000px] mt-[400px]'
							viewBox='0 0 11.38 30.81'
						>
							<path d='M8.62 0L1.5.04C.67.04 0 .71 0 1.54v27.77c0 .83.67 1.5 1.5 1.5h6.86c.23 0 .48 0 .71-.02 1.09-.09 1.98-.83 2.22-1.89.07-.28.07-.58.07-.88 0-3.63-.02-7.27.02-10.88.02-1.36-.51-2.42-1.92-2.86-.02 0-.04-.04-.09-.11 1.48-.48 2.01-1.52 1.99-2.98-.04-2.82-.05-5.64 0-8.47C11.41.99 10.11-.03 8.62 0zM6.33 25.5c0 .39-.32.71-.71.71s-.71-.32-.71-.71V4.32c0-.39.32-.71.71-.71s.71.32.71.71V25.5z' />
						</svg>
					</div>
				</div>
				{/* End of Hero Banner ||
				    Bandeau */}
				<div className='flex uppercase justify-around align-center text-4xl font-agrandir-grand pt-3 pb-1 border-y-2 border-black whitespace-nowrap space-x-10'>
					<p>big agency skills</p>
					<p>small agency vibes</p>
					<p>big agency skills</p>
					<p>small agency vibes</p>
				</div>
				{/* End of Bandeau
				What we do */}
				<div className='grid grid-cols-10'>
					<div className='col-span-5 w-full'>
						<div className='py-32 max-w-[360px] mx-auto space-y-20'>
							<svg
								className=''
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 364.656 129.025'
							>
								<g data-name='WHAT WE DO'>
									<g data-name='Group 27'>
										<path
											fill='#161615'
											d='M1.32-.001h21.89l16.931 42.4h.166l16.767-42.4h23.871l17.016 42.4h.083l16.767-42.4h21.807L110.847 58.95h-24.2L69.135 16.63h-.164L51.294 58.95h-24.2Z'
											data-name='Path 322'
										/>
										<path
											fill='#161615'
											d='M140.735-.001h21.558v20.915h32.632V-.001h21.558V58.95h-21.558V35.484h-32.628V58.95h-21.562Z'
											data-name='Path 323'
										/>
										<path
											fill='#161615'
											d='M250.177-.001h25.029l28.829 58.951h-22.387l-4.625-10.292h-29.488l-4.542 10.292h-22.3Zm22.716 36.555-10.408-23.3h-.164l-10.574 23.3Z'
											data-name='Path 324'
										/>
										<path
											fill='#161615'
											d='M320.054 15.147h-23.047V-.001h67.649v15.148h-23.043v43.8h-21.559Z'
											data-name='Path 325'
										/>
										<path
											fill='none'
											stroke='#161615'
											stroke-width='1.727'
											d='M1.32 73.239h20.015l15.482 38.775h.15L52.3 73.242h21.826l15.558 38.772h.076l15.332-38.772h19.943l-23.564 53.9H79.335L63.322 88.447h-.15l-16.163 38.695H24.883Z'
											data-name='Path 326'
										/>
										<path
											fill='none'
											stroke='#161615'
											stroke-width='1.727'
											d='M128.799 73.239h57.023v12.2h-37.914v9.033h34.893v10.466h-34.893v10.012h38.671v12.195h-57.78Z'
											data-name='Path 327'
										/>
										<path
											fill='#161615'
											d='M209.303 73.239h38.444c21 0 32.7 9.637 32.7 26.952s-11.707 26.951-32.7 26.951h-38.444Zm35.724 40.575c10.423 0 16.314-4.894 16.314-13.627s-5.891-13.7-16.314-13.7h-16.541v27.327Z'
											data-name='Path 328'
										/>
										<path
											fill='#161615'
											d='M285.435 100.191c0-17.315 15.861-28.832 39.575-28.832 23.79 0 39.651 11.517 39.651 28.832s-15.861 28.834-39.651 28.834c-23.719 0-39.575-11.519-39.575-28.834Zm59.514 0c0-8.959-8.082-14.981-19.939-14.981s-19.864 6.022-19.864 14.981 8.007 14.982 19.864 14.982 19.934-6.023 19.934-14.982Z'
											data-name='Path 329'
										/>
									</g>
								</g>
							</svg>
							<button className='rounded-full text-white bg-belrose w-full'>
								work
							</button>
						</div>
					</div>
					<div className='col-span-5'>
						<Pills />
					</div>
				</div>
			</main>
		</div>
	);
}
