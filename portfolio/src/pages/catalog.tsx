import { GetStaticPropsContext } from 'next';

import firestoreService, { Project } from '@/data/firestore';
import CatalogBanner from '@/sections/catalog-banner';
import CatalogFilteredProjects from '@/sections/catalog-filtered-projects';

type Props = { projects: Project[] };

export default function CatalogPage({ projects }: Props) {
	return (
		<>
			<CatalogBanner />
			<CatalogFilteredProjects projects={projects} />
		</>
	);
}

export async function getStaticProps(context: GetStaticPropsContext) {
	const [messages, projects] = await Promise.all([
		import(`../../messages/${context.locale || 'fr'}.json`).then((m) => m.default),
		firestoreService.getAllProjects(),
	]);
	return {
		props: { messages, projects },
		revalidate: 3600,
	};
}
