import React, { useRef, useEffect } from 'react';
import Header from '../components/Header';
import { gsap } from 'gsap';
import { sanityClient, urlFor } from '../sanity';
import Link from 'next/link';

function presse({ magazines }) {

	const el = useRef();
	const q = gsap.utils.selector(el);

	useEffect(() => {
		gsap.to(q('.belButton'), { x: 'random(-120,120)' });
	}, []);

	return (
		<div>
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

			<div ref={el} className='flex flex-col items-center space-y-3 mx-auto'>
				{magazines.map((magazine) => (
					  <Link key={magazine._id} href={`/magazines/${magazine.slug.current}`}>
					<div key={magazine._id} className='belButton p-6 w-[250px]'>
						<img src={urlFor(magazine.logo).width(300).url()} alt={magazine.name} />
					</div>
					</Link>
				))}
			</div>
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
