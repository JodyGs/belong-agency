import React from 'react';
import Header from '../../components/Header';
import { sanityClient } from '../../sanity';

function presse({magazine}) {

	console.log(magazine);

	return (
		<div>
			<h1 className='text-9xl text-center font-sweet-sans-pro font-bold mt-32'>
				presse
			</h1>
			<p className='my-8 max-w-2xl text-center mx-auto'>
				We have <span className='font-bold'>strong and long</span> lasting
				relationships white <span className='italic'>the media</span> that
				matter. This translates into{' '}
				<span className='font-bold'>Excellent</span> coverage for every{' '}
				<span className='italic'>client</span> we work with.
			</p>

			<div className='flex justify-between max-w-2xl mx-auto'>
				<button className='belButton max-w-[300px]'>print</button>
				<button className='belButton max-w-[300px]'>digital</button>
			</div>
		</div>
	);
}

export default presse;

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
    fallback: "blocking",
  };
};

export const getStaticProps= async ({ params }) => {
	const query = `*[_type == "magazines" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
       logo,
        'publications': *[
          _type == "publications" && 
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
