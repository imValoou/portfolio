const journeyData = [
	{
		right: {
			title: 'SCIENTIFIC BACCALAUREATE',
			subtitle: '2016 - ETABLISSEMENT',
		},
	},
	{
		left: {
			title: 'DUT IN COMPUTER SCIENCE',
			subtitle: '2018 - UNIVERSITY OF NICE',
		},
	},
	{
		right: {
			title: 'FULL-STACK DEVELOPER',
			subtitle: '2018 TO 2022 - DIETSMANN MONACO',
		},
	},
	{
		left: {
			title: 'FULL-STACK DEVELOPER',
			subtitle: '2022 TO 2024 - SCHNEIDER ELECTRIC',
		},
	},
	{
		right: {
			title: 'PARACHUTIST ARTILLERYMAN',
			subtitle: '2025 - FRENCH ARMY AT THE 35TH RAP',
		},
	},
	{
		left: {
			title: 'FULL-STACK DEVELOPER',
			subtitle: 'NOW - FREELANCE',
		},
	},
];

export default function Journey() {
	return (
		<section className="py-20 bg-[var(--light-green)] rounded-xl mb-12">
			<h2 className="text-3xl font-bold text-center mb-12 tracking-wide">
				MY JOURNEY
			</h2>
			<div className="flex justify-center">
				<div className="w-full max-w-4xl flex flex-col">
					{journeyData.map((item, idx) => (
						<div className={'journey-row'} key={idx}>
							<div className={'journey-left'}>
								{item.left && (
									<div className="text-right">
										<h4
											className={
												'journey-title font-semibold'
											}
										>
											{item.left.title}
										</h4>
										<h5 className={'journey-subtitle'}>
											{item.left.subtitle}
										</h5>
									</div>
								)}
							</div>
							<div className={'journey-center'}>
								<span className={'journey-circle'}></span>
							</div>
							<div className={'journey-right'}>
								{item.right && (
									<div className="text-left">
										<h4
											className={
												'journey-title font-semibold'
											}
										>
											{item.right.title}
										</h4>
										<h5 className={'journey-subtitle'}>
											{item.right.subtitle}
										</h5>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
