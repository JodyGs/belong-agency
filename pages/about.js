import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import magali from '../public/img/Magali.jpg';
import margaux from '../public/img/Margaux.jpg';
import karine from '../public/img/Karine.jpg';
import camille from '../public/img/Camille.jpg';
import Pills from '../components/Pills';
import SayHi from '../components/SayHi';
import { useRouter } from 'next/router';

function About() {
	const { locale } = useRouter();
	const router = useRouter();
	const [blockText, setBlockText] = React.useState(0);


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

			<div className='flex flex-col mt-20 lg:w-1/2'>
				<div className='bg-belviolet sticker mx-3 md:max-w-md lg:max-w-lg md:w-full md:mx-auto'>
					<h2 className='font-agrandir-grand text-[33px] text-belbeige text-center lg:text-5xl p-1 pt-3'>
						Who we are
					</h2>
				</div>
				<div className='text-center space-y-5 pt-12 text-xs lg:text-sm px-3 lg:max-w-lg lg:mx-auto mb-10 lg:text-left'>
					{locale === 'fr' ? (
						<p>
							Une agence de{' '}
							<span className='font-bold'>Relations Publiques</span> composée
							d&apos;expertes{' '}
							<span className='italic'>interdisciplinaires</span> dotées
							d&apos;une forte connaissance du secteur de la beauté et du
							bien-être et de{' '}
							<span className='font-bold'> 20 ans d&apos;expérience</span> dans
							des agences RP, des entreprises internationales et en tant que
							freelance. .
						</p>
					) : (
						<p>
							we’re a <span className='font-bold'>pr agency</span> of{' '}
							<span className='italic'>interdisciplinary</span> experts who
							craft brand stories and build communities through media, social
							and
							<span className='font-bold'> experiential</span>.
						</p>
					)}
					{locale === 'fr' ? (
						<p>
							Notre savoir-faire ? Créer{' '}
							<span className='font-bold'>une communauté</span> par le biais des{' '}
							<span className='italic'>médias, des réseaux sociaux</span> et de{' '}
							<span className='italic'>l&apos;influence,</span> générer de
							l’engagement et{' '}
							<span className='font-bold'>gagner en notoriété</span>.
						</p>
					) : (
						<p>
							together we have <span className='font-bold'>over 20 years</span>{' '}
							of experience in pr agencies,{' '}
							<span className='italic'>global companies</span> and as
							freelancers, working on{' '}
							<span className='italic'>a variety of</span> projects in the
							beauty and <span className='font-bold'>wellness industry</span>.
						</p>
					)}
				</div>
			</div>
			<div className='flex flex-col space-y-10 md:space-y-0 md:items-start md:flex-row flex-wrap justify-between items-center md:px-5 lg:px-10 lg:mt-10'>
				<div className='max-w-[360px] md:mb-14'>
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

					{locale === 'fr' ? (
						<p className='text-xs lg:text-sm mt-5 text-justify'>
							Formée comme RP chez Sisley à Paris pendant 5 ans, Margaux est
							passée de la beauté et la communication au monde de
							l&apos;entrepreneuriat à New-York où elle est partie
							s&apos;installer il y a 3 ans. Elle y a démarré son activité de
							consulting avec Twice, une start-up américaine co-fondée par Lenny
							Kravitz.
							<br />
							<br />
							Elle a cofondé Belong avec Magali en 2019.
						</p>
					) : (
						<p className='text-xs lg:text-sm mt-5 text-justify'>
							Margaux trained as a PR for Sisley for 5 years in Paris, she has
							switched from beauty and communication to the world of
							entrepreneurship in New York where she moved 3 years ago. She
							started her consulting business there, first with Twice, an
							American start-up co-founded by Lenny Kravitz specialized in oral
							wellness. She is the co-founder of Belong along with Magali. They
							both started Belong in 2019 as a one-of-a-kind PR agency
							specializing in working with sustainable, clean beauty brands.
						</p>
					)}
				</div>
				<div className='max-w-[360px] md:mb-14'>
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
					{locale === 'fr' ? (
						<p className='  text-xs lg:text-sm mt-5 text-justify'>
							Après 7 ans comme rédactrice de mode, Magali a travaillé 13 ans
							dans les Relations Presse beauté, dont 5 ans au sein de
							l&apos;agence NiceWork et 8 ans comme Responsable PR France chez
							Sisley Paris où elle a rencontré Margaux.
							<br />
							<br />
							Elle a ensuite été consultante RP pour des marques comme Google,
							le Festival Calvi on the Rocks, l&apos;agence RP Magna Presse,
							avant de fonder Belong avec Margaux.
						</p>
					) : (
						<p className='  text-xs lg:text-sm mt-5 text-justify'>
							after 7 years working as a fashion editor with the french press,
							magali moved into pr.
							<br />
							<br />
							she spent 13 years as a beauty pr, 8 of which were as head of pr
							for sisley paris, where she met margaux.
							<br />
							<br />
							she then worked as a pr consultant for brands like google, calvi
							on the rocks festival, pr agencies like magna presse (ernest
							leoty, pigalle hotel...) before co-founding belong in 2019 with
							margaux.
						</p>
					)}
				</div>
				<div className='max-w-[360px] md:pt-10 lg:pt-0 md:mb-14'>
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
					{locale === 'fr' ? (
						<p className='  text-xs lg:text-sm mt-5 text-justify'>
							Assistante multi-casquettes, Karine a rejoint Belong en février
							2021.
							<br />
							<br />
							Élève à Sup de Web, elle finit en parallèle de son alternance ses
							études de communication digitale.Elle est également freelance et a
							lancé son blog.
							<br />
							<br /> Elle est à l’image de la GenZ, une slasheuse, engagée sur
							de multiples causes (du métissage à la clean beauty).
						</p>
					) : (
						<p className='  text-xs lg:text-sm mt-5 text-justify'>
							after 7 years working as a fashion editor with the french press,
							magali moved into pr.
							<br />
							<br />
							she spent 13 years as a beauty pr, 8 of which were as head of pr
							for sisley paris, where she met margaux.
							<br />
							<br />
							she then worked as a pr consultant for brands like google, calvi
							on the rocks festival, pr agencies like magna presse (ernest
							leoty, pigalle hotel...) before co-founding belong in 2019 with
							margaux.
						</p>
					)}
				</div>
				<div className='max-w-[360px] md:pt-10 lg:pt-0 md:mb-14'>
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
					{locale === 'fr' ? (
						<p className='  text-xs lg:text-sm mt-5 text-justify'>
							Camille est étudiante en Communication et Relations presse.
							<br />
							<br />
							Elle a rejoint Belong en février 2022 pour accompagner
							l&apos;équipe et vivre de nouvelles aventures ! Intéressée par
							l&apos;industrie de la beauté, elle connaît toutes les dernières
							tendances du milieu. Camille relève tous les challenges de
							l&apos;agence avec joie !
						</p>
					) : (
						<p className='  text-xs lg:text-sm mt-5 text-justify'>
							Camille is a Communication and Press Relations student.
							<br />
							<br />
							She joined Belong in February 2022 to accompany the team and
							experience new adventures! Interested in the beauty industry, she
							knows all the latest trends in the field. Camille takes on all the
							agency&apos;s challenges with joy!
						</p>
					)}
				</div>
			</div>

			<div className='flex flex-col-reverse lg:flex-row my-10 sm:my-40 md:mb-14 lg:mt-20'>
				<div className='max-w-xs mx-auto mb-10 mt-14 lg:mt-10'>
						<Pills {...{locale, blockText, setBlockText}} />
						<button
								onClick={() => {
									router.push('/work');
								}}
								className='belButton max-w-[230px] lg:max-w-xs mb-10 mx-auto block lg:hidden mt-12'
							>
								work
							</button>
					</div>
				<div className='lg:w-1/2 lg:mt-8'>
					<div className='bg-belorange sticker mx-3 md:max-w-md lg:max-w-lg md:w-full md:mx-auto lg:right-0'>
						<h2 className='font-agrandir-grand text-[33px] text-center text-belbeige lg:text-5xl p-1 pt-3'>
							What we do
						</h2>
					</div>
					<div className='mx-auto min-w-[370px] md:min-w-none p-3 w-2/3 text-center lg:text-right mt-10 text-xs lg:text-sm flex flex-col space-y-5 lg:pr-0 lg:h-[200px] lg:max-w-lg'>
						{locale === 'fr' ? <p className='lg:hidden'>De la définition d&apos;une stratégie de communication au déploiement d&apos;une campagne RP, jusqu&apos;a l&apos;organisation d&apos;évènements, nous vous proposons tout un éventail de prises de parole et de rencontres entre votre marque et votre communauté afin de développer votre pouvoir d&apos;expression.</p> : <p className='lg:hidden'>driving brand awareness and conversion. we&apos;ll develop and execute influencer marketing strategies based on your brand goals to help you engage your target audiences.<br/><br/>from influencer matchmaking to campaign management and influencer seeding, we shape the optimal strategy that is right for you and amplify your stories through influential voices.</p>}
						<div className='hidden lg:block'>
					{blockText === 1 && locale === 'fr'
									? <p>Nous maximisons la visibilité de votre marque dans les médias tout au long de l&apos;année à travers un éventail d&apos;actions et de rendez-vous réguliers avec cette cible prescriptrice.</p>
									: blockText === 2 && locale === 'fr'
									? <p>De la recherche d&apos;influenceurs à la gestion de campagne en passant par l&apos;influence organique, nous élaborons des stratégies afin de vous aider à engager votre communauté et amplifier vos histoires grâce à des voix influentes.</p>
									: blockText === 3 && locale === 'fr'
									? <p>Chaque marque a une histoire unique. Relations Publiques, Partenariats, Marketing d&apos;influence… En fonction de vos objectifs, nous élaborons et mettons en œuvre une stratégie de communication sur mesure.</p>
									: blockText === 4 && locale === 'fr'
									? <p>Nous mettons en relation des marques et des talents pour développer des collaborations qui leur permettront de surprendre, d&apos;accroître leur notoriété ou encore d&apos;explorer un nouveau territoire d&apos;expression.</p>
									: blockText === 5 && locale === 'fr'
									? <p>Qu&apos;il s&apos;agisse d&apos;un événement en personne ou virtuel, nous vous offrons une série d&apos;opportunités pour rencontrer votre communauté et développer votre pouvoir d&apos;expression.</p>
									: blockText === 6 && locale === 'fr'
									? <p>Distinctif, beau et porteur de sens.\n Grâce à notre réseau mondial d&apos;artistes (MUA, photographe, vidéaste, styliste, etc.), nous créons des contenus mémorables et significatifs pour tous vos outils de communication.</p>
									: blockText === 0 && locale === 'fr'
									? <p>créer une communauté par le biais des médias, des réseaux sociaux et de l'influence, générer de l’engagement et gagner en notoriété.<br/><br/>nous nous concentrons sur la meilleure façon de relier l&apos;histoire de votre marque à vos consommateurs.</p>
									: blockText === 1 && locale === 'en'
									? <p>Earning Media Coverage to Drive Credibility and Success. We&apos;ll maximize your brand&apos;s visibility to establish trust among target consumers through authentic, third-party opinions. An honest, uncompensated endorsement adds credibility to the stories you tell through paid and owned media.</p>
									: blockText === 2 && locale === 'en'
									? <p>Driving Brand Awareness and Conversion. We&apos;ll develop and execute influencer marketing strategies based on your brand goals to help you engage your target audiences. From influencer matchmaking to campaign management and influencer seeding, we shape the optimal strategy that is right for you and amplify your stories through influential voices.</p>
									: blockText === 3 && locale === 'en'
									? <p>Every brand has a unique story. We&apos;ll combine best-in-class PR and influencer marketing services to establish and implement a strong brand strategy.</p>
									: blockText === 4 && locale === 'en'
									? <p>We connect brands and talents to set up partnerships that will allow them to surprise, drive awareness or explore a new territory of expression.</p>
									: blockText === 5 && locale === 'en'
									? <p>Whether live or virtual, physical or digital, we offer a range of opportunities for your brand to connect with your audience, establish deep connections and make a meaningful impression.</p>
									: blockText === 6 && locale === 'en'
									? <p>Distinctive, beautiful, and imbued with meaning. Thanks to our global network of artists (MUA, photographer, videographer, stylist, etc), we create memorable and meaningful content for all your communication tools.</p>
									: <p>we&apos;re a pr agency of interdisciplinary experts who craft brand stories and build communities through media, social and experiential.<br/><br/>well-connected to beauty and lifestyle influencers and media, we get people talking and build brands through creative thinking, teamwork and hard work.</p>}
									</div>
					</div>
				</div>
			</div>
			<SayHi />
		</div>
	);
}

export default About;
