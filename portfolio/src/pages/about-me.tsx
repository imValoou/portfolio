import { GetStaticPropsContext } from 'next';

import Journey from '@/components/journey';
import Passions from '@/components/passions';
import TechStack from '@/components/tech-stack';
import firestoreService, { Passion, Skill } from '@/data/firestore';
import About from '@/sections/about';
import AboutMeBanner from '@/sections/about-me-banner';
import Citation from '@/sections/citation';

type Props = { passions: Passion[]; skills: Skill[] };

export default function AboutMePage({ passions, skills }: Props) {
	return (
		<>
			<AboutMeBanner />
			<div className="h-32"></div>
			<Citation />
			<About />
			<div className="h-48"></div>
			<TechStack skills={skills} />
			<div className="h-20"></div>
			<Journey />
			<Passions passions={passions} />
			<div className="h-24"></div>
		</>
	);
}

export async function getStaticProps(context: GetStaticPropsContext) {
	const [messages, passions, skills] = await Promise.all([
		import(`../../messages/${context.locale || 'fr'}.json`).then((m) => m.default),
		firestoreService.getAllPassions(),
		firestoreService.getAllSkills(),
	]);
	return {
		props: { messages, passions, skills },
		revalidate: 3600,
	};
}
