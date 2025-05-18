import { useTranslations } from 'next-intl';

export default function Citation() {
	const t = useTranslations();
	return (
		<div className="flex justify-center py-10">
			<h3 className="font-semibold before:content-['“'] before:absolute  before:text-[var(--light-green)] before:text-[5rem] before:-translate-y-1/2  before:-left-8 relative">
				{t('AboutMe.Citation')}
			</h3>
		</div>
	);
}
