import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Button from '@/components/button';
import ProjectCard from '@/components/project-card';
import firestoreService, { Project } from '@/data/firestore';

export default function FavoriteProjects() {
	const router = useRouter();
	const locale = router.locale || 'fr';
	const t = useTranslations();
	const [projects, setProjects] = useState<Project[]>([]);

	useEffect(() => {
		const loadProjects = async () => {
			try {
				const projectsData = await firestoreService.getAllProjects();
				setProjects(projectsData);
			} catch (error) {
				console.error('Erreur lors du chargement des projets:', error);
			}
		};

		loadProjects();
	}, []);
	return (
		<section className="py-32 flex flex-col items-center justify-center gap-20">
			<h2 className="font-bold">{t('Projects.Title')}</h2>
			<div className="flex items-center justify-center gap-20 flex-wrap max-w-6xl">
				{projects.length === 0 &&
					Array.from({ length: 3 }).map((_, index) => (
						<ProjectCard
							key={`placeholder-${index}`}
							isPlaceholder
							name=""
							description=""
							image=""
						/>
					))}
				{projects.map((project, index) => (
					<Link href={`/catalog`}>
						<ProjectCard
							key={index}
							name={project.name}
							description={
								project.description[locale as 'en' | 'fr']
							}
							image={project.image}
						/>
					</Link>
				))}
			</div>

			<Button
				text={t('Pages.Catalog')}
				path="/catalog"
				type="secondary"
			></Button>
		</section>
	);
}
