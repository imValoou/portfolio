const passions = [
	{
		img: '/images/video-games.png',
		alt: 'Video games',
		title: 'Video games',
		label: 'VIDEO GAMES',
	},
	{
		img: '/images/festivals.png',
		alt: 'Festivals',
		title: 'Festivals',
		label: 'FESTIVALS',
	},
	{
		img: '/images/painting.png',
		alt: 'Painting',
		title: 'Painting',
		label: 'PAINTING',
	},
	{
		img: '/images/vinyls.png',
		alt: 'Vinyls',
		title: 'Vinyls',
		label: 'VINYL',
	},
	{
		img: '/images/watchmaking.png',
		alt: 'Watches',
		title: 'Watches',
		label: 'WATCHES',
	},
	{
		img: '/images/film-photography.png',
		alt: 'Film photography',
		title: 'Film photography',
		label: 'FILM PHOTOGRAPHY',
	},
];

export default function Passions() {
	return (
		<section className="py-20">
			<h2 className="text-3xl font-bold text-center mb-6 tracking-wide uppercase">
				MY PASSIONS
			</h2>
			<p className="max-w-3xl mx-auto text-center text-lg mb-12">
				I am a tech enthusiast with a deep love for computer hardware.
				When I'm not coding, you can find me painting miniature
				figurines, capturing moments with film photography, or working
				at music festivals. I am a fan of metal music, an avid gamer,
				and someone who loves exploring new interests. My curiosity
				knows no bounds, and I thrive on learning and experiencing new
				things
			</p>
			<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{passions.map((passion, idx) => (
					<div className="relative w-full h-44 mb-4 flex items-center justify-center">
						<img
							src={passion.img}
							alt={passion.alt}
							className="object-cover w-full h-full rounded-xl border-4 border-l-8 border-r-8 border-[var(--dark-green)]"
							style={{ filter: 'brightness(0.75)' }}
						/>
						<h4
							className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold drop-shadow-xs text-center"
							style={{
								whiteSpace: 'wrap',
								letterSpacing: '2px',
							}}
						>
							{passion.label}
						</h4>
					</div>
				))}
			</div>
		</section>
	);
}
