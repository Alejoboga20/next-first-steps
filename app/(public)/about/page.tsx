import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About - NextJS App Router Example',
	description: 'This is the about page of the NextJS App Router Example',
	keywords: ['NextJS', 'App Router', 'About Page'],
};

const AboutPage = () => {
	return <h1 className='text-5xl'>About Page</h1>;
};

export default AboutPage;
