import { useTranslations } from 'next-intl';

import AngledSeparator from '@/components/angled-separator';

export default function AboutMeBanner() {
	const t = useTranslations();
	return (
		<section className="primary relative h-96 flex flex-col items-center justify-center gap-3 text-center">
			<div className="flex flex-col gap-2 max-w-xl">
				<h1 className="font-bold ">{t('AboutMe.Title')}</h1>
				<h2>{t('AboutMe.Subtitle')}</h2>
			</div>
			<AngledSeparator
				color="primary"
				orientation="to-left"
				position="bottom"
			/>
		</section>
	);
}
