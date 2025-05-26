import { useTranslations } from 'next-intl';

import Button from '@/components/button';
import Carousel from '@/components/carousel';
import SquarePicture from '@/components/square-picture';

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
	const t = useTranslations();
	return (
		<div className="relative">
			<section className="primary px-6 md:px-32 flex flex-col md:flex-row gap-10 md:gap-36 justify-center items-center pt-24 md:pt-32 pb-32 md:pb-56">
				<div className="flex items-start flex-col gap-4 ">
					<h1 className="font-bold">Valentin</h1>
					<h1 className="font-bold">Benedet</h1>
					<h2>{t('Hero.Subtitle')}</h2>
					<Button
						text={t('Pages.Catalog')}
						path="/catalog"
						type="secondary"
					></Button>
				</div>
				<SquarePicture />
			</section>
			<div className="absolute -left-1 -bottom-10 w-[105%] z-10 will-change-transform -rotate-2 ">
				<Carousel items={mainSkills} separator="#" />
				<Carousel
					items={secondarySkills}
					separator="#"
					size="sm"
					speed="fast"
				/>
			</div>
		</div>
	);
}
