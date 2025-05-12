import { useEffect, useState } from 'react';

import Button from '@/components/button';
import ProjectCard from '@/components/project-card';
import firestoreService, { Project } from '@/data/firestore';

export default function FavoriteProjects() {
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
			<h2 className="font-bold">My favorite projects</h2>
			<div className="flex items-center justify-center gap-20">
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						name={project.name}
						description={project.description}
						image={project.image}
					/>
				))}
			</div>

			<Button text="Catalogue" path="/catalog" type="secondary"></Button>
		</section>
	);
}
