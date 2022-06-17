import React from 'react';
import Header from '../components/Header';
import { sanityClient, urlFor } from '../sanity';

function Work({works}) {

	return (
		<div>
			<div>
				<p className='font-messapia'>We provide service a la carte</p>
				<h1 className='animate-changeColor text-9xl font-messapia'>work</h1>
			</div>
			{works.map(work => (
				<div className='work-container' key={work.id}>
					<div className='work-image-container'>
						<img src={urlFor(work.thumbnail).width(300).url()} alt={work.title} />
					</div>
					<div className='work-text-container'>
						<h2>{work.title}</h2>
						{work.tags.map(tag => (
							<span key={tag}>{tag}</span>
						))}
					</div>
				</div>
			))}
					
		</div>
	);
}

export default Work;

export const getServerSideProps = async ({req,res}) => {
	res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const query = `*[_type == "work"]{
		_id,
		title,
		thumbnail,
		tags,
	} | order(_createdAt asc)[0..2]`;

  const works = await sanityClient.fetch(query);

  return {
    props: {
      works,
    },
  };
};





