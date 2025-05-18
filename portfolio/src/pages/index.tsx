import About from '@/sections/about';
import FavoriteProjects from '@/sections/favorite-projects';
import Hero from '@/sections/hero';
import Packs from '@/sections/packs';

export default function HomePage() {
	return (
		<>
			<Hero />
			<FavoriteProjects />
			<Packs />
			<div className="tertiary -rotate-2 h-20 absolute -top-10 -left-1  w-[105%] will-change-transform"></div>
			<div className="h-32"></div>
			<About />
			<div className="h-56"></div>
		</>
	);
}
export async function getStaticProps(context: any) {
	return {
		props: {
			messages: (
				await import(`../../messages/${context.locale || 'fr'}.json`)
			).default,
		},
	};
}
