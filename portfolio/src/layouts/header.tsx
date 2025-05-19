import { useTranslations } from 'next-intl';
import Link from 'next/link';

import LanguageSwitcher from '../components/language-switcher';

export default function Header() {
	const t = useTranslations();
	return (
		<header
			className="header sticky top-0 z-50 primary flex justify-between items-center
			py-5 px-7"
		>
			<Link href={'/'}>
				<h4 className="font-bold">Valentin Benedet</h4>
			</Link>
			<nav>
				<ul className="flex items-center justify-between uppercase gap-10">
					<Link href="/catalog" className="cursor-pointer">
						<li>{t('Pages.Catalog')}</li>
					</Link>

					<Link href="/about-me" className="cursor-pointer">
						<li>{t('Pages.AboutMe')}</li>
					</Link>

					<Link href="/contact" className="cursor-pointer">
						<li>{t('Pages.Contact')}</li>
					</Link>

					{/* <Link href="/cart" className="cursor-pointer">
						<li>
							<button className="secondary border-2 border-[var(--light-green)] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--white)] transition-colors duration-200 ease-in-out">
								<ShoppingCartSimple size={24} weight="fill" />
							</button>
						</li>
					</Link> */}

					<li>
						<LanguageSwitcher />
					</li>
				</ul>
			</nav>
		</header>
	);
}
