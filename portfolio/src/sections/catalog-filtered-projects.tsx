import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { X } from 'phosphor-react';
import { useEffect, useState } from 'react';

import Button from '@/components/button';
import ProjectCard from '@/components/project-card';
import firestoreService, { Project } from '@/data/firestore';

let _techs: string[] = [];
let _filters: { name: string; isSelected: boolean }[] = [];
let _projects: Project[] = [];

export default function CatalogFilteredProjects() {
	const t = useTranslations();
	const router = useRouter();
	const locale = router.locale || 'fr';
	const [projects, setProjects] = useState<Project[]>([]);
	const [filters, setFilters] = useState<
		{ name: string; isSelected: boolean }[]
	>([]);
	const [selectedProject, setSelectedProject] = useState<Project | null>(
		null
	);

	useEffect(() => {
		const loadProjects = async () => {
			try {
				const projectsData = await firestoreService.getAllProjects();
				_projects = projectsData;
				setProjects(projectsData);
				_techs = [
					...new Set(
						projectsData.flatMap((project) =>
							project.stack.map((tech: string) =>
								tech.toLowerCase()
							)
						)
					),
				];

				// Mettre à jour les filtres
				_filters = _techs.map((tech) => ({
					name: tech,
					isSelected: false,
				}));

				setFilters(_filters);
			} catch (error) {
				console.error('Erreur lors du chargement des projets:', error);
			}
		};

		loadProjects();
	}, []);

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

		if (activeFilters.length === 0) return projects;

		return projects.filter((project) =>
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
				{getFilteredProjects().map((project, index) => (
					<div
						key={index}
						className="flex flex-col items-start justify-start gap-4"
						onClick={() => selectProject(project)}
					>
						<ProjectCard
							name={project.name}
							description={
								project.description[locale as 'en' | 'fr']
							}
							image={project.image}
							hoverEnabled={false}
						/>
					</div>
				))}
			</div>
			<Button
				text={`${t('Pages.Contact')}`}
				path="/contact"
				type="primary"
			/>

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
							{selectedProject.description[locale as 'en' | 'fr']}
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
							<p>
								{
									selectedProject.longDescription[
										locale as 'en' | 'fr'
									]
								}
							</p>
							<div>
								<h4 className="uppercase mb-5">
									{t('Projects.Title')}
								</h4>
								<ul className="flex items-center justify-start uppercase gap-5 flex-wrap">
									{selectedProject.stack.map(
										(tech: string, index: number) => (
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
