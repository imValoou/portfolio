import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
	const router = useRouter();
	const { locale, asPath } = router;

	const toggleLanguage = () => {
		const newLocale = locale === 'fr' ? 'en' : 'fr';
		router.push(asPath, asPath, {
			locale: newLocale,
			scroll: false,
		});
	};

	return (
		<button
			onClick={toggleLanguage}
			className="text-sm font-medium uppercase hover:text-[var(--light-green)] transition-colors duration-200"
			aria-label={
				locale === 'fr' ? 'Switch to English' : 'Passer en français'
			}
		>
			<span className={locale === 'fr' ? 'font-semibold' : ''}>FR</span>
			<span>/</span>
			<span className={locale === 'en' ? 'font-semibold' : ''}>EN</span>
		</button>
	);
}
