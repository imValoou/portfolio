import { useTranslations } from 'next-intl';

export default function Journey() {
	const t = useTranslations();

	return (
		<section className="py-20 bg-[var(--light-green)] rounded-xl mb-12">
			<h2 className="text-3xl font-bold text-center mb-12 tracking-wide">
				{t('AboutMe.Journey.Title')}
			</h2>
			<div className="flex justify-center">
				<div className="w-full max-w-4xl flex flex-col">
					<JourneyTimeline />
				</div>
			</div>
		</section>
	);
}

function JourneyTimeline() {
	const journeySteps = useTranslations('AboutMe.Journey');
	console.log(journeySteps);
	const keys = Array.of(1, 2, 3, 4, 5, 6);
	return (
		<div className="flex justify-center">
			<div className="w-full max-w-4xl flex flex-col">
				{keys.map((key) => (
					<div className="journey-row" key={key}>
						<div className="journey-left text-right">
							{key % 2 === 0 && (
								<>
									<h4 className="font-semibold">
										{journeySteps(`${key}.title`)}
									</h4>
									<h5>
										{journeySteps(`${key}.description`)}
									</h5>
								</>
							)}
						</div>
						<div className="journey-center">
							<span className="journey-circle"></span>
						</div>
						<div className="journey-right">
							{key % 2 !== 0 && (
								<>
									<h4 className="font-semibold">
										{journeySteps(`${key}.title`)}
									</h4>
									<h5>
										{journeySteps(`${key}.description`)}
									</h5>
								</>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
