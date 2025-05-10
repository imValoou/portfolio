const TECHNOLOGIES = [
	{ name: 'TypeScript', color: 'primary', rotate: -3 },
	{ name: 'Framer Motion', color: 'secondary', rotate: 6 },
	{ name: 'Angular', color: 'primary', rotate: -2 },
	{ name: 'OSM', color: 'secondary', rotate: 7 },
	{ name: 'React', color: 'primary', rotate: 5 },
	{ name: 'Kotlin', color: 'secondary', rotate: 6 },
	{ name: 'Next.js', color: 'primary', rotate: -4 },
	{ name: 'Sass', color: 'primary', rotate: 3 },
	{ name: 'Nuxt', color: 'secondary', rotate: -7 },
	{ name: 'Copilot', color: 'secondary', rotate: -3 },
	{ name: 'Bootstrap', color: 'primary', rotate: -6 },
	{ name: 'Svelte', color: 'secondary', rotate: 4 },
	{ name: 'Flutter', color: 'secondary', rotate: 4 },
	{ name: 'PHP', color: 'secondary', rotate: 3 },
	{ name: 'Firebase', color: 'primary', rotate: -5 },
	{ name: 'Tailwind CSS', color: 'primary', rotate: 2 },
];

export default function TechStack() {
	return (
		<section className="flex justify-center gap-28 items-center">
			<div className="flex items-center flex-col gap-7 w-lg text-justify">
				<h2 className="text-3xl font-bold mb-10 text-center">
					Technologies utilisées
				</h2>
				<p className="text-justify">
					As a full-stack developer, my primary expertise lies in
					Angular and C#. However, I am also proficient in a variety
					of other technologies. While I may not be an expert in all
					of these, I am fully capable of using them in a professional
					context. Many of the projects showcased in the Catalog page
					were built using these technologies. I am always eager to
					expand my skill set and learn new technologies, particularly
					in the field of mobile development.
				</p>
			</div>
			<div className="flex flex-wrap justify-center gap-6 w-lg">
				{TECHNOLOGIES.map((tech) => (
					<div
						key={tech.name}
						className={`${tech.color} ${
							tech.color === 'primary'
								? 'text-secondary scale-110'
								: 'text-primary'
						} px-6 py-3 rounded-md shadow-lg flex items-center justify-center`}
						style={{
							transform: `rotate(${tech.rotate}deg)`,
							minWidth: '120px',
							fontSize: '1.2rem',
						}}
					>
						<span className="uppercase font-semibold tracking-wide">
							{tech.name}
						</span>
					</div>
				))}
			</div>
		</section>
	);
}
