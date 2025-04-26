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
			<About />
		</>
	);
}
