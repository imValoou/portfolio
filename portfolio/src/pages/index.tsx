import { GetStaticPropsContext } from 'next';

import firestoreService, { Project, Skill } from '@/data/firestore';
import About from '@/sections/about';
import FavoriteProjects from '@/sections/favorite-projects';
import Hero from '@/sections/hero';
import Packs from '@/sections/packs';

type Props = { skills: Skill[]; projects: Project[] };

export default function HomePage({ skills, projects }: Props) {
	return (
		<>
			<Hero skills={skills} />
			<FavoriteProjects projects={projects} />
			<Packs />
			<div className="tertiary -rotate-2 h-20 absolute -left-1  w-[105%] will-change-transform"></div>
			<div className="h-32"></div>
			<About />
			<div className="h-56"></div>
		</>
	);
}

export async function getStaticProps(context: GetStaticPropsContext) {
	const [messages, skills, projects] = await Promise.all([
		import(`../../messages/${context.locale || 'fr'}.json`).then((m) => m.default),
		firestoreService.getAllSkills(),
		firestoreService.getAllProjects(),
	]);
	return {
		props: { messages, skills, projects },
		revalidate: 3600,
	};
}
