import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="bg-purple-300 text-gray-800 mt-8">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">Welcome To Envoy-Learn
			
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">Learn with the best content</p>
		<div className="flex flex-wrap justify-center">
			<Link to={'/course'}>
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-emerald-600 text-gray-50">Get started</button>
            </Link>
			
		</div>
	</div>
</section>
    );
};

export default Home;