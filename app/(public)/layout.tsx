import { Navbar } from '@/components';

export default function PublicLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Navbar />
			<main className='flex flex-col items-center p-24'>
				<h1 className='text-lg'>Hello World</h1>
				{children}
			</main>
		</>
	);
}
