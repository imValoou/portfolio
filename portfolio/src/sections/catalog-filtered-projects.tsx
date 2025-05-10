import Image from 'next/image';
import { X } from 'phosphor-react';
import { useState } from 'react';

import Button from '@/components/button';
import ProjectCard from '@/components/project-card';
import { Project, projects } from '@/data/projects';

const _techs: string[] = [
	...new Set(
		projects.flatMap((project) =>
			project.stack.map((tech) => tech.toLowerCase())
		)
	),
];
const _filters: { name: string; isSelected: boolean }[] = _techs.map(
	(tech) => ({
		name: tech,
		isSelected: false,
	})
);

const _projects: Project[] = projects;

export default function CatalogFilteredProjects() {
	const [filters, setFilters] = useState(_filters);
	const [selectedProject, setSelectedProject] = useState<Project | null>(
		null
	);

	const toggleFilter = (index: number) => {
		const filtersCopy = [...filters];
		filtersCopy[index].isSelected = !filtersCopy[index].isSelected;
		setFilters(filtersCopy);
	};

	const selectProject = (project: Project | null) => {
		setSelectedProject(project);
		console.log(project);
		project !== null
			? document.body.classList.add('overflow-hidden')
			: document.body.classList.remove('overflow-hidden');
	};

	const getFilteredProjects = () => {
		const activeFilters = filters
			.filter((f) => f.isSelected)
			.map((f) => f.name.toLowerCase());

		if (activeFilters.length === 0) return _projects;

		return _projects.filter((project) =>
			project.stack.some((tech) =>
				activeFilters.includes(tech.toLowerCase())
			)
		);
	};

	return (
		<section className="tertiary flex flex-col items-center justify-center gap-10 py-32 max-w-6xl m-auto">
			<div className="flex flex-col items-start justify-center gap-4 ">
				<h4>Filtres :</h4>
				<ul className="flex items-center justify-stretch flex-wrap uppercase gap-5">
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
			<div className="grid grid-cols-3 gap-16">
				{getFilteredProjects().map((project, index) => (
					<div
						key={index}
						className="flex flex-col items-start justify-start gap-4"
						onClick={() => selectProject(project)}
					>
						<ProjectCard
							name={project.name}
							description={project.description}
							image={project.image}
							hoverEnabled={false}
						/>
					</div>
				))}
			</div>
			<Button text="On en discute" path="/contact" type="primary" />

			{selectedProject !== null && (
				<dialog
					open
					className="fixed max-w-[850px] w-4/5 min-w-3xl overflow-y-auto inset-0 z-10 m-auto p-10 border-4 border-[var(--dark-green)] rounded-lg tertiary flex flex-col items-center justify-center gap-10 shadow-2xl shadow-white"
				>
					<X
						className="absolute top-4 right-4 cursor-pointer"
						weight="bold"
						size={24}
						onClick={() => selectProject(null)}
					/>
					<div>
						<h4 className="font-bold text-center">
							{selectedProject.name}
						</h4>
						<p className="text-center">
							{selectedProject.description}
						</p>
					</div>

					<div className="flex justify-evenly items-start gap-16">
						<Image
							src={selectedProject.image}
							alt={selectedProject.name}
							className="w-64 h-auto rounded-lg border-6 border-[var(--dark-green)]"
							width={400}
							height={400}
						/>
						<div className="flex flex-col gap-16 max-h-[520px] overflow-y-auto">
							<p>{selectedProject.longDescription}</p>
							<div>
								<h4 className="uppercase mb-5">
									Compétences :
								</h4>
								<ul className="flex items-center justify-start uppercase gap-5 flex-wrap">
									{selectedProject.stack.map(
										(tech, index) => (
											<li
												key={index}
												className={
													'rounded-sm px-6 py-1 primary'
												}
											>
												{tech}
											</li>
										)
									)}
								</ul>
							</div>
						</div>
					</div>
				</dialog>
			)}
		</section>
	);
}
