import React from 'react';
import Pills from '../components/Pills';
import Marquee from 'react-fast-marquee';
import SayHi from '../components/SayHi';
import { gsap } from 'gsap';
import teamBelong from '../public/img/PHOTOHOME.jpg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import prBoutique from '../public/img/pr-boutique.png';
import prBoutiqueFr from '../public/img/pr-boutique-fr.png';

export default function Home() {
	const upAnim = React.useRef();
	const downAnim = React.useRef();
	const fadeAnim = React.useRef();
	const router = useRouter();
	const { locale } = useRouter();
	const [blockText, setBlockText] = React.useState(0);

	React.useEffect(() => {
		gsap.set(fadeAnim.current, { opacity: '0' });
		gsap.set(downAnim.current, { y: '-100%' });
		gsap.set(upAnim.current, { y: '50%' });
		gsap.to(fadeAnim.current, { opacity: '1', duration: 3 });
		gsap.to(upAnim.current, { y: '0%', duration: 2 });
		gsap.to(downAnim.current, { y: '0%', duration: 2 });
	}, []);

	return (
		<div className='w-full scrollbar-hide overflow-x-hidden'>
			<main className='h-full flex flex-col'>
				{/* Hero Banner */}
				<div className='grid grid-cols-12 max-h-[300px] md:max-h-[800px] overflow-hidden relative'>
					<div className={`bg-belrose col-span-12 lg:col-span-6 font-messapia p-4 leading-[1] flex flex-col ${locale === "fr" ? 'space-y-12' : 'space-y-3' } md:space-y-0 md:justify-between h-[800px]`}>
						{locale === 'fr' ? (
							<Image
							className=''
								src={prBoutiqueFr}
								alt='a pr boutique agency with a focus on sustainable beauty'
							/>
						) : (
							<Image
								src={prBoutique}
								alt='a pr boutique agency with a focus on sustainable beauty'
							/>
						)}

							{locale === 'fr' ? 	<p className='mx-auto text-[10px] md:text-[19px] mb-3'>
							* De la définition d&apos;une{' '}
							<span className='txtstroke-thin text-transparent text-[10px] md:text-[19px]'>
								stratégie
							</span>{' '}
							de communication au déploiement d&apos;une {' '}
							<span className='txtstroke-thin text-transparent text-[10px] md:text-[19px]'>
							campagne RP,
							</span>{' '}
							jusqu&apos;à l&apos;organisation d&apos;évènements.
						</p> : 	<p className='mx-auto text-[10px] md:text-[19px] mb-3'>
							* We{' '}
							<span className='txtstroke-thin text-transparent text-[10px] md:text-[19px]'>
								help
							</span>{' '}
							our clients to create content and communicate their stories
							effectively{' '}
							<span className='txtstroke-thin text-transparent text-[10px] md:text-[19px]'>
								to gain
							</span>{' '}
							maximum exposure.
						</p>}
					
					</div>
					<div className='hidden lg:flex col-span-6 mx-auto space-x-10'>
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
				<Marquee
					className='text-lg md:text-3xl font-agrandir-grand pt-2 md:pt-3 pb-1 border-y-2 md:border-y-2 border-black'
					speed={60}
					gradient={false}
					direction='right'
				>
					<p className='mr-8 md:mr-24'>big agency skills</p>
					<p className='mr-8 md:mr-24'>small agency vibes</p>
					<p className='mr-8 md:mr-24'>big agency skills</p>
					<p className='mr-8 md:mr-24'>small agency vibes</p>
				</Marquee>
				{/* End of Bandeau
				What we do */}
				<div className='flex flex-col md:flex-row mt-10 lg:mt-16 lg:mb-14 md:pl-3 lg:pl-0'>
					<div className='lg:w-1/2'>
						<div className='max-w-xs lg:max-w-lg mx-auto space-y-8 mt-2'>
							<h2 className='font-agrandir-grand text-[33px] lg:text-5xl font-extrabold w-full text-center md:mt-14 lg:mt-0'>
								What we do
							</h2>
							<p className='text-xs max-w-xs text-center mx-auto w-full lg:hidden '>
								{locale === 'fr'
									? "Nous maximisons la visibilité de votre marque dans les médias tout au long de l'année à travers un éventail d'actions et de rendez-vous réguliers avec cette cible prescriptrice."
									: 'We maximize the visibility of your brand in the media throughout the year through an engagement of actions and regular meetings with this target audience.'}
							</p>
							<p
								className={`text-sm max-w-xs lg:max-w-lg lg:px-7 lg:text-left 2lg:text-sm'
								} text-center mx-auto w-full hidden lg:block`}
							>
								{blockText === 1 && locale === 'fr'
									? "Nous maximisons la visibilité de votre marque dans les médias tout au long de l'année à travers un éventail d'actions et de rendez-vous réguliers avec cette cible prescriptrice."
									: blockText === 2 && locale === 'fr'
									? "De la recherche d'influenceurs à la gestion de campagne en passant par l'influence organique, nous élaborons des stratégies afin de vous aider à engager votre communauté et amplifier vos histoires grâce à des voix influentes."
									: blockText === 3 && locale === 'fr'
									? 'Chaque marque a une histoire unique. Relations Publiques, Partenariats, Marketing d’influence… En fonction de vos objectifs, nous élaborons et mettons en œuvre une stratégie de communication sur mesure.'
									: blockText === 4 && locale === 'fr'
									? "Nous mettons en relation des marques et des talents pour développer des collaborations qui leur permettront de surprendre, d'accroître leur notoriété ou encore d'explorer un nouveau territoire d'expression."
									: blockText === 5 && locale === 'fr'
									? "Qu'il s'agisse d'un événement en personne ou virtuel, nous vous offrons une série d'opportunités pour rencontrer votre communauté et développer votre pouvoir d’expression."
									: blockText === 6 && locale === 'fr'
									? "Distinctif, beau et porteur de sens.\n Grâce à notre réseau mondial d'artistes (MUA, photographe, vidéaste, styliste, etc.), nous créons des contenus mémorables et significatifs pour tous vos outils de communication."
									: blockText === 0 && locale === 'fr'
									? "Créer une communauté par le biais des médias, des réseaux sociaux et de l'influence, générer de l’engagement et gagner en notoriété."
									: blockText === 1 && locale === 'en'
									? 'Earning Media Coverage to Drive Credibility and Success. We’ll maximize your brand’s visibility to establish trust among target consumers through authentic, third-party opinions. An honest, uncompensated endorsement adds credibility to the stories you tell through paid and owned media.'
									: blockText === 2 && locale === 'en'
									? 'Driving Brand Awareness and Conversion. We’ll develop and execute influencer marketing strategies based on your brand goals to help you engage your target audiences. From influencer matchmaking to campaign management and influencer seeding, we shape the optimal strategy that is right for you and amplify your stories through influential voices.'
									: blockText === 3 && locale === 'en'
									? 'Every brand has a unique story. We’ll combine best-in-class PR and influencer marketing services to establish and implement a strong brand strategy.'
									: blockText === 4 && locale === 'en'
									? 'We connect brands and talents to set up partnerships that will allow them to surprise, drive awareness or explore a new territory of expression.'
									: blockText === 5 && locale === 'en'
									? 'Whether live or virtual, physical or digital, we offer a range of opportunities for your brand to connect with your audience, establish deep connections and make a meaningful impression.'
									: blockText === 6 && locale === 'en'
									? 'Distinctive, beautiful, and imbued with meaning. Thanks to our global network of artists (MUA, photographer, videographer, stylist, etc), we create memorable and meaningful content for all your communication tools.'
									: blockText === 0 && locale === 'en' ? 'Create a community through media, social networks and influence, generate engagement and gain notoriety. We offer traditional PR & Media Outreach, Online Visibility, and Event PR & Production.' : ''}
							</p>

							<button
								onClick={() => {
									router.push('/work');
								}}
								className='belButton max-w-[230px] hidden lg:max-w-xs text-md mt-5 mb-10 mx-auto lg:block lg:ml-6 lg:mr-aut0'
							>
								work
							</button>
						</div>
					</div>
					<div className='max-w-xs mx-auto mb-10 mt-10 lg:mt-2'>
						<Pills {...{ locale, blockText, setBlockText }} />
					<button
								onClick={() => {
									router.push('/work');
								}}
								className='belButton max-w-[230px] lg:max-w-xs text-md mt-5 mb-10 mx-auto block lg:hidden'
							>
								work
							</button>
					</div>
				</div>
				<Marquee
					className='bg-belorange py-4 md:py-8 fill-belrose'
					speed={40}
					gradient={false}
					direction='right'
				>
					<svg
						className='h-8 mr-10 md:h-14 md:mr-44'
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
						className='h-8 mr-10 md:h-14 md:mr-44'
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
					<svg
						className='h-8 mr-10 md:h-14 md:mr-44'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 404.38 104.68'
					>
						<path d='M404.36 96.32h-46.45v-.41c1.98-.11 3.96-.22 6.18-.34V8.98c-2.23-.12-4.21-.23-6.19-.33v-.26h23.58c0 .09.01.18.01.28-1.72.09-3.44.19-5.45.29v86.16c13.51 3.31 22.51-2.29 26.47-16.4.69-2.46 1.24-4.95 1.85-7.43v25.03zM.11 8.23h26.31c0 .23.01.46.01.68h-6.11v86.07C35.6 98.21 44 92.68 48.31 74.3v21.73H2.93c0-.04 0-.07-.01-.11l5.64-.37V9.09H.1c.01-.29.01-.57.01-.86zM48.58 5.64c4.8 1.39 6.17 5.41 5.65 9.4-.68 5.19-2.66 10.2-4.97 15.23.37-5.25-1.98-8.79-5.17-12.35-3.58-4.01-1.82-9.13 3.62-12.29.3.01.58.01.87.01zM306 95.67h6.25V9.04h-6v-.6h43.56v16.37c-2.54-3.87-5.03-9.08-8.82-13.06-4.41-4.63-10.73-2.77-16.7-2.89v41.5c7.11.63 10.14-1.75 14.11-11.33v23.52c-4.87-9.47-7.24-11.34-14.13-10.96v43.34c16.37 3.39 26.02-2.36 30.47-22.32v23.52h-48.73c-.01-.16-.01-.31-.01-.46zM161.06 95.61V9.01l-5.56-.37c0-.07 0-.15-.01-.22h43.36v20.01c-1.32-3.35-2.59-7.95-4.86-11.98-3.88-6.88-11.62-9.66-19.48-7.58-.73.19-1.77 1.23-1.78 1.88-.1 13.18-.08 26.37-.08 39.5 6.7.53 9.54-1.85 13.71-10.46v23.77c-3.08-6.64-5.57-12.36-13.43-12.13v44.15c2.19.11 4.17.21 6.15.3 0 .1 0 .19-.01.29h-23.72c0-.1 0-.2-.01-.3 1.77-.07 3.54-.15 5.72-.26zM107.74 95.7h6.31V8.97c-2.07-.1-4.17-.21-6.26-.31v-.25h43.9v16.81c-2.65-4.11-5.11-9.37-8.88-13.4-4.37-4.67-10.75-2.78-16.77-3.01v41.47c6.4.69 10.06-2.53 13.21-12.14v24.83c-1.45-2.55-2.54-5.66-4.62-7.8-2.03-2.07-5.09-3.14-8.58-5.16v45.56c2.07.11 4.13.23 6.18.34 0 .08 0 .17-.01.25h-24.47c-.01-.15-.01-.31-.01-.46zM208.32 8.98c-2.24-.12-4.22-.23-6.2-.33V8.4h23.55c0 .09.01.18.01.27-1.73.09-3.45.17-5.46.28v86.6c1.78.12 3.59.24 5.4.37v.23h-23.3c0-.08-.01-.16-.01-.24 1.92-.1 3.85-.2 6-.32.01-28.99.01-57.67.01-86.61zM282.76 8.95h-6.28v-.59h23.75c0 .09 0 .19.01.28-1.8.11-3.6.22-5.62.34v86.63h5.37v.51h-23.52v-.46h6.29V8.95zM74.95 7.52c-4.81 3.69-6.42 9.08-7.28 14.63-3.03 19.56-2.81 39.22-.43 58.8.64 5.29 3.41 10.32 5.1 15.16-3.72-1.38-6.85-4.84-9.49-8.69-8.52-12.43-10.61-26.45-9.64-41.1.58-8.67 2.61-17.03 6.73-24.73 3.38-6.29 7.7-11.71 15.01-14.07z' />
						<path d='M245.53 96.22c-6.23-3.11-10.53-8.63-13.42-15.14-8.65-19.47-8.5-39.07.29-58.44 3.08-6.78 7.69-12.44 15.22-15.14-6.21 5.45-7.22 12.94-7.96 20.35-1.86 18.66-2.28 37.35 1.18 55.87.81 4.33 3.1 8.39 4.69 12.5zM87.48 7.62c5.53 1.66 9.25 5.53 12.35 10.07 12.62 18.5 12.75 50.22.35 68.8-3.73 5.58-7.61 8.81-12.92 10.55 6-4.76 7.48-11.29 8.21-17.97 2.13-19.34 2.41-38.69-.98-57.94-.91-5.16-2.56-10.06-7.01-13.51zM256.6 6.96c4.95.78 9.97 1.56 15.32 2.4v19.12c-3.25-8.66-6.7-16.99-15.32-21.52zM273.6 95.01c-4.14.32-8.01.62-12.24.94 6.92-5.65 9.92-13.39 12.24-21.59v20.65z' />
					</svg>
					<svg
						className='h-8 mr-10 md:h-14 md:mr-44'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 404.38 104.68'
					>
						<path d='M115.62 104.68c-3.37-.91-6.82-1.59-10.09-2.78-4.55-1.66-8.5-4.42-12.1-7.67-9.22-8.31-14.38-18.87-16.4-30.85-2.61-15.5-.23-30.27 8.65-43.53 6.09-9.09 14.21-15.75 25.07-18.44 11.62-2.87 22.08-.03 31.31 7.23 11.03 8.67 16.83 20.38 19.07 34.03 1.82 11.09.74 21.88-3.4 32.3-4.71 11.87-12.51 21.09-24.24 26.52-3.18 1.47-6.82 1.96-10.25 2.91-.19.05-.37.19-.55.28h-7.07zm28.17-52.02c0-2.51.19-5.04-.04-7.53-.64-7.09-1.81-14.11-3.93-20.92-1.95-6.26-4.44-12.28-9.05-17.18-6.83-7.27-16.48-7.19-23.39-.29-3.31 3.31-5.59 7.41-7.2 11.78-4.68 12.68-6.76 25.76-5.93 39.31.41 6.75 1.41 13.37 3.13 19.88 2.09 7.88 4.84 15.45 10.93 21.32 5.1 4.92 12.9 5.87 18.91 1.95 5.17-3.37 8.08-8.45 10.33-13.92 4.53-11.01 6.18-22.59 6.24-34.4zM0 2.46c3.09-.03 6.17-.08 9.26-.09 7.81-.01 15.62 0 23.43 0 .34 0 .69-.06 1.01.01.59.13 1.16.33 1.74.49-.55.19-1.1.53-1.66.56-1.68.07-3.37.03-5.05.03h-1.87c8.87 24.22 17.67 48.23 26.46 72.25h.34c7.43-24.02 14.86-48.05 22.3-72.07-3.02-.17-5.89-.34-8.75-.52-.01 0 0-.31 0-.6.41-.05.84-.13 1.27-.14 5.51-.01 11.01-.02 16.52.02.46 0 .92.34 1.38.52-.46.18-.91.51-1.37.52-1.91.06-3.82.09-5.73 0-1.07-.05-1.58.29-1.91 1.35-2.14 6.92-4.36 13.81-6.54 20.72-1.81 5.74-3.58 11.48-5.39 17.22-4.73 14.99-9.46 29.97-14.19 44.96-1.54 4.89-3.07 9.78-4.61 14.67-.09.3-.24.58-.48 1.17-1.56-4.26-3-8.22-4.45-12.16-4.82-13.08-9.65-26.15-14.45-39.23-4.02-10.94-7.99-21.89-12-32.83-1.8-4.92-3.64-9.83-5.39-14.77-.34-.88-.77-1.11-1.61-1.1-2.75.04-5.51.02-8.26.02v-1zM340.93 100.75V3.54H323.1v2.3c0 24.88.05 49.76-.03 74.64-.03 9.5-5.15 15.95-13.54 19.73-6.16 2.78-12.71 3.53-19.35 3.03-7.56-.56-14.77-2.44-20.93-7.17-5.28-4.06-8.6-9.27-9.07-16.05-.12-1.78-.28-3.56-.28-5.34-.02-23.03-.01-46.06-.01-69.09V3.44c-2.97 0-5.76.02-8.56-.02-.4-.01-.8-.34-1.2-.52.4-.18.79-.52 1.19-.53 11.18-.03 22.36-.02 33.54-.01.32 0 .64.1.96.16.04.16.08.32.13.48-.44.15-.88.41-1.32.42-2.68.04-5.36.02-8.23.02v2.3c0 24.88.05 49.76-.03 74.64-.02 6.04 2.55 10.68 7.06 14.33 4.9 3.97 10.7 5.88 16.96 5.73 9.24-.22 17.86-5.36 20.5-14.8.45-1.59.76-3.28.76-4.93.05-25.16.03-50.32.03-75.48 0-.54-.05-1.09-.1-2.01-3.71 0-7.33 0-10.95-.02-.03 0-.07-.3-.14-.66h91.95v35.52c-.09.01-.17.02-.26.04-.34-2.19-.65-4.39-1.03-6.57-1.21-7-3.37-13.58-7.94-19.23-3.24-4-7.41-6.48-12.27-7.71-7.64-1.94-15.46-.93-23.31-1.16v46.23c6.12.5 12.2 1.25 17.27-3.41 2.72-2.5 3.89-5.79 4.66-9.25.37-1.67.43-3.4.65-5.11.04-.34.19-.67.59-.95v40.1c-.12.02-.24.03-.36.05-.36-1.46-.74-2.91-1.09-4.37-.91-3.85-2.49-7.39-5-10.48-2.49-3.06-5.78-4.71-9.67-5.06-1.84-.17-3.71-.04-5.56-.02-1.04.01-1.6.38-1.6 1.6.03 15.63.02 31.27.03 46.9 0 .27.05.55.07.78.14.1.23.23.31.23 6.34-.05 12.71.29 19-.27 5.95-.52 11.16-3.32 15.65-7.37 6.2-5.6 9.7-12.51 10.57-20.79.26-2.49.52-4.98.79-7.46.03-.23.12-.46.46-.65v37.78h-1.74c-22.69 0-45.39 0-68.08-.02-.63 0-1.25-.34-1.88-.52.6-.21 1.2-.57 1.81-.59 2.09-.08 4.21-.03 6.42-.03zM239.81.5v34.89c-.13.02-.26.04-.39.05-.56-2.05-1.1-4.11-1.68-6.15-2.46-8.57-6.48-16.29-13.01-22.49-4.04-3.84-8.71-6.35-14.6-5.91-4.88.36-8.59 2.75-11.49 6.43-4.13 5.25-6.2 11.47-7.49 17.91-.93 4.61-1.66 9.31-1.98 14-.46 6.73-.78 13.51-.58 20.25.31 10.88 1.75 21.63 5.9 31.81 1.59 3.91 3.68 7.54 7.57 9.7 3.31 1.83 6.84 2.37 10.62 2.05 4.62-.39 8.69-1.98 12.28-4.82 3.35-2.64 5.41-5.89 5.32-10.44-.17-8.68-.05-17.36-.05-26.38h-9.09c.01-.19.01-.38.02-.56h32.96c.01.15.03.29.04.44h-7.75v40.88c-.56-.66-.86-.95-1.09-1.28-2.81-4-7.23-5.64-11.91-4.01-3.26 1.13-6.35 2.76-9.54 4.12-8.27 3.52-16.67 3.92-25.12.79-5.89-2.18-10.73-5.88-14.79-10.67-6.81-8.02-10.64-17.35-12.27-27.61-1.98-12.5-.61-24.62 4.5-36.29 2.92-6.66 7.02-12.45 12.44-17.26 5.88-5.22 12.62-8.81 20.53-9.81 4.98-.63 9.6.88 14.17 2.72 1.99.8 4.15 1.29 6.28 1.64 3.1.51 5.64-.97 8.08-2.66.62-.43 1.28-.81 2.12-1.34z' />
					</svg>
					<svg
						className='h-8 mr-10 md:h-14 md:mr-44'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 25.26 12.6'
					>
						<path d='M24.42 9.24a6.139 6.139 0 0 0 .72-2.94c.005-3.46-2.813-6.278-6.3-6.3-3.342.021-6.082 2.645-6.3 5.94.018-.184.001-.377 0-.54H6.72v2.64l1.86.06c-.549.653-1.37 1.088-2.28 1.08A2.862 2.862 0 0 1 3.42 6.3C3.417 4.729 4.702 3.442 6.3 3.42c1.063.022 2 .612 2.52 1.5l2.94-1.68A6.293 6.293 0 0 0 6.3 0C2.813.021-.005 2.839 0 6.3a6.279 6.279 0 0 0 6.3 6.3c3.337.008 6.073-2.607 6.3-5.88.167 3.273 2.903 5.889 6.24 5.88 1.229.008 2.365-.337 3.3-.96l.78.78 2.34-2.34-.84-.84z' />
						<path
							fill='#FD4000'
							d='m21.72 6.72-.6-.54-2.22 2.34.66.6a3.797 3.797 0 0 1-.72.06c-1.575.008-2.861-1.278-2.88-2.88a2.93 2.93 0 0 1 2.88-2.88c1.598.022 2.884 1.309 2.88 2.88.004.151-.006.286 0 .42z'
						/>
					</svg>
				</Marquee>
				<div className='w-full mt-10 lg:flex mb-8'>
					<div className='h-full w-full max-w-[90vw] md:max-h-[580px] md:max-w-[456px] mx-auto'>
						<div className='divPhotoTeam h-full w-full'>
							<Image
								placeholder='blur'
								className='photoTeam'
								width={'80%'}
								height={'100%'}
								objectFit='cover'
								src={teamBelong}
								alt='Tean Belong'
								layout='responsive'
							/>
						</div>
					</div>
					<div className='flex flex-col justify-center lg:max-w-lg lg:mx-auto space-y-8'>
						<h2 className='font-agrandir-grand text-[33px] lg:text-5xl font-extrabold mx-auto mt-10 lg:mt-0 lg:text-right lg:mr-0'>
							Who we are
						</h2>
						{locale === 'fr' ? (
							<p className='font-sweet-sans-pro text-xs md:text-sm text-center md:text-right px-3 lg:px-0 uppercase'>
								Nous sommes une agence de{' '}
								<span className='font-bold'>relations publiques</span>{' '}
								composée d&apos;expertes interdisciplinaires dotées d&apos;une
								forte connaissance du secteur{' '}
								<span className='font-bold'>
									de la beauté et du bien-être.
								</span>
							</p>
						) : (
							<p className='font-sweet-sans-pro text-xs md:text-sm text-center md:text-right px-3 lg:px-0'>
								We&apos;re a <span className='font-messapia text-xs'>PR</span> agency of
								interdisciplinary experts who craft brand stories and build
								comunities through{' '}
								<span className='font-bold'>media, social</span> and{' '}
								<span className='font-bold'>experiential.</span>
							</p>
						)}
						<button
							onClick={() => {
								router.push('/about');
							}}
							className='belButton max-w-[230px] lg:max-w-xs mt-5 mb-10 mx-auto block lg:mr-0'
						>
							about
						</button>
					</div>
				</div>
				<div>
					<SayHi />
				</div>
			</main>
		</div>
	);
}
