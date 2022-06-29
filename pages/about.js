import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import magali from '../public/img/Magali.jpg';
import margaux from '../public/img/Margaux.jpg';
import karine from '../public/img/Karine.jpg';
import camille from '../public/img/Camille.jpg';
import Pills from '../components/Pills';
import SayHi from '../components/SayHi'
import { useRouter } from 'next/router';

function About() {

	const {locale} = useRouter()

	return (
		<div className='overflow-x-hidden'>
			<h1 className='text-center text-6xl md:text-8xl font-agrandir-grand mt-8 mb-4 md:mt-32 md:mb-14'>
				About
			</h1>

			<Marquee
				className='text-lg md:text-4xl font-agrandir-grand pt-2 md:pt-3 pb-1 border-y-1 md:border-y-2 border-black bg-belrose'
				speed={60}
				gradient={false}
				direction='right'
			>
				<p className='mr-8 md:mr-24'>big agency skills</p>
				<p className='mr-8 md:mr-24'>small agency vibes</p>
				<p className='mr-8 md:mr-24'>big agency skills</p>
				<p className='mr-8 md:mr-24'>small agency vibes</p>
			</Marquee>

			<div className='flex flex-col lg:flex-row md:justify-around lg:p-20 mt-20'>
				<div className=' ml-5 mr-auto bg-belviolet sticker md:px-12 flex max-w-[200px] max-h-[120px] sm:max-h-[200px] sm:max-w-[350px] justify-center items-center'>
					<svg
						className='max-h-[70%] max-w-[70%] md:max-w-none'
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
				<div className='mr-4 ml-auto text-right md:text-justify sm:w-2/3 lg:w-1/2 space-y-5 pt-12'>
					{locale === 'fr' ? <p>
						Une agence de <span className='font-bold'>Relations Publiques</span> composée d&apos;expertes{' '}
						<span className='italic'>interdisciplinaires</span> dotées d&apos;une forte connaissance du secteur de la beauté et du bien-être et de <span className='font-bold'> 20 ans d&apos;expérience</span> dans des agences RP, des entreprises internationales et en tant que freelance.
						.
					</p> : <p>
						we’re a <span className='font-bold'>pr agency</span> of{' '}
						<span className='italic'>interdisciplinary</span> experts who craft
						brand stories and build communities through media, social and
						<span className='font-bold'> experiential</span>.
					</p>}
					{locale === 'fr' ? <p>
					Notre savoir-faire ? Créer <span className='font-bold'>une communauté</span> par le biais des {' '}
						<span className='italic'>médias, des réseaux sociaux</span> et de <span className='italic'>l&apos;influence,</span> générer de l’engagement et <span className='font-bold'>gagner en notoriété</span>.
					</p> : <p>
						together we have <span className='font-bold'>over 20 years</span> of
						experience in pr agencies,{' '}
						<span className='italic'>global companies</span> and as freelancers,
						working on <span className='italic'>a variety of</span> projects in
						the beauty and <span className='font-bold'>wellness industry</span>.
					</p>}
				</div>
			</div>
			<div className='flex flex-col space-y-10 md:space-y-0 items-center md:items-start md:flex-row justify-center md:space-x-16 mt-20'>
				<div className='max-w-[360px]'>
					<div className='divPhotoTeam'>
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
					
						{locale === "fr" ? <p className='text-xs mt-5 text-justify'>Formée comme RP chez Sisley à Paris pendant 5 ans, Margaux est passée de la beauté et la communication au monde de l&apos;entrepreneuriat à New-York où elle est partie s&apos;installer il y a 3 ans. Elle y a démarré son activité de consulting avec Twice, une start-up américaine co-fondée par Lenny Kravitz.<br/><br/>Elle a cofondé Belong avec Magali en 2019</p> : <p className='text-xs mt-5 text-justify'>Margaux trained as a PR for Sisley for 5 years in Paris, she has switched from beauty and communication to the world of entrepreneurship in New York where she moved 3 years ago. She started her consulting business there, first with Twice, an American start-up co-founded by Lenny Kravitz specialized in oral wellness. She is the co-founder of Belong along with Magali. They both started Belong in 2019 as a one-of-a-kind PR agency specializing in working with sustainable, clean beauty brands.</p>}
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
					{locale === 'fr' ? <p className='  text-xs mt-5 text-justify'>
					Après 7 ans comme rédactrice de mode, Magali a travaillé 13 ans dans les Relations Presse beauté, dont 5 ans au sein de l&apos;agence NiceWork et 8 ans comme Responsable PR France chez Sisley Paris où elle a rencontré Margaux.<br/><br/>Elle a ensuite été consultante RP pour des marques comme Google, le Festival Calvi on the Rocks, l&apos;agence RP Magna Presse, avant de fonder Belong avec Margaux
					</p>: <p className='  text-xs mt-5 text-justify'>
						after 7 years working as a fashion editor with the french press,
						magali moved into pr.<br/><br/>
						she spent 13 years as a beauty pr, 8 of which were as head of pr for
						sisley paris, where she met margaux.<br/><br/>
						she then worked as a pr consultant for brands like google, calvi on
						the rocks festival, pr agencies like magna presse (ernest leoty,
						pigalle hotel...) before co-founding belong in 2019 with margaux.
					</p>}
				</div>
			</div>
			<div className='flex flex-col space-y-10 md:space-y-0 items-center md:items-start md:flex-row justify-center md:space-x-16 mt-20'>
				<div className='max-w-[360px] mx-auto md:mx-0'>
					<div className='divPhotoTeam'>
						<Image
							placeholder='blur'
							height={580}
							width={360}
							src={karine}
							className='photoTeam'
							alt='Magali Gnocchi'
						/>
					</div>
					<div className='name'>
						<h3 className=''>Karine</h3>
					</div>
					{locale === 'fr' ? <p className='  text-xs mt-5 text-justify'>
					Assistante multi-casquettes, Karine a rejoint Belong en février 2021.<br/><br/>Élève à Sup de Web, elle finit en parallèle de son alternance ses études de communication digitale.Elle est également freelance et a lancé son blog.<br/><br/> Elle est à l’image de la GenZ, une slasheuse, engagée sur de multiples causes (du métissage à la clean beauty).
					</p> : <p className='  text-xs mt-5 text-justify'>
						after 7 years working as a fashion editor with the french press,
						magali moved into pr.<br/><br/>
						she spent 13 years as a beauty pr, 8 of which were as head of pr for
						sisley paris, where she met margaux.
						<br/><br/>
						she then worked as a pr consultant for brands like google, calvi on
						the rocks festival, pr agencies like magna presse (ernest leoty,
						pigalle hotel...) before co-founding belong in 2019 with margaux.
					</p>}
				</div>
				<div className='max-w-[360px] mx-auto md:mx-0'>
					<div className='divPhotoTeam'>
						<Image
							placeholder='blur'
							height={580}
							width={360}
							src={camille}
							className='photoTeam'
							alt='Karine'
						/>
					</div>
					<div className='name'>
						<h3 className=''>Camille</h3>
					</div>
					{locale === "fr" ? <p className='  text-xs mt-5 text-justify'>
					Camille est étudiante en Communication et Relations presse.<br /><br />Elle a rejoint Belong en février 2022 pour accompagner l&apos;équipe et vivre de nouvelles aventures ! Intéressée par l&apos;industrie de la beauté, elle connaît toutes les dernières tendances du milieu. Camille relève tous les challenges de l&apos;agence avec joie !
					</p> : <p className='  text-xs mt-5 text-justify'>
					Camille is a Communication and Press Relations student.<br /><br />She joined Belong in February 2022 to accompany the team and experience new adventures! Interested in the beauty industry, she knows all the latest trends in the field. Camille takes on all the agency&apos;s challenges with joy!
					</p>}
				</div>
			</div>

			<div className='flex flex-col-reverse lg:flex-row my-20 sm:my-40'>
				<div className='flex-1 pt-14 sm:pt-28'>
					<Pills locale={locale}/>
				</div>
				<div className='flex-1'>
					<div className='mr-5 ml-auto bg-belorange sticker flex justify-center items-center max-w-[200px] max-h-[120px] sm:max-h-[200px] sm:max-w-[350px] md:max-w-sm lg:mx-auto'>
						<svg
							className='max-h-[70%] max-w-[70%] md:max-w-none '
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
					<div className='ml-4 mr-auto w-2/3 text-justify mt-16 text-sm flex flex-col space-y-5'>
						{locale === "fr" ? 		<p>
						De la définition d’une stratégie de communication au déploiement d'une campagne RP, jusqu’à l’organisation d’évènements, nous vous proposons tout un éventail de prises de parole et de rencontres entre votre marque et votre communauté afin de développer votre pouvoir d’expression.
						</p> : <p>
							driving brand awareness and conversion. we’ll develop and execute
							influencer marketing strategies based on your brand goals to help
							you engage your target audiences.
							from influencer matchmaking to campaign management and influencer
							seeding, we shape the optimal strategy that is right for you and
							amplify your stories through influential voices.
						</p>}
					</div>
				</div>
			</div>
			<SayHi />
		</div>
	);
}

export default About;
