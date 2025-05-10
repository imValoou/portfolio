import Button from '@/components/button';
import ProjectCard from '@/components/project-card';
import { Project, projects } from '@/data/projects';

const typedProjects: Project[] = projects;

export default function FavoriteProjects() {
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
