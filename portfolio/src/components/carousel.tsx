type carouselProps = {
	items: string[];
	separator?: string;
	size?: 'sm' | 'md' | 'lg';
	speed?: 'slow' | 'normal' | 'fast';
};

export default function Carousel({
	items,
	separator,
	size,
	speed,
}: carouselProps) {
	return (
		<>
			<div className="bg-[var(--light-green)] text-[var(--dark-green)] flex items-center gap-4 flex-row py-5 border-b-8 border-[var(--dark-green)] first-of-type:border-t-8 font-bold">
				{items.map((item, index) => (
					<div key={index} className="text-nowrap">
						{size === 'sm' && (
							<h4>
								{separator === undefined
									? '| '
									: `${separator} `}
								{item}
							</h4>
						)}
						{(size === undefined || size === 'md') && (
							<h3>
								{separator === undefined
									? '| '
									: `${separator} `}
								{item}
							</h3>
						)}
						{size === 'lg' && (
							<h2>
								{separator === undefined
									? '| '
									: `${separator} `}
								{item}
							</h2>
						)}
					</div>
				))}
				{items.map((item, index) => (
					<div key={index} className="text-nowrap">
						{size === 'sm' && (
							<h4>
								{separator === undefined
									? '| '
									: `${separator} `}
								{item}
							</h4>
						)}
						{(size === undefined || size === 'md') && (
							<h3>
								{separator === undefined
									? '| '
									: `${separator} `}
								{item}
							</h3>
						)}
						{size === 'lg' && (
							<h2>
								{separator === undefined
									? '| '
									: `${separator} `}
								{item}
							</h2>
						)}
					</div>
				))}
			</div>
		</>
	);
}
