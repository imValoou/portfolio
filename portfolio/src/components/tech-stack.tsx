import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import firestoreService, { Skill } from '@/data/firestore';

export default function TechStack() {
	const t = useTranslations();
	const [skills, setSkills] = useState<Skill[]>([]);

	useEffect(() => {
		const loadSkills = async () => {
			try {
				const skillsData = await firestoreService.getAllSkills();
				setSkills(skillsData);
			} catch (error) {
				console.error('Erreur lors du chargement des skills:', error);
			}
		};

		loadSkills();
	}, []);

	const getRotation = (min: number, max: number): number => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	return (
		<section className="flex justify-center gap-28 items-center">
			<div className="flex items-center flex-col gap-7 w-lg text-justify">
				<h2 className="text-3xl font-bold mb-10 text-center">
					{t('AboutMe.Stack.Title')}
				</h2>
				<p className="text-justify">{t('AboutMe.Stack.Description')}</p>
			</div>
			<div className="flex flex-wrap justify-center gap-6 w-lg">
				{skills.map((skill) => (
					<div
						key={skill.name}
						className={`${skill.category} ${
							skill.category === 'primary'
								? 'text-secondary scale-110'
								: 'text-primary'
						} px-6 py-3 rounded-md shadow-lg flex items-center justify-center`}
						style={{
							transform: `rotate(${getRotation(-7, 7)}deg)`,
							minWidth: '120px',
							fontSize: '1.2rem',
						}}
					>
						<span className="uppercase font-semibold tracking-wide">
							{skill.name}
						</span>
					</div>
				))}
			</div>
		</section>
	);
}
