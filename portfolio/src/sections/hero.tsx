import Button from '@/components/button';
import Carousel from '@/components/carousel';

const mainSkills = [
	'Angular',
	'.NET',
	'Firebase',
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'C#',
	'PHP',
];
const secondarySkills = [
	'Flutter',
	'React',
	'MySQL',
	'PostgreSQL',
	'Django',
	'FastAPI',
	'Kotlin',
	'Go',
];

export default function Hero() {
	return (
		<div className="relative">
			<section className="primary px-32 flex gap-36 justify-center items-center pt-32 pb-56">
				<div className="flex items-start flex-col gap-4 ">
					<h1 className="font-bold">Valentin</h1>
					<h1 className="font-bold">Benedet</h1>
					<h2>Développeur Fullstack</h2>
					<Button
						text="Catalogue"
						path="/catalog"
						type="secondary"
					></Button>
				</div>
				<div className="secondary p-1.5 rounded-lg h-96 w-96">
					<div className="h-full w-full rounded-lg bg-[url('/images/profile-picture.jpg')] bg-cover bg bg-center"></div>
				</div>
			</section>
			<div className="absolute -left-1 -bottom-10 w-[105%] z-10 -rotate-2 will-change-transform">
				<Carousel items={mainSkills} separator="#" />
				<Carousel items={secondarySkills} separator="#" size="sm" />
			</div>
		</div>
	);
}
