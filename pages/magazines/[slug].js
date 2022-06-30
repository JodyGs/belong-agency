import Link from 'next/link';
import React, { useState } from 'react';
import { sanityClient, urlFor } from '../../sanity';

function Presse({ magazine }) {
	
	const [print, setPrint] = React.useState(true);

	const printTrue = () => {
		setPrint(true)
	}
	
	const printFalse = () => {
		setPrint(false)
	}

	return (
		<div>
			<div className='flex flex-col items-center mt-8'>
				<h1 className='text-4xl text-center md:text-8xl font-agrandir-grand mt-10 lg:mt-24 mb-14'>{magazine.name}</h1>
			</div>

			<div className='flex flex-col lg:flex-row items-center justify-evenly max-w-2xl mx-auto max-w-[250px] text-xs'>
				<button onClick={printTrue} className={'belButton max-w-[300px] mb-5 lg:mb-0'}>print</button>
				<button  onClick={printFalse} className={'belButton max-w-[300px]'}>digital</button>
			</div>

			{ print ? <div className='w-full mt-20 flex flex-wrap justify-around'>
				{magazine.publications.map((publication) => (
					<div key={publication._id} className='w-[700px]'>
						<div className='max-w-[350px] md:max-w-none h-full mb-10 flex flex-col items-center mx-auto w-[500px] space-y-5'>
							<img
								className='border-2 border-black'
								src={urlFor(publication.thumbnail).width(500).url()}
								alt={publication.title}
							/>
							<div className={`border-2 border-black w-full font-messapia p-2 text-sm ${!print && 'hover:text-white hover:bg-belorange'}`}>
								<h3>{publication.title} - {publication.date}</h3>
							</div>
						</div>
					</div>
				))}
			</div> :
			<div className='w-full mt-20 flex flex-wrap justify-around'>
				{magazine.digital.map((digit) => (
					<div key={digit._id} className='w-[700px]'>
						<div className='max-w-[350px] md:max-w-none h-full mb-10 flex flex-col items-center mx-auto w-[500px] space-y-5'>
							<div className={`border-2 border-black w-full font-messapia p-2 text-sm ${!print && 'hover:text-white hover:bg-belorange'}`}>
								<Link href={digit.url}>
								<h3>{digit.title} - {digit.date}</h3>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>}
		</div>
	);
}

export default Presse;

export const getStaticPaths = async () => {
	const query = `*[_type == "magazines"]{
        _id,
        slug {
          current
        },
        logo,
        name
      }`;

	const magazines = await sanityClient.fetch(query);

	const paths = magazines.map((magazine) => ({
		params: {
			slug: magazine.slug.current,
		},
	}));

	return {
		paths,
		fallback: 'blocking',
	};
};

export const getStaticProps = async ({ params }) => {
	const query = `*[_type == "magazines" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
       logo,
        'publications': *[
          _type == "publications" && 
          magazine._ref == ^._id],
					'digital': *[
						_type == "digital" && 
						magazine._ref == ^._id],
        description,
        mainImage,
        slug,
        body
      }`;
	const magazine = await sanityClient.fetch(query, {
		slug: params?.slug,
	});

	if (!magazine) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			magazine,
		},
		revalidate: 360, // after 360 seconds, itll update the old cached version
	};
};
