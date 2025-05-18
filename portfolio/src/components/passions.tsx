import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import firestoreService from '@/data/firestore';

import type { Passion } from '@/data/firestore';
export default function Passions() {
	const t = useTranslations();
	const router = useRouter();
	const locale = router.locale ?? 'fr';
	const [passions, setPassions] = useState<Passion[]>([]);

	useEffect(() => {
		const loadPassions = async () => {
			try {
				const passionsData = await firestoreService.getAllPassions();
				const passionsWithImages = await Promise.all(
					passionsData.map(async (passion) => ({
						...passion,
						image: await firestoreService.getImageUrl(
							passion.image
						),
					}))
				);
				setPassions(passionsWithImages);
			} catch (error) {
				console.error('Erreur lors du chargement des passions:', error);
			}
		};

		loadPassions();
	}, []);

	return (
		<section className="py-20">
			<h2 className="text-3xl font-bold text-center mb-6 tracking-wide uppercase">
				{t('AboutMe.Passions.Title')}
			</h2>
			<p className="max-w-3xl mx-auto text-center text-lg mb-12">
				{t('AboutMe.Passions.Description')}
			</p>
			<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{passions.map((passion, idx) => (
					<div
						key={idx}
						className="relative w-full h-44 mb-4 flex items-center justify-center"
					>
						<img
							src={passion.image}
							alt={t(passion.name[locale as 'en' | 'fr'])}
							className="object-cover w-full h-full rounded-xl border-4 border-l-8 border-r-8 border-[var(--dark-green)]"
							style={{ filter: 'brightness(0.75)' }}
						/>
						<h4
							className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold drop-shadow-xs text-center"
							style={{
								whiteSpace: 'wrap',
								letterSpacing: '2px',
							}}
						>
							{t(passion.name[locale as 'en' | 'fr'])}
						</h4>
					</div>
				))}
			</div>
		</section>
	);
}
