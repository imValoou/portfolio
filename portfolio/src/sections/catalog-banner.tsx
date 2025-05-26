import { useTranslations } from 'next-intl';

import AngledSeparator from '@/components/angled-separator';

export default function CatalogBanner() {
	const t = useTranslations();
	return (
		<section className="primary relative h-96 flex flex-col items-center justify-center gap-3 text-center">
			<h1 className="font-bold">{t('Catalog.Title')}</h1>
			<h2>{t('Catalog.Subtitle')}</h2>

			<AngledSeparator
				color="primary"
				orientation="to-right"
				position="bottom"
			/>
		</section>
	);
}
