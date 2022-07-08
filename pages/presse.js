import React, { useRef, useEffect } from 'react';
import Header from '../components/Header';
import { sanityClient, urlFor } from '../sanity';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import { useRouter } from 'next/router';
import clsx from 'clsx';

const COLORS = ['bg-belviolet', 'bg-belorange', 'bg-belvert', 'bg-belrose'];

function Mag({ mag, locale, index, line, button }) {
	return (
		<Link key={mag._id} href={`/${button}/${mag.slug.current}`}>
			<div
				key={mag._id}
				className={clsx(
					'scale-50 md:scale-100 -my-8 -mx-12 md:m-6 rounded-full h-[140px] p-6 flex justify-center items-center w-[250px] overflow-hidden border-2 border-black hover:opacity-80 transition-opacity',
					COLORS[(index + line) % COLORS.length]
				)}
			>
				<img className='object-contain max-x-[95%]' src={urlFor(mag.logo).width(200).url()} alt={mag.name} />
			</div>
		</Link>
	);
}

function Presse({ magPrint, magWeb, radioTv }) {
	const { locale } = useRouter();
	const [button, setButton] = React.useState('print');

	const setPrint = () => {
		setButton('print');
	};

	const setDigital = () => {
		setButton('digital');
	};

	const setRadio = () => {
		setButton('radioTv');
	};

	return (
		<div className='h-screen overflow-x-hidden mb-10'>
			<h1 className='text-5xl lg:text-8xl text-center font-agrandir-grand font-bold mt-8 lg:mt-24'>
				{locale === 'fr' ? 'Presse' : 'Press'}
			</h1>
			{locale === 'fr' ? (
				<p className='my-8 px-3 text-sm max-w-2xl text-center mx-auto'>
					Nous entretenons des relations{' '}
					<span className='font-bold'>solides et durables</span> avec{' '}
					<span className='italic'>les médias</span> qui comptent. Cela se
					traduit par une <span className='font-bold'>excellente</span>{' '}
					couverture médiatique pour chaque{' '}
					<span className='italic'>client</span> avec lequel nous travaillons.
				</p>
			) : (
				<p className='my-8 max-w-2xl text-center mx-auto'>
					We have <span className='font-bold'>strong and long</span> lasting
					relationships white <span className='italic'>the media</span> that
					matter. This translates into{' '}
					<span className='font-bold'>Excellent</span> coverage for every{' '}
					<span className='italic'>client</span> we work with.
				</p>
			)}
			{/* belButton max-w-[230px] lg:max-w-xs text-md mt-5 mb-10 mx-auto block */}

			<div className='flex flex-col lg:flex-row items-center justify-evenly mx-auto max-w-[250px] lg:justify-between lg:max-w-2xl text-xs md:text-md mb-20 space-y-3 lg:space-y-0 lg:space-x-2'>
				<button
					onClick={setPrint}
					className={`belButton w-[230px] text-[14px] p-1 ${button === 'print' && 'bg-belviolet text-belvert border-belviolet'}`}
				>
					print
				</button>
				<button onClick={setDigital} className={`belButton w-[230px] text-[14px] p-1  ${button === 'digital' && 'bg-belviolet text-belvert border-belviolet'}`}>
					digital
				</button>
				<button onClick={setRadio} className={`belButton w-[230px] text-[14px] p-1  ${button === 'radioTv' && 'bg-belviolet text-belvert border-belviolet'}`}>
					Radio / Tv
				</button>
			</div>

			{button === 'print' ? <div>
			<Marquee className='' speed={40} gradient={false} direction='right'>
				{magPrint
					.filter((_, i) => i % 4 === 0)
					.map((mag, index) => (
						<Mag key={mag.title} {...{ mag, locale, index, line: 0, button }} />
					))}
			</Marquee>
			<Marquee
				style={{ width: 'calc(100% + 83px)', transform: 'translateX(-83px)' }}
				className=''
				speed={40}
				gradient={false}
				direction='right'
			>
				{magPrint
					.filter((_, i) => i % 4 === 1)
					.map((mag, index) => (
						<Mag key={mag.title} {...{ mag, locale, index, line: 1, button }} />
					))}
			</Marquee>
			<Marquee
				style={{ width: 'calc(100% + 166px)', transform: 'translateX(-166px)' }}
				speed={40}
				gradient={false}
				direction='right'
			>
				{magPrint
					.filter((_, i) => i % 4 === 2)
					.map((mag, index) => (
						<Mag key={mag.title} {...{ mag, locale, index, line: 2, button }} />
					))}
			</Marquee>
			<Marquee
				style={{ width: 'calc(100% + 83px)', transform: 'translateX(-83px)' }}
				speed={40}
				gradient={false}
				direction='right'
			>
				{magPrint
					.filter((_, i) => i % 4 === 3)
					.map((mag, index) => (
						<Mag key={mag.title} {...{ mag, locale, index, line: 1, button }} />
					))}
			</Marquee>
			</div> : button === "digital" ? <div>
			<Marquee className='' speed={40} gradient={false} direction='right'>
				{magWeb
					.filter((_, i) => i % 4 === 0)
					.map((mag, index) => (
						<Mag key={mag.title} {...{ mag, locale, index, line: 0, button }} />
					))}
			</Marquee>
			<Marquee
				style={{ width: 'calc(100% + 83px)', transform: 'translateX(-83px)' }}
				className=''
				speed={40}
				gradient={false}
				direction='right'
			>
				{magWeb
					.filter((_, i) => i % 4 === 1)
					.map((mag, index) => (
						<Mag key={mag.title} {...{ mag, locale, index, line: 1, button }} />
					))}
			</Marquee>
			<Marquee
				style={{ width: 'calc(100% + 166px)', transform: 'translateX(-166px)' }}
				speed={40}
				gradient={false}
				direction='right'
			>
				{magWeb
					.filter((_, i) => i % 4 === 2)
					.map((mag, index) => (
						<Mag key={mag.title} {...{ mag, locale, index, line: 2, button }} />
					))}
			</Marquee>
			<Marquee
				style={{ width: 'calc(100% + 83px)', transform: 'translateX(-83px)' }}
				speed={40}
				gradient={false}
				direction='right'
			>
				{magWeb
					.filter((_, i) => i % 4 === 3)
					.map((mag, index) => (
						<Mag key={mag.title} {...{ mag, locale, index, line: 1, button }} />
					))}
			</Marquee>
			</div> : button === 'radioTv' ? <div>
			<Marquee className='' speed={40} gradient={false} direction='right'>
				{radioTv
					.filter((_, i) => i % 4 === 0)
					.map((mag, index) => (
						<Mag key={mag.title} {...{ mag, locale, index, line: 0, button }} />
					))}
			</Marquee>
			<Marquee
				style={{ width: 'calc(100% + 83px)', transform: 'translateX(-83px)' }}
				className=''
				speed={40}
				gradient={false}
				direction='right'
			>
				{radioTv
					.filter((_, i) => i % 4 === 1)
					.map((mag, index) => (
						<Mag key={mag.title} {...{ mag, locale, index, line: 1, button }} />
					))}
			</Marquee>
			<Marquee
				style={{ width: 'calc(100% + 166px)', transform: 'translateX(-166px)' }}
				speed={40}
				gradient={false}
				direction='right'
			>
				{radioTv
					.filter((_, i) => i % 4 === 2)
					.map((mag, index) => (
						<Mag key={mag.title} {...{ mag, locale, index, line: 2, button }} />
					))}
			</Marquee>
			<Marquee
				style={{ width: 'calc(100% + 83px)', transform: 'translateX(-83px)' }}
				speed={40}
				gradient={false}
				direction='right'
			>
				{radioTv
					.filter((_, i) => i % 4 === 3)
					.map((mag, index) => (
						<Mag key={mag.title} {...{ mag, locale, index, line: 1, button }} />
					))}
			</Marquee>
			</div> : ""
			}
		</div>
	);
}

export default Presse;

export const getServerSideProps = async () => {
	const digital = `*[_type == "magWeb"]{
    _id,
    name,
    slug{
      current
    },
  logo
}`;

const print = `*[_type == "magPrint"]{
	_id,
	name,
	slug{
		current
	},
logo
}`

const radio = `*[_type == "radioTv"]{
	_id,
	name,
	slug{
		current
	},
logo
}`

	const magPrint = await sanityClient.fetch(print);
	const magWeb = await sanityClient.fetch(digital);
	const radioTv = await sanityClient.fetch(radio)

	return {
		props: {
			magPrint,
			magWeb,
			radioTv
		},
	};
};
