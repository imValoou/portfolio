import { Geist, Geist_Mono } from 'next/font/google';

import About from '@/sections/about';
import FavoriteProjects from '@/sections/favorite-projects';
import Hero from '@/sections/hero';
import Packs from '@/sections/packs';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

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
