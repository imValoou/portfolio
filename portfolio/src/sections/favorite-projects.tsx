import Button from '@/components/button';
import ProjectCard from '@/components/project-card';

const projects = [
	{
		name: 'Freams',
		description: 'Description of project 1',
		image: '/images/profile-picture.jpg',
	},
	{
		name: 'Calorie Tracker',
		description: 'Description of project 2',
		image: '/images/profile-picture.jpg',
	},
	{
		name: 'Spotify Clone',
		description: 'Description of project 3',
		image: '/images/profile-picture.jpg',
	},
];

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
