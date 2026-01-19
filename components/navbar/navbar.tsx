import Link from 'next/link';
import { routes } from '@/lib/routes';
import { HomeIcon } from '@primer/octicons-react';

export const Navbar = () => {
	return (
		<nav className='flex bg-blue-800 opacity-30 h-12 p-2 m-2 rounded items-center'>
			<div>
				<Link
					href='/'
					className='mr-2 text-white cursor-pointer flex items-center gap-2'
				>
					<HomeIcon />
					Home
				</Link>
			</div>

			<div className='flex flex-1 w-full justify-end'>
				{routes.map((route) => (
					<Link
						className='mr-2 text-white cursor-pointer'
						key={route.path}
						href={route.path}
					>
						{route.name}
					</Link>
				))}
			</div>
		</nav>
	);
};
