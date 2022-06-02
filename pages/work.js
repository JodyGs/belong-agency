import React from 'react';
import Header from '../components/Header';
import { sanityClient, urlFor } from '../sanity';

function Work({works}) {

	console.log(works);
	console.log(works);

	return (
		<div>
			<Header />
			<div>
				<h1 className='animate-changeColor'>work</h1>
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

export const getServerSideProps = async () => {
  const query = `*[_type == "work"]{
		_id,
		title,
		thumbnail,
		tags,
	} | order(_createdAt desc)`;

  const works = await sanityClient.fetch(query);

  return {
    props: {
      works,
    },
  };
};





