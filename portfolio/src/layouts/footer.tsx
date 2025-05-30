import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Envelope, GithubLogo, LinkedinLogo } from 'phosphor-react';

import AngledSeparator from '@/components/angled-separator';

export default function Footer() {
	const t = useTranslations();
	return (
		<footer className="primary relative">
			<AngledSeparator color="primary" orientation="to-right" />
			<div className="py-16 px-24">
				<div className="flex justify-between">
					<div className="flex items-start justify-center flex-col gap-6">
						<h4 className="text-secondary uppercase font-semibold ml-4">
							Valentin Benedet
						</h4>
						<p className="max-w-96">{t('Footer.Description')}</p>
					</div>
					<div className="flex items-center justify-start flex-col gap-12">
						<div className="flex items-start justify-center gap-10">
							<Link href="/catalog">
								<p className="uppercase">
									{t('Pages.Catalog')}
								</p>
							</Link>
							<Link href="/about-me">
								<p className="uppercase">
									{t('Pages.AboutMe')}
								</p>
							</Link>
							<Link href="/contact">
								<p className="uppercase">
									{t('Pages.Contact')}
								</p>
							</Link>
						</div>
						<div className="flex items-start justify-center gap-10">
							<Link
								title="LinkedIn"
								href="https://www.linkedin.com/in/valentinbenedet"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="secondary border-2 border-[var(--light-green)] p-1.5 rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--white)]  transition-colors duration-200 ease-in-out">
									<LinkedinLogo size={40} weight="bold" />
								</button>
							</Link>
							<Link
								title="Github"
								href="https://github.com/imValoou?tab=repositories"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="secondary border-2 border-[var(--light-green)] p-1.5 rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--white)]  transition-colors duration-200 ease-in-out">
									<GithubLogo size={40} weight="fill" />
								</button>
							</Link>
							<Link
								title="Email"
								href="mailto:valentinbenedet@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="secondary border-2 border-[var(--light-green)] p-1.5 rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--white)]  transition-colors duration-200 ease-in-out">
									<Envelope size={40} weight="bold" />
								</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="w-full border-1 border-[var(--light-green)] my-14"></div>
				<div className="flex justify-between">
					<p className="">{t('Footer.LegalMentions')}</p>
					<p className="">
						{new Date().getFullYear()} -{' '}
						{t('Footer.AllRightsReserved')}
					</p>
				</div>
			</div>
		</footer>
	);
}
