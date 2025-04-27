import Button from '@/components/button';
import ProjectCard from '@/components/project-card';

const projects = [
	{
		name: 'Freams',
		description:
			'Mise en relation logement et services pour backpackers et agriculteurs',
		image: '/images/freams-project-card.png',
	},
	{
		name: 'Calorie Tracker',
		description:
			'Suivi précis des calories et macronutriments pour atteindre tes objectifs',
		image: '/images/calorie-tracker-project-card.png',
	},
	{
		name: 'Spotify Clone',
		description:
			'Application musicale libre inspirée de Spotify via proxy sécurisé',
		image: '/images/spotify-clone-project-card.png',
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
