import { routes } from '@/lib/routes';

export const Navbar = () => {
	return (
		<nav className='flex bg-blue-800 opacity-30 h-12 p-2 m-2 rounded'>
			<div className='flex flex-1 '>
				{routes.map((route) => (
					<a
						className='mr-2 text-white cursor-pointer'
						key={route.path}
						href={route.path}
					>
						{route.name}
					</a>
				))}
			</div>
		</nav>
	);
};
