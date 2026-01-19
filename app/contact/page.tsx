import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact - NextJS App Router Example',
	description: 'This is the contact page of the NextJS App Router Example',
	keywords: ['NextJS', 'App Router', 'Contact Page'],
};

const ContactPage = () => {
	return <div className='text-5xl'>Contact Page</div>;
};

export default ContactPage;
