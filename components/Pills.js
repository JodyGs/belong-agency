import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';

const COLORS = ['hover:bg-belrose', 'hover:bg-belorange', 'hover:bg-belvert'];

function Pills({ locale, blockText, setBlockText }) {
	const [index, setIndex] = React.useState(0);

	const handleColors = () => {
		setBlockText(0)
		if (index < 2) {
			setIndex(index + 1);
		} else {
			setIndex(0);
		}
	};
	return (
		<div className='flex flex-col items-center space-y-3 mx-auto lg:font-bold font-messapia text-xs p-1 lg:p-2'>
			<div
				onMouseLeave={handleColors}
				onMouseEnter={() => setBlockText(1)}
				className={clsx(
					'pills -translate-x-[10%] sm:-translate-x-[25%] lg:translate-x-0',
					COLORS[index]
				)}
			>
				<p>{locale === 'fr' ? 'relations presse' : 'Press Relations'}</p>
			</div>
			<p className={`w-full text-sm text-center font-sweet-sans-pro font-normal lg:hidden py-5 ${blockText === 1 ? "block" : "hidden"}`}>
				{locale === 'fr'
					? "Nous maximisons la visibilité de votre marque dans les médias tout au long de l'année à travers un éventail d'actions et de rendez-vous réguliers avec cette cible prescriptrice."
					: "Earning Media Coverage to Drive Credibility and Success. We'll maximize your brand's visibility to establish trust among target consumers through authentic, third-party opinions. An honest, uncompensated endorsement adds credibility to the stories you tell through paid and owned media."}
			</p>
			<div
				onMouseLeave={handleColors}
				onMouseEnter={() => setBlockText(2)}
				className={clsx(
					'pills translate-x-[10%] sm:translate-x-[25%] lg:translate-x-0',
					COLORS[index]
				)}
			>
				<p>
					{locale === 'fr' ? "Marketing d'influence" : 'Influencer Marketing'}
				</p>
			</div>
			<p className={`w-full text-sm text-center font-sweet-sans-pro font-normal lg:hidden py-5 ${blockText === 2 ? "block" : "hidden"}`}>
				{locale === 'fr'
					? "De la recherche d'influenceurs à la gestion de campagne en passant par l\'influence organique, nous élaborons des stratégies afin de vous aider à engager votre communauté et amplifier vos histoires grâce à des voix influente."
					: "Driving Brand Awareness and Conversion. We\’ll develop and execute influencer marketing strategies based on your brand goals to help you engage your target audiences. From influencer matchmaking to campaign management and influencer seeding, we shape the optimal strategy that is right for you and amplify your stories through influential voices."}
			</p>
			<div
				onMouseLeave={handleColors}
				onMouseEnter={() => setBlockText(3)}
				className={clsx(
					'pills -translate-x-[10%] sm:-translate-x-[25%] lg:translate-x-0',
					COLORS[index]
				)}
			>
				<p>{locale === 'fr' ? 'Stratégie 360˚' : '360˚ Strategy'}</p>
			</div>
			<p className={`w-full text-sm text-center font-sweet-sans-pro font-normal lg:hidden py-5 ${blockText === 3 ? "block" : "hidden"}`}>
				{locale === 'fr'
					? "Chaque marque a une histoire unique. Relations Publiques, Partenariats, Marketing d\’influence… En fonction de vos objectifs, nous élaborons et mettons en œuvre une stratégie de communication sur mesure."
					: "Every brand has a unique story. We\’ll combine best-in-class PR and influencer marketing services to establish and implement a strong brand strategy."}
			</p>
			<div
				onMouseLeave={handleColors}
				onMouseEnter={() => setBlockText(4)}
				className={clsx(
					'pills translate-x-[10%] sm:translate-x-[25%] lg:translate-x-0',
					COLORS[index]
				)}
			>
				<p>{locale === 'fr' ? 'Partenariats' : 'Strategic Partnerships'}</p>
			</div>
			<p className={`w-full text-sm text-center font-sweet-sans-pro font-normal lg:hidden py-5 ${blockText === 4 ? "block" : "hidden"}`}>
				{locale === 'fr'
					? "Nous mettons en relation des marques et des talents pour développer des collaborations qui leur permettront de surprendre, d'accroître leur notoriété ou encore d'explorer un nouveau territoire d'expression."
					: "We connect brands and talents to set up partnerships that will allow them to surprise, drive awareness or explore a new territory of expression."}
			</p>
			<div
				onMouseLeave={handleColors}
				onMouseEnter={() => setBlockText(5)}
				className={clsx(
					'pills -translate-x-[10%] sm:-translate-x-[25%] lg:translate-x-0',
					COLORS[index]
				)}
			>
				<p>{locale === 'fr' ? 'Évènements' : 'Events'}</p>
			</div>
			<p className={`w-full text-sm text-center font-sweet-sans-pro font-normal lg:hidden py-5 ${blockText === 5 ? "block" : "hidden"}`}>
				{locale === 'fr'
					? "Qu'il s'agisse d'un événement en personne ou virtuel, nous vous offrons une série d'opportunités pour rencontrer votre communauté et développer votre pouvoir d\’expression."
					: "Whether live or virtual, physical or digital, we offer a range of opportunities for your brand to connect with your audience, establish deep connections and make a meaningful impression."}
			</p>
			<div
				onMouseLeave={handleColors}
				onMouseEnter={() => setBlockText(6)}
				className={clsx(
					'pills translate-x-[10%] sm:translate-x-[25%] lg:translate-x-0',
					COLORS[index]
				)}
			>
				<p>
					{locale === 'fr' ? 'Production de contenu' : 'Content Production'}
				</p>
			</div>
			<p className={`w-full text-sm text-center font-sweet-sans-pro font-normal lg:hidden py-5 ${blockText === 6 ? "block" : "hidden"}`}>
				{locale === 'fr'
					? "Distinctif, beau et porteur de sens.\n Grâce à notre réseau mondial d'artistes (MUA, photographe, vidéaste, styliste, etc.), nous créons des contenus mémorables et significatifs pour tous vos outils de communication."
					: "Distinctive, beautiful, and imbued with meaning. Thanks to our global network of artists (MUA, photographer, videographer, stylist, etc), we create memorable and meaningful content for all your communication tools."}
			</p>
		</div>
	);
}

export default Pills;
