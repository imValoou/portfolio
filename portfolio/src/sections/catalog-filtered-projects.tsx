import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/button';
import {X} from 'phosphor-react';

const _filters = [
    { name: 'React', href: '#', isSelected: true },
    { name: 'TypeScript', href: '#', isSelected: false },
    { name: 'TailwindCSS', href: '#', isSelected: false },
    { name: 'Next.js', href: '#', isSelected: false },
];

interface Project {
    name: string;
    description: string;
    image: string;
    stack: string[];
    longDescription: string;
}

const _projects: Project[] = [
    {
        name: 'Freams',
        description:
            'Mise en relation logement et services pour backpackers et agriculteurs',
        image: '/images/freams-project-card.png',
        stack: ['React', 'TailwindCSS', 'Next.js'],
        longDescription: "Application mobile qui connecte agriculteurs et backpackers pour échanger logement contre services (cueillette, entretien, etc.). Développée en Flutter avec Firebase et OpenStreetMap, elle permet de publier des offres, discuter, et localiser facilement des opportunités rurales. L’interface est épurée, pensée pour la simplicité et l’humain."
        
    },
    {
        name: 'Calorie Tracker',
        description:
            'Suivi précis des calories et macronutriments pour atteindre tes objectifs',
        image: '/images/calorie-tracker-project-card.png',
        stack: ['React', 'TypeScript'],
        longDescription: "App mobile de suivi nutritionnel simple et visuel. Elle permet d’entrer ses repas et de suivre protéines, glucides et lipides via un code couleur clair. Conçue avec Flutter, l’app vise une expérience fluide sans surcharge. Idéale pour sportifs ou régimes ciblés."
    },
    {
        name: 'Spotify Clone',
        description:
            'Application musicale libre inspirée de Spotify via proxy sécurisé',
        image: '/images/spotify-clone-project-card.png',
        stack: ['React', 'TypeScript', 'TailwindCSS'],
        longDescription: "Clone de Spotify conçu pour contourner les restrictions réseau via un système de proxy. Interface en React/Next.js, inspirée du design original. Permet l’écoute fluide de musique même en réseau filtré. Démo technique complète de séparation frontend/backend."
    },
];

export default function CatalogFilteredProjects() {
    const [filters, setFilters] = useState(_filters);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    
    const toggleFilter = (index: number) => {
        const filtersCopy = [...filters];
        filtersCopy[index].isSelected = !filtersCopy[index].isSelected;
        setFilters(filtersCopy);
    };
    
    const selectProject = (project: Project | null) => {
        setSelectedProject(project);
        console.log(project);
        project !== null ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden');
    };
    
    const getFilteredProjects = () => {
        const activeFilters = filters
            .filter(f => f.isSelected)
            .map(f => f.name.toLowerCase());
        
        if (activeFilters.length === 0) return _projects;
        
        return _projects.filter(project =>
            project.stack.some(tech =>
                activeFilters.includes(tech.toLowerCase())
            )
        );
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
                {getFilteredProjects().map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start justify-start gap-4"
                    >
                        <div
                            className="p-2.5 primary rounded-lg cursor-pointer"
                            onClick={() => selectProject(project)}
                        >
                            <Image
                                src={project.image}
                                alt={project.name}
                                className="w-full h-auto rounded-lg"
                                width={400}
                                height={400}
                            />
                        </div>
                        <h4 className="font-bold">{project.name}</h4>
                        <p>{project.description}</p>
                    
                    </div>
                ))}
            </div>
            <Button
                text="On en discute"
                path="/contact"
                type="primary"
            />
            
            {selectedProject !== null && (
                <dialog open className="fixed max-w-96 w-4/5 min-w-3xl inset-0 z-10 m-auto p-10 border-4 border-[var(--dark-green)] rounded-lg tertiary flex flex-col items-center justify-center gap-10">
                    <X className="absolute top-4 right-4 cursor-pointer" weight="bold" size={24} onClick={() => selectProject(null)} />
                    <div>
                        <h4 className="font-bold text-center">
                            {selectedProject.name}
                        </h4>
                        <p className='text-center'>{selectedProject.description}</p>
                    </div>
                    
                    <div className="flex justify-evenly items-start gap-16">
                        <Image
                            src={selectedProject.image}
                            alt={selectedProject.name}
                            className="w-64 h-auto rounded-lg border-6 border-[var(--dark-green)]"
                            width={400}
                            height={400}
                        />
                        <div className="flex flex-col gap-16">
                            <p>{selectedProject.longDescription}</p>
                            <div>
                                <h4 className="uppercase mb-5">Compétences :</h4>
                                <ul className="flex items-center justify-start uppercase gap-5 flex-wrap">
                                    {selectedProject.stack.map((tech, index) => (
                                        <li
                                            key={index}
                                            className={"rounded-sm px-6 py-1 primary"
                                            }
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </dialog>)}
        
        </section>
    );
}