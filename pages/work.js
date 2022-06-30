import React from 'react';
import clsx from 'clsx';
import { sanityClient, urlFor } from '../sanity';
import { useRouter } from 'next/router';

function Work({ work, locale}) {
	const translatedTags = (locale === 'fr' ? work.tagsfr : work.tags) || [];
	return (
		<div className={'w-full'} key={work.id}>
			<div className='w-full mx-auto over'>
				<img
					className='w-full rounded-3xl border-2 border-black z-10'
					src={urlFor(work.thumbnail).width(500).url()}
					alt={work.title}
				/>
			</div>
			<div className='work-text-container w-full md:max-w-lg mx-auto'>
				<h2 className=' border-2 border-black font-messapia px-2 text-md md:text-lg text-belbeige bg-belorange b-1'>
					{work.title}
				</h2>
				<div className='w-full flex flex-wrap pt-3'>
					{translatedTags.map((tag) => (
						<span
							className='border-2 border-black rounded-full py-1 px-2 font-messapia text-xs mr-3 mb-3'
							key={tag}
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}

function Works({ works }) {
	const { locale } = useRouter();
	return (
		<div className='overflow-x-hidden flex flex-col justify-center lg:block'>
			<div className='mx-auto max-w-6xl md:mt-24 '>
				<p className='font-messapia mt-12 text-xs md:text-md lg:text-lg'>
					We provide à la carte services
				</p>
				<h1 className='-mt-2 lg:-mt-6 md:-mt-4 animate-changeColor text-7xl md:text-9xl lg:text-[200px] font-messapia -z-10'>
					work
				</h1>
			</div>

			<div className={'z-10 -mt-4 max-w-[350px] md:max-w-md mx-auto lg:hidden'}>
				{works.map((work) => (
					<div className='mb-12' key={work.id}>
						<div className='border-2 border-black rounded-xl overflow-hidden'>
							<img
								className='w-full'
								src={urlFor(work.thumbnail).width(300).url()}
								alt={work.title}
							/>
						</div>
						<div>
							<h2 className='border-2 border-black font-messapia p-1 text-belbeige bg-belorange mb-2'>
								{work.title}
							</h2>
							<div className='flex flex-wrap font-messapia text-xs'>
								{work.tags.map((tag) => (
									<span className='mr-3 mb-3 border-2 border-black rounded-full px-2 py-1 whitespace-nowrap' key={tag}>{tag}</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>

			<div className='hidden lg:flex -mt-12 mb-10'>
				<div className='space-y-10 lg:flex-col lg:max-w-8xl mx-auto w-full lg:max-w-[500px]'>
					{works
						.filter((_, i) => i % 2 === 0)
						.map((work) => (
							<Work key={work.title} work={work} locale={locale}/>
						))}
				</div>
				<div className='-z-10 -mt-6 space-y-10 lg:flex-wrap lg:max-w-8xl mx-auto w-full lg:max-w-[500px]'>
					{works
						.filter((_, i) => i % 2 === 1)
						.map((work) => (
							<Work key={work.title} work={work} locale={locale}/>
						))}
				</div>
			</div>
		</div>
	);
}

export default Works;

export const getServerSideProps = async ({ req, res }) => {
	res.setHeader(
		'Cache-Control',
		'public, s-maxage=10, stale-while-revalidate=59'
	);

	const query = `*[_type == "work"]{
		_id,
		title,
		thumbnail,
		tags,
		tagsfr,
	} | order(_createdAt asc)`;

	const works = await sanityClient.fetch(query);

	return {
		props: {
			works,
		},
	};
};
