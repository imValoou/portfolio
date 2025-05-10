import Journey from '@/components/journey';
import Passions from '@/components/passions';
import TechStack from '@/components/tech-stack';
import About from '@/sections/about';
import AboutMeBanner from '@/sections/about-me-banner';
import Citation from '@/sections/citation';

export default function AboutMePage() {
	return (
		<>
			<AboutMeBanner />
			<div className="h-32"></div>
			<Citation />
			<About />
			<div className="h-48"></div>
			<TechStack />
			<div className="h-20"></div>
			<Journey />
			<Passions />
			<div className="h-24"></div>
		</>
	);
}
