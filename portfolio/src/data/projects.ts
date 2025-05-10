export type Project = {
	name: string;
	description: string;
	image: string;
	stack: string[];
	longDescription: string;
};

export const projects: Project[] = [
	{
		name: 'Freams',
		description:
			'Mise en relation logement et services pour backpackers et agriculteurs',
		image: '/images/freams-project-card.png',
		stack: ['Flutter', 'Firebase', 'OSM', 'Angular', 'Sass'],
		longDescription:
			'Application mobile qui connecte agriculteurs et backpackers pour échanger logement contre services (cueillette, entretien, etc.). Développée en Flutter avec Firebase et OpenStreetMap, elle permet de publier des offres, discuter, et localiser facilement des opportunités rurales. L’interface est épurée, pensée pour la simplicité et l’humain.',
	},
	{
		name: 'Calorie Tracker',
		description:
			'Suivi précis des calories et macronutriments pour atteindre tes objectifs',
		image: '/images/calorie-tracker-project-card.png',
		stack: [
			'React',
			'TypeScript',
			'TailwindCSS',
			'Framer Motion',
			'Firebase',
		],
		longDescription:
			'App mobile de suivi nutritionnel simple et visuel. Elle permet d’entrer ses repas et de suivre protéines, glucides et lipides via un code couleur clair. Conçue avec Flutter, l’app vise une expérience fluide sans surcharge. Idéale pour sportifs ou régimes ciblés.',
	},
	{
		name: 'Spotify Clone',
		description:
			'Application musicale libre inspirée de Spotify via proxy sécurisé',
		image: '/images/spotify-clone-project-card.png',
		stack: ['Nuxt', 'Firebase', 'TailwindCSS'],
		longDescription:
			'Clone de Spotify conçu pour contourner les restrictions réseau via un système de proxy. Interface en React/Next.js, inspirée du design original. Permet l’écoute fluide de musique même en réseau filtré. Démo technique complète de séparation frontend/backend.',
	},
	{
		name: 'Portfolio',
		description: 'Portfolio fullstack personnel pour présenter mes projets',
		image: '/images/portfolio-project-card.png',
		stack: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
		longDescription:
			'Site vitrine développé avec Next.js, Tailwind et Framer Motion pour présenter mes projets et compétences. Portfolio personnel en Next.js et Tailwind, conçu pour mettre en avant mes réalisations et mon style.',
	},
];
