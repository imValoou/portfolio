import { useTranslations } from 'next-intl';

import { type Skill } from '@/data/firestore';

type Props = { skills: Skill[] };

export default function TechStack({ skills }: Props) {
	const t = useTranslations();

	const getRotation = (min: number, max: number): number => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	return (
		<section className="flex justify-center gap-28 items-center">
			<div className="flex items-center flex-col gap-7 w-lg">
				<h2 className="text-3xl font-bold mb-10 text-center">
					{t('AboutMe.Stack.Title')}
				</h2>
				<div>
					{t.rich('AboutMe.Stack.Description', {
						paragraph: (children) => (
							<p className="mb-4">{children}</p>
						),
					})}
				</div>
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
