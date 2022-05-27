import React from 'react';
import Header from '../components/Header';
import Pills from '../components/Pills';
import Marquee from 'react-fast-marquee';
import SayHi from '../components/SayHi';
import Footer from '../components/Footer';
import { gsap } from 'gsap';

export default function Home() {
	const upAnim = React.useRef();
	const downAnim = React.useRef();
	const fadeAnim = React.useRef()

	React.useEffect(() => {
		gsap.set(fadeAnim.current, { opacity: '0' });
		gsap.set(downAnim.current, { y: '-100%' });
		gsap.set(upAnim.current, { y: '50%' });
		gsap.to(fadeAnim.current, { opacity: '1', duration: 3 });
		gsap.to(upAnim.current, { y: '0%', duration: 2 });
		gsap.to(downAnim.current, { y: '0%', duration: 2 });
	}, [])

	return (
		<div className='h-screen'>
			<Header />
			<main>
				{/* Hero Banner */}
				<div className='grid grid-cols-12 max-h-[800px] overflow-hidden relative'>
					<div className='bg-belrose col-span-6 font-messapia   text-justify p-4 leading-[1] flex flex-col justify-between h-[800px]'>
						<h1 ref={fadeAnim} className='max-w-[870px] mx-auto'>
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
							ref={downAnim}
							className='fill-belorange h-[1000px] mt-[85px]'
							viewBox='0 0 11.38 30.81'
						>
							<path d='M8.62 0L1.5.04C.67.04 0 .71 0 1.54v27.77c0 .83.67 1.5 1.5 1.5h6.86c.23 0 .48 0 .71-.02 1.09-.09 1.98-.83 2.22-1.89.07-.28.07-.58.07-.88 0-3.63-.02-7.27.02-10.88.02-1.36-.51-2.42-1.92-2.86-.02 0-.04-.04-.09-.11 1.48-.48 2.01-1.52 1.99-2.98-.04-2.82-.05-5.64 0-8.47C11.41.99 10.11-.03 8.62 0zM6.33 25.5c0 .39-.32.71-.71.71s-.71-.32-.71-.71V4.32c0-.39.32-.71.71-.71s.71.32.71.71V25.5z' />
						</svg>
						<svg
							ref={upAnim}
							className='fill-belviolet rotate-180 h-[1000px] mt-[400px]'
							viewBox='0 0 11.38 30.81'
						>
							<path d='M8.62 0L1.5.04C.67.04 0 .71 0 1.54v27.77c0 .83.67 1.5 1.5 1.5h6.86c.23 0 .48 0 .71-.02 1.09-.09 1.98-.83 2.22-1.89.07-.28.07-.58.07-.88 0-3.63-.02-7.27.02-10.88.02-1.36-.51-2.42-1.92-2.86-.02 0-.04-.04-.09-.11 1.48-.48 2.01-1.52 1.99-2.98-.04-2.82-.05-5.64 0-8.47C11.41.99 10.11-.03 8.62 0zM6.33 25.5c0 .39-.32.71-.71.71s-.71-.32-.71-.71V4.32c0-.39.32-.71.71-.71s.71.32.71.71V25.5z' />
						</svg>
					</div>
				</div>
				{/* End of Hero Banner ||
				    Bandeau */}
				<div className='flex   justify-around align-center text-4xl font-agrandir-grand pt-3 pb-1 border-y-2 border-black whitespace-nowrap space-x-10 overflow-hidden'>
					<p>big agency skills</p>
					<p>small agency vibes</p>
					<p>big agency skills</p>
					<p>small agency vibes</p>
				</div>
				{/* End of Bandeau
				What we do */}
				<div className='flex justify-between'>
					<div className='w-full'>
						<div className='py-32 max-w-[360px] mx-auto space-y-14'>
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
											d='M1.32 73.239h20.015l15.482 38.775h.15L52.3 73.242h21.826l15.558 38.772h.076l15.332-38.772h19.943l-23.564 53.9H79.335L63.322 88.447h-.15l-16.163 38.695H24.883Z'
											data-name='Path 326'
										/>
										<path
											fill='none'
											stroke='#161615'
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
							<button className='belButton'>work</button>
						</div>
					</div>
					<div className='w-full pt-32'>
						<Pills />
					</div>
				</div>
				<Marquee
					className='w-full bg-belorange py-8 fill-belrose'
					speed={60}
					gradient={false}
					direction='right'
				>
					<svg
						className='h-14 mr-20'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 256 45.452'
					>
						<g data-name='Group 24'>
							<path
								d='m185.424 29.696 1.813 8.75c-4.668 5.359-12.359-4.046-1.813-8.75Zm13.742 11.131s-.992-.142-1.018-.152c-.86-.082-1.1-1.9-1.1-1.9 0-.017-1.826-10.8-1.826-10.8l-.432-2.1a37.5 37.5 0 0 0-1.765-6.705c-2.806-6.476-10.858-7.541-16.788-5.792a11.518 11.518 0 0 0-1.852.774v4.014a8.123 8.123 0 0 1 6.743-.206c2.5 1.207 3.21 4.279 3.34 5.551 0 .022.219 1.422.219 1.422-2.892.434-6.487 1.145-9.136 3.006a9.731 9.731 0 0 0-4.174 8.948 8.963 8.963 0 0 0 5.793 7.731c3.712 1.307 8.808 1.1 11.838-2.377.017-.017.371-.41.371-.41l.857.831c2.21 2.308 4.632 2.236 7.438 2.153l1.489-.03v-3.959Zm-72.2-1.939a11.439 11.439 0 0 1-7.865 1.606c-4.363-.608-5.711-7.41-5.711-7.41l16.83-5.413s-.317-7.32-4.378-11.293a13.366 13.366 0 0 0-14.542-2.589c-3.087 1.19-5.941 4.387-7.265 8.139-2.587 7.143-1.048 15.134 3.83 19.882 4.5 4.292 11.5 4.211 16.559 2.7-.019 0 2.548-1.091 2.548-1.091v-4.534ZM113.16 28.52c-.267-3.073.114-6.359.857-7.867.753-1.532 1.6-2.122 2.648-2.248 4.462-.539 4.957 7.61 4.957 7.61l-8.463 2.524c.005.005 0-.024 0-.019Zm139.585 10.368a11.436 11.436 0 0 1-7.864 1.606c-4.362-.608-5.71-7.41-5.71-7.41L256 27.671s-.316-7.32-4.378-11.293a13.366 13.366 0 0 0-14.544-2.589c-3.085 1.19-5.939 4.387-7.264 8.139-2.586 7.143-1.048 15.134 3.831 19.882 4.5 4.292 11.505 4.211 16.559 2.7-.018 0 2.547-1.091 2.547-1.091v-4.534ZM238.94 28.52c-.265-3.073.114-6.359.858-7.867.753-1.532 1.6-2.122 2.648-2.248 4.463-.539 4.957 7.61 4.957 7.61l-8.464 2.524c.005.005 0-.024 0-.019ZM57.449 29.733l1.813 8.749c-4.669 5.359-12.359-4.047-1.813-8.749Zm13.742 11.128s-.993-.142-1.018-.152c-.859-.082-1.1-1.9-1.1-1.9 0-.017-1.826-10.8-1.826-10.8l-.432-2.1a37.492 37.492 0 0 0-1.765-6.7c-2.806-6.476-10.857-7.541-16.788-5.793a11.5 11.5 0 0 0-1.852.773v4.014a8.124 8.124 0 0 1 6.742-.207c2.5 1.208 3.21 4.279 3.34 5.552 0 .021.22 1.422.22 1.422-2.892.434-6.486 1.145-9.136 3.006a9.731 9.731 0 0 0-4.174 8.948 8.963 8.963 0 0 0 5.798 7.732c3.712 1.307 8.808 1.1 11.837-2.377.018-.017.371-.41.371-.41l.858.831c2.21 2.308 4.632 2.236 7.438 2.153l1.489-.03v-3.959Zm140.583-23.364.009 27.3h9.777V27.32l.039-.653a9.977 9.977 0 0 1 .847-4.182c1.463-2.815 4.852-2.755 7.221-2.45l1.719-7.335a7.581 7.581 0 0 0-2.659-.455c-4.376 0-6.763 5.054-6.79 5.111l-.414.971v-6.112l-9.744 5.282Zm-110.258-5.22-9.9 5.284v27.223h9.925l-.021-32.5Zm.265-8.647A5.96 5.96 0 0 0 99.609.846a6.084 6.084 0 0 0-7.241.872 5.89 5.89 0 0 0-1.606 5.231 5.493 5.493 0 0 0 3.049 3.889 6.282 6.282 0 0 0 7.145-1.679 6.247 6.247 0 0 0 .825-5.535v.005Zm108.443 8.611-9.9 5.284v27.223h9.925l-.021-32.5Zm.265-8.647A5.958 5.958 0 0 0 208.317.81a6.085 6.085 0 0 0-7.242.872 5.892 5.892 0 0 0-1.606 5.231 5.493 5.493 0 0 0 3.049 3.89 6.283 6.283 0 0 0 7.145-1.679 6.247 6.247 0 0 0 .825-5.535v.005Zm-57.673 35.8c-2.6-1.348-4.779-3.327-5.058-9.005-.325-6.613 1-11.26 4.544-12.607 2.691-1.022 6.387 1.232 6.387 1.232l.037-5.345a15.886 15.886 0 0 0-10.753-.637c-5.135 1.634-8.444 5.618-9.617 12.133a21.371 21.371 0 0 0 2.185 14.109c2.72 4.461 7.876 6.782 13.757 5.987a45.338 45.338 0 0 0 4.934-1.238l-.046-4.939s-3.686 1.7-6.368.311Zm7.578 5.36h9.755V2.522l-9.755 5.2v37.033ZM72.328 17.497l.008 27.3h9.777V27.321l.039-.653A9.952 9.952 0 0 1 83 22.486c1.463-2.815 4.852-2.755 7.222-2.45l1.718-7.335a7.579 7.579 0 0 0-2.659-.455c-4.377 0-6.764 5.054-6.79 5.111l-.414.971v-6.112l-9.744 5.282ZM0 17.442v27.363h9.6l.019-20.486a3.174 3.174 0 0 1 3.19-2.953 3.225 3.225 0 0 1 3 2.953s0 20.091 0 20.464h10.014c0-.374-.017-20.464-.017-20.464a3.3 3.3 0 0 1 3.369-2.953 3.183 3.183 0 0 1 2.925 2.953v20.455h10.07l-.017-23.7a16.615 16.615 0 0 0-.263-3.524 5.956 5.956 0 0 0-4.209-4.242 9.721 9.721 0 0 0-11.115 4.633l-.225.374-.16-.4c-1.2-2.974-3.086-4.62-5.62-4.891-4.217-.653-7.472.946-10.576 5.188l-.389.533v-6.169L0 17.442Z'
								data-name='Path 310'
							/>
						</g>
					</svg>
					<svg
						className='h-14 mr-20'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 135.687 46.354'
					>
						<g data-name='Group 23'>
							<path
								d='M8.417.73c-.018.379-.046.7-.046 1.018v19.464c0 1.273.167 1.369 1.384 1.014a3.8 3.8 0 0 0 2.688-2.846c.413-1.551.61-3.161.9-4.746.053-.291.1-.583.143-.875l.314.025v17.493l-.337.031c-.04-.311-.063-.625-.123-.932a45.865 45.865 0 0 0-1-4.835 3.535 3.535 0 0 0-3.909-2.377V45.5a6.655 6.655 0 0 0 8.042-4.217 55.149 55.149 0 0 0 1.383-6.3.759.759 0 0 1 .309-.532v11.788H.082l-.051-.3c.841-.575 1.911-.037 2.9-.364V.697L.002.543l.03-.389h18.16v11.277l-.306.077c-.081-.344-.168-.686-.241-1.032a35.161 35.161 0 0 0-1.214-5.537C15.1 1.53 12.44.234 8.417.73Z'
								data-name='Path 306'
							/>
							<path
								d='M120.347.513h-2.864l-.012-.362a6.45 6.45 0 0 1 .951-.14c5.412-.009 10.823 0 16.235-.011.585 0 1.042 0 1.035.827-.031 3.407-.014 6.815-.019 10.222a1.9 1.9 0 0 1-.083.392l-.318.036c-.07-.657-.125-1.316-.213-1.971-.37-2.739-.931-5.362-3.111-7.358-1.659-1.519-3.6-1.636-5.62-1.458-.209.018-.514.683-.517 1.05-.036 4.313-.024 8.628-.024 12.941v6.634c0 1.141.27 1.3 1.367.937 1.9-.625 2.712-2.164 3.13-3.941a34.954 34.954 0 0 0 .475-3.633c.037-.3.087-.591.153-1.03.533.715.741 14.411.388 17.562l-.277.079c-.088-.415-.172-.831-.266-1.244a47.4 47.4 0 0 0-1.162-4.895 3.451 3.451 0 0 0-3.81-2.014v1.03c0 6.743.016 13.485-.018 20.228 0 .956.212 1.274 1.238 1.326 4.313.22 6.776-2.771 7.593-6.37.333-1.467.457-2.981.681-4.474a.52.52 0 0 1 .3-.422v11.7h-18.09l-.011-.349h2.869Z'
								data-name='Path 307'
							/>
							<path
								d='M59.627 46.235H41.04c.32-.886.982-.472 1.444-.534a13.667 13.667 0 0 1 1.756-.018V.696L41.083.543l.041-.379h11.954l.014.357h-3.134v45.017c3.88.8 7.013-.986 8.243-4.922a47.37 47.37 0 0 0 1.069-5.7 1.075 1.075 0 0 1 .357-.7Z'
								data-name='Path 308'
							/>
							<path
								d='M79.128.167h11.844l.019.464c-.776 0-1.554.031-2.328-.009-.684-.035-.953.206-.952.929q.025 21.86.021 43.721a1.071 1.071 0 0 0 .043.213c3.015.677 5.824-.119 7.4-2.656a15.245 15.245 0 0 0 2.04-7.4c.023-.419.1-.835.158-1.252l.331.028v11.941c-1.241.377-18.044.23-18.8-.364h3.41c.026-.554.059-.936.059-1.319q0-21.263.025-42.525c0-1.059-.3-1.434-1.331-1.324a15.172 15.172 0 0 1-1.964-.035Z'
								data-name='Path 309'
							/>
						</g>
					</svg>
				</Marquee>
				<div>
					<div className='h-80'></div>
					<SayHi />
				</div>
			</main>
			<Footer />
		</div>
	);
}
