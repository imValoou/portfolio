import Image from 'next/image';
import { useState } from 'react';

import Button from '@/components/button';

const _filters = [
	{ name: 'CSS', href: '#', isSelected: true },
	{ name: 'CSS', href: '#', isSelected: false },
	{ name: 'CSS', href: '#', isSelected: true },
	{ name: 'CSS', href: '#', isSelected: false },
];

const _projects = [
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

export default function CatalogFilteredProjects() {
	const [filters, setFilters] = useState(_filters);

	const toggleFilter = (index: number) => {
		const filtersCopy = [...filters];
		filtersCopy[index].isSelected = !filtersCopy[index].isSelected;
		setFilters(filtersCopy);
	};

	return (
		<section className="tertiary flex flex-col items-center justify-center gap-10 py-20">
			<div className="flex flex-col items-start justify-center gap-4">
				<h4>Filtres :</h4>
				<ul className="flex items-center justify-start uppercase gap-5">
					{filters.map((filter, index) => (
						<li
							key={index}
							className={`border-1 rounded-sm px-6 py-1 transition-colors duration-200 ease-in-out cursor-pointer ${
								filter.isSelected
									? 'primary'
									: 'border-[var(--light-green)] hover:bg-[var(--light-green)]'
							}`}
							onClick={() => toggleFilter(index)}
						>
							{filter.name}
						</li>
					))}
				</ul>
			</div>
			<div className="grid grid-cols-3 gap-16 px-56">
				{_projects.map((project, index) => (
					<div
						key={index}
						className="flex flex-col items-start justify-center gap-4"
					>
						<Image
							src={project.image}
							alt={project.name}
							className="w-full h-auto rounded-lg"
							width={400}
							height={400}
						/>
						<h4 className="font-bold">{project.name}</h4>
						<p className="">{project.description}</p>
					</div>
				))}
			</div>
			<Button
				text="On en discute"
				path="/contact"
				type="primary"
			></Button>
		</section>
	);
}
