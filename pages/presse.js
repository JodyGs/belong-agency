import React, { useRef, useEffect } from 'react';
import Header from '../components/Header';
import { gsap } from 'gsap';
import { sanityClient, urlFor } from '../sanity';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import { useRouter } from 'next/router';
import clsx from 'clsx';

function Mag({ mag, locale }) {

	const randomColor = () => {
		return Math.floor(Math.random()*3)
	}

	return (
		<Link key={mag._id} href={`/magazines/${mag.slug.current}`}>
		<div key={mag._id} className={clsx({
								'randomvert': randomColor() === 0,
								'randomorange': randomColor() === 1,
								'randomrose': randomColor() === 2,
							})}>
			<img src={urlFor(mag.logo).width(200).url()} alt={mag.name} />
		</div>
		</Link>
	)
}

function presse({ magazines }) {
	const {locale} = useRouter()
	return (
		<div className='overflow-x-hidden mb-10'>
			<h1 className='text-9xl text-center font-sweet-sans-pro font-bold mt-32'>
				Press
			</h1>
			<p className='my-8 max-w-2xl text-center mx-auto'>
				We have <span className='font-bold'>strong and long</span> lasting
				relationships white <span className='italic'>the media</span> that
				matter. This translates into{' '}
				<span className='font-bold'>Excellent</span> coverage for every{' '}
				<span className='italic'>client</span> we work with.
			</p>

			<Marquee className='' speed={40} gradient={false} direction='right'>
				{magazines
					.filter((_, i) => i % 3 === 0)
					.map((mag) => (
						<Mag key={mag.title} mag={mag} locale={locale} />
					))}
			</Marquee>
			<Marquee className='' speed={40} gradient={false} direction='left'>
				{magazines
					.filter((_, i) => i % 3 === 1)
					.map((mag) => (
						<Mag key={mag.title} mag={mag} locale={locale} />
					))}
			</Marquee>
			<Marquee className='' speed={40} gradient={false} direction='right'>
				{magazines
					.filter((_, i) => i % 3 === 2)
					.map((mag) => (
						<Mag key={mag.title} mag={mag} locale={locale} />
					))}
			</Marquee>
		</div>
	);
}

export default presse;

export const getServerSideProps = async () => {
	const query = `*[_type == "magazines"]{
    _id,
    name,
    slug{
      current
    },
  logo
}`;

	const magazines = await sanityClient.fetch(query);

	return {
		props: {
			magazines,
		},
	};
};
