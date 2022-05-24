import React from 'react';
import Header from '../components/Header';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import magali from '../public/img/Magali.jpg';
import margaux from '../public/img/Margaux.jpg';
import karine from '../public/img/Karine.jpg';
import Pills from '../components/Pills';
import Footer from '../components/Footer';

function About() {
	return (
		<div>
			<Header />
			<h1 className='text-center text-8xl font-agrandir-grand uppercase mt-32 mb-14'>
				About
			</h1>

			<Marquee
				className=' uppercase text-4xl font-agrandir-grand pt-3 pb-1 border-y-2 border-black bg-belrose'
				speed={60}
				gradient={false}
				direction='right'
			>
				<p className='mr-24'>big agency skills</p>
				<p className='mr-24'>small agency vibes</p>
				<p className='mr-24'>big agency skills</p>
				<p className='mr-24'>small agency vibes</p>
			</Marquee>

			<div className='flex justify-around p-20 mt-20'>
				<div className='bg-belviolet sticker px-12'>
					<svg
						className='h-[100px] m-6 mb-0'
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
									d='M152.643 70.508h15.19l17.5 36.2h-13.59l-2.807-6.32h-17.893l-2.757 6.32h-13.543zm13.786 22.448l-6.316-14.309h-.1l-6.417 14.309z'
									data-name='Path 345'
								/>
								<path
									fill='none'
									stroke='#fcf8f2'
									d='M187.882 70.508h30.18c9.626 0 15.14 4.2 15.14 11.578 0 5.107-3.259 8.849-8.924 10.163l9.225 14.459h-14.037l-7.123-12.031h-11.376v12.031h-13.085zm26.27 16.736c3.76 0 5.965-1.67 5.965-4.449 0-2.832-2.205-4.5-5.965-4.5h-13.185v8.95z'
									data-name='Path 346'
								/>
								<path
									fill='none'
									stroke='#fcf8f2'
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
				<div className='uppercase w-1/4 space-y-5 pt-12'>
					<p>
						we’re a <span className='font-bold'>pr agency</span> of{' '}
						<span className='italic'>interdisciplinary</span> experts who craft
						brand stories and build communities through media, social and
						<span className='font-bold'>experiential</span>.
					</p>
					<p>
						together we have <span className='font-bold'>over 20 years</span> of
						experience in pr agencies,{' '}
						<span className='italic'>global companies</span> and as freelancers,
						working on <span className='italic'>a variety of</span> projects in
						the beauty and <span className='font-bold'>wellness industry</span>.
					</p>
				</div>
			</div>
			<div className='flex justify-center space-x-16 mt-20'>
				<div className='max-w-[360px]'>
					<div className='divPhotoTeam '>
						{/* FIXME: Images */}
						<Image
							placeholder='blur'
							height={580}
							width={360}
							src={margaux}
							className='photoTeam'
							alt='Margaux Bonnet'
						/>
					</div>
					<div className='name'>
						<h3 className=''>Margaux</h3>
					</div>
					<p className='uppercase text-xs mt-5 text-justify'>
						margaux trained as a pr for sisley for 5 years in paris, she has
						switched from beauty and communication to the world of
						entrepreneurship in new york where she moved 3 years ago. she
						started her consulting business there, first with twice, an american
						start-up co-founded by lenny kravitz specialized in oral wellness.
					</p>
					<p className='uppercase text-xs mt-5 text-justify'>
						she is the co-founder of belong along with magali. they both started
						belong in 2019 as a one-of-a-kind pr agency specializing in working
						with sustainable, clean beauty brands.
					</p>
				</div>
				<div className='max-w-[360px]'>
					<div className='divPhotoTeam'>
						<Image
							placeholder='blur'
							height={580}
							width={360}
							src={magali}
							className='photoTeam'
							alt='Magali Gnocchi'
						/>
					</div>
					<div className='name'>
						<h3 className=''>Magali</h3>
					</div>
					<p className='uppercase text-xs mt-5 text-justify'>
						after 7 years working as a fashion editor with the french press,
						magali moved into pr.{' '}
					</p>
					<p className='uppercase text-xs mt-5 text-justify'>
						{' '}
						she spent 13 years as a beauty pr, 8 of which were as head of pr for
						sisley paris, where she met margaux.
					</p>
					<p className='uppercase text-xs mt-5 text-justify'>
						{' '}
						she then worked as a pr consultant for brands like google, calvi on
						the rocks festival, pr agencies like magna presse (ernest leoty,
						pigalle hotel...) before co-founding belong in 2019 with margaux.
					</p>
				</div>
				<div className='max-w-[360px]'>
					<div className='divPhotoTeam'>
						<Image
							placeholder='blur'
							height={580}
							width={360}
							src={karine}
							className='photoTeam'
							alt='Karine'
						/>
					</div>
					<div className='name'>
						<h3 className=''>Karine</h3>
					</div>
					<p className='uppercase text-xs mt-5 text-justify'>
						multi-faceted assistant, karine joined belong in february 2021. she
						is a student at sup de web and is finishing her studies in digital
						communication while working at belong.
					</p>
					<p className='uppercase text-xs mt-5 text-justify'>
						{' '}
						she is also a freelancer and has launched her blog. she is like the
						genz, a slasher, committed to multiple causes (from crossbreeding to
						clean beauty).
					</p>
				</div>
			</div>

			<div className='flex my-40'>
				<div className='flex-1 pt-28'>
					<Pills />
				</div>
				<div className='flex-1'>
					<div className='bg-belorange sticker max-w-sm mx-auto'>
						<svg
							className='h-[100px] mx-auto mt-6'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 288.046 113.02'
						>
							<g data-name='WHAT WE DO - BEIGE copie'>
								<g data-name='Group 29'>
									<path
										fill='#fcf8f2'
										d='M1.042 0h17.291l13.374 33.555h.131L45.082 0h18.856l13.441 33.555h.066L90.692 0h17.225L87.559 46.652H68.442L54.609 13.161h-.13L40.516 46.652H21.399Z'
										data-name='Path 334'
									/>
									<path
										fill='#fcf8f2'
										d='M111.171 0H128.2v16.55h25.773V0h17.029v46.652h-17.029v-18.57H128.2v18.57h-17.029Z'
										data-name='Path 335'
									/>
									<path
										fill='#fcf8f2'
										d='M197.617 0h19.775l22.772 46.651h-17.688l-3.653-8.145H195.53l-3.587 8.145h-17.618Zm17.944 28.929L207.34 10.49h-.13l-8.352 18.439Z'
										data-name='Path 336'
									/>
									<path
										fill='#fcf8f2'
										d='M252.813 11.988h-18.2V0h53.437v11.988h-18.2v34.664h-17.03Z'
										data-name='Path 337'
									/>
									<path
										fill='none'
										stroke='#fcf8f2'
										d='M1.042 68.874h15.81l12.229 30.683h.119l12.112-30.683h17.24l12.289 30.683h.06l12.111-30.683h15.75l-18.613 42.657H62.67L50.021 80.909h-.119l-12.768 30.622H19.655Z'
										data-name='Path 338'
									/>
									<path
										fill='none'
										stroke='#fcf8f2'
										d='M101.739 68.874h45.043v9.648h-29.948v7.149h27.558v8.282h-27.558v7.924h30.546v9.651h-45.64Z'
										data-name='Path 339'
									/>
									<path
										fill='#fcf8f2'
										d='M165.33 68.874h30.367c16.585 0 25.832 7.626 25.832 21.329s-9.247 21.328-25.832 21.328H165.33Zm28.218 32.113c8.234 0 12.886-3.873 12.886-10.784s-4.653-10.843-12.886-10.843h-13.065v21.627Z'
										data-name='Path 340'
									/>
									<path
										fill='#fcf8f2'
										d='M225.464 90.203c0-13.7 12.529-22.817 31.261-22.817 18.792 0 31.321 9.114 31.321 22.817s-12.529 22.819-31.322 22.819c-18.732 0-31.26-9.117-31.26-22.819Zm47.01 0c0-7.09-6.384-11.855-15.75-11.855s-15.691 4.765-15.691 11.855 6.325 11.857 15.691 11.857 15.75-4.768 15.75-11.857Z'
										data-name='Path 341'
									/>
								</g>
							</g>
						</svg>
					</div>
					<div className='w-2/3 text-justify mt-16 text-sm'>
						<p className='uppercase'>
							driving brand awareness and conversion. we’ll develop and execute
							influencer marketing strategies based on your brand goals to help
							you engage your target audiences.
						</p>
						<p className='uppercase'>
							{' '}
							from influencer matchmaking to campaign management and influencer
							seeding, we shape the optimal strategy that is right for you and
							amplify your stories through influential voices.
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default About;
