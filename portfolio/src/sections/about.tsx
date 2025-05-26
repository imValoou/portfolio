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
					<h2 className="font-bold">{t('AboutMe.Title')}</h2>
					<p>
						{t.rich('AboutMe.Description', {
							paragraph: (children) => (
								<p className="mb-4">{children}</p>
							),
						})}
					</p>
					<Button
						text={t('AboutMe.Button')}
						path="/about"
						type="primary"
					></Button>
				</div>
			</section>
		</div>
	);
}
