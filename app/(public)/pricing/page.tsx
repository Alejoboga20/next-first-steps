import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Pricing - NextJS App Router Example',
	description: 'This is the pricing page of the NextJS App Router Example',
	keywords: ['NextJS', 'App Router', 'Pricing Page'],
};

const PricingPage = () => {
	return <div className='text-5xl'>Pricing Page</div>;
};

export default PricingPage;
