import React from 'react';
import Bandeau from '../components/Bandeau';
import Header from '../components/Header';

function About() {
	return (
		<div>
			<Header />
			<h1 className='text-center text-8xl font-agrandir-grand uppercase mt-32 mb-14'>
				About
			</h1>
			<Bandeau />

			<div className='flex justify-around p-20'>
				<div className='bg-belviolet sticker '>
					<svg
						className='h-[100px]'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 276.037 107.288'
					>
						<g data-name='WHO WE ARE - BEIGE'>
							<g data-name='Group 30'>
								<path
									fill='#fcf8f2'
									d='M0 1.859h19.535l15.108 38.288h.148L49.755 1.859h21.3l15.188 38.288h.075l14.964-38.288h19.461l-23 53.232h-21.6L60.516 16.877h-.148L44.593 55.091h-21.6z'
									data-name='Path 342'
								/>
								<path
									fill='#fcf8f2'
									d='M124.424 1.859h19.239v18.884h29.118V1.859h19.24v53.232h-19.24V33.902h-29.118v21.189h-19.239z'
									data-name='Path 343'
								/>
								<path
									fill='#fcf8f2'
									d='M198.134 28.475c0-17.1 15.479-28.475 38.627-28.475 23.221 0 38.7 11.375 38.7 28.475s-15.479 28.475-38.7 28.475c-23.148-.001-38.627-11.376-38.627-28.475zm58.088 0c0-8.848-7.888-14.8-19.461-14.8s-19.387 5.948-19.387 14.8 7.813 14.794 19.387 14.794 19.461-5.948 19.461-14.794z'
									data-name='Path 344'
								/>
								<path
									fill='none'
									stroke='#fcf8f2'
									stroke-width='1.153'
									d='M152.643 70.508h15.19l17.5 36.2h-13.59l-2.807-6.32h-17.893l-2.757 6.32h-13.543zm13.786 22.448l-6.316-14.309h-.1l-6.417 14.309z'
									data-name='Path 345'
								/>
								<path
									fill='none'
									stroke='#fcf8f2'
									stroke-width='1.153'
									d='M187.882 70.508h30.18c9.626 0 15.14 4.2 15.14 11.578 0 5.107-3.259 8.849-8.924 10.163l9.225 14.459h-14.037l-7.123-12.031h-11.376v12.031h-13.085zm26.27 16.736c3.76 0 5.965-1.67 5.965-4.449 0-2.832-2.205-4.5-5.965-4.5h-13.185v8.95z'
									data-name='Path 346'
								/>
								<path
									fill='none'
									stroke='#fcf8f2'
									stroke-width='1.153'
									d='M237.109 70.508h37.851v8.19h-25.167v6.068h23.16v7.028h-23.16v6.724h25.667v8.19h-38.351z'
									data-name='Path 347'
								/>
								<path
									fill='#fcf8f2'
									d='M0 70.508h13.285l10.277 26.04h.1l10.181-26.04h14.488l10.327 26.04h.051l10.177-26.04H82.12l-15.641 36.2H51.787L41.159 80.719h-.1L30.33 106.708H15.643z'
									data-name='Path 348'
								/>
								<path
									fill='#fcf8f2'
									d='M84.619 70.508h37.849v8.191H97.303v6.067h23.161v7.029H97.303v6.726h25.667v8.19H84.619z'
									data-name='Path 349'
								/>
							</g>
						</g>
					</svg>
				</div>
				<div className='uppercase w-1/4 space-y-5'>
					<p>
						we’re a pr agency of interdisciplinary experts who craft brand
						stories and build communities through media, social and
						experiential.
					</p>
					<p>
						together we have over 20 years of experience in pr agencies, global
						companies and as freelancers, working on a variety of projects in
						the beauty and wellness industry.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
