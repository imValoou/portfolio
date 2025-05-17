import { useTranslations } from 'next-intl';

import Button from '@/components/button';
import SquarePicture from '@/components/square-picture';

export default function About() {
	const t = useTranslations();
	return (
		<div className="relative tertiary">
			<section className="flex justify-center gap-28 items-center">
				<SquarePicture />
				<div className="flex items-center flex-col gap-7 w-lg text-justify">
					<h2 className="font-bold">{t('Pages.AboutMe')}</h2>
					<p>{t('About.Description')}</p>
					<Button
						text={t('About.Button')}
						path="/about"
						type="primary"
					></Button>
				</div>
			</section>
		</div>
	);
}
