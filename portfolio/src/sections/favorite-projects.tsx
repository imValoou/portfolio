import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '@/components/button';
import ProjectCard from '@/components/project-card';
import { Project } from '@/data/firestore';

type Props = { projects: Project[] };

export default function FavoriteProjects({ projects }: Props) {
	const router = useRouter();
	const locale = router.locale || 'fr';
	const t = useTranslations();

	return (
		<section className="py-32 flex flex-col items-center justify-center gap-20">
			<h2 className="font-bold">{t('Projects.Title')}</h2>
			<div className="flex items-center justify-center gap-20 flex-wrap max-w-6xl">
				{projects.map((project) => (
					<Link key={project.id} href={`/catalog?project=${project.id}`}>
						<ProjectCard
							name={project.name}
							description={project.description[locale as 'en' | 'fr']}
							image={project.image}
						/>
					</Link>
				))}
			</div>
			<Button text={t('Pages.Catalog')} path="/catalog" type="secondary" />
		</section>
	);
}
