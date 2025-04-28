import { motion, MotionConfig } from 'motion/react';

type carouselProps = {
	items: string[];
	separator?: string;
	size?: 'sm' | 'md' | 'lg';
	speed?: 'slow' | 'normal' | 'fast';
};

const speedValues = {
	slow: 2,
	normal: 1.5,
	fast: 0.5,
};

export default function Carousel({
	items,
	separator,
	size,
	speed,
}: carouselProps) {
	return (
		<motion.div className="overflow-hidden flex bg-[var(--light-green)] first-of-type:border-t-8 border-[var(--dark-green)]">
			<MotionConfig reducedMotion="user">
				{Array.from({ length: 5 }).map((_, index) => (
					<motion.div
						animate={{ x: '-100%' }}
						transition={{
							ease: 'linear',
							duration: speed
								? items.length * speedValues[speed]
								: items.length * 1.5,
							repeat: Infinity,
						}}
						className="bg-[var(--light-green)] text-[var(--dark-green)] flex items-center gap-4 flex-row py-5 border-b-8 border-[var(--dark-green)] font-bold pr-3"
					>
						{items.map((item, index) => (
							<div key={index} className="item text-nowrap">
								{size === 'sm' && (
									<h4>
										{separator === undefined
											? '| '
											: `${separator} `}
										{`${item} `}
									</h4>
								)}
								{(size === undefined || size === 'md') && (
									<h3>
										{separator === undefined
											? '| '
											: `${separator} `}
										{`${item} `}
									</h3>
								)}
								{size === 'lg' && (
									<h2>
										{separator === undefined
											? '| '
											: `${separator} `}
										{`${item} `}
									</h2>
								)}
							</div>
						))}
					</motion.div>
				))}
			</MotionConfig>
		</motion.div>
	);
}
