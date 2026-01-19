export interface Route {
	path: string;
	name: string;
	description?: string;
}

export const routes: Route[] = [
	{
		path: '/about',
		name: 'About',
		description: 'About us page',
	},
	{
		path: '/contact',
		name: 'Contact',
		description: 'Contact information',
	},
	{
		path: '/pricing',
		name: 'Pricing',
		description: 'Pricing plans',
	},
];

// Hook to get all routes
export function useRoutes() {
	return routes;
}

// Utility functions
export function getPublicRoutes() {
	return routes;
}

export function getRouteByPath(path: string) {
	return routes.find((route) => route.path === path);
}
