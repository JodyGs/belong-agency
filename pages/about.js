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
import whoweare from '../public/img/whoweare.png'
import whatwedo from '../public/img/whatwedo.png'

function About() {

	const {locale} = useRouter()

	return (
		<div className='overflow-x-hidden'>
			<h1 className='text-center text-6xl md:text-8xl font-agrandir-grand my-8 mb-4 md:mt-24 md:mb-14'>
				About
			</h1>

			<Marquee
				className='text-lg md:text-3xl font-agrandir-grand pt-2 md:pt-3 pb-1 border-y-1 md:border-y-2 border-black bg-belrose'
				speed={60}
				gradient={false}
				direction='right'
			>
				<p className='mr-8 md:mr-24'>big agency skills</p>
				<p className='mr-8 md:mr-24'>small agency vibes</p>
				<p className='mr-8 md:mr-24'>big agency skills</p>
				<p className='mr-8 md:mr-24'>small agency vibes</p>
			</Marquee>

			<div className='flex flex-col lg:flex-row md:justify-around lg:p-20 mt-20 max-w-[1500px] mx-auto'>
				<div className='ml-5 mr-auto bg-belviolet sticker px-5 md:px-12 flex max-w-[200px] max-h-[120px] sm:max-h-[200px] sm:max-w-[350px] justify-center items-center'>
					<Image width={300} height={100} className='object-contain' src={whoweare}  alt="who we are"/>
				</div>
				<div className='mr-4 ml-auto text-right text-justify sm:w-2/3 lg:w-1/2 space-y-5 pt-12 text-sm px-3'>
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
			<div className='flex flex-col space-y-10 md:space-y-0 items-center md:items-start md:flex-row justify-center md:justify-evenly md:space-x-16 mt-20 lg:mt-0'>
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
						<h3 className='font-messapia'>Margaux</h3>
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
						<h3 className='font-messapia'>Magali</h3>
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
			<div className='flex flex-col space-y-10 md:space-y-0 items-center md:items-start md:flex-row justify-center md:justify-evenly md:space-x-16 mt-20'>
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
						<h3 className='font-messapia'>Karine</h3>
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
						<h3 className='font-messapia'>Camille</h3>
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
					<div className='mr-5 ml-auto px-5 md:px-12 bg-belorange sticker flex justify-center items-center max-w-[200px] max-h-[120px] sm:max-h-[200px] sm:max-w-[350px] md:max-w-sm lg:mx-auto'>
					<Image width={300} height={100}  className='object-contain' src={whatwedo} alt="what we do"/>
					</div>
					<div className='mx-auto min-w-[370px] ld:min-w-none p-3 lg:p-0 lg:ml-4 lg:mr-auto w-2/3 text-justify mt-16 text-sm flex flex-col space-y-5'>
						{locale === "fr" ? 		<p className=''>
						De la définition d&apos;une stratégie de communication au déploiement d&apos;une campagne RP, jusqu&apos;à l&apos;organisation d&apos;évènements, nous vous proposons tout un éventail de prises de parole et de rencontres entre votre marque et votre communauté afin de développer votre pouvoir d&apos;expression.
						</p> : <p>
							driving brand awareness and conversion. we&apos;ll develop and execute
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
