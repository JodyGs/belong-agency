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
			{/* <img src={urlFor(works[0].thumbnail).url()} alt="" /> */}
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





