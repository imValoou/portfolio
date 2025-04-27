import { motion } from 'framer-motion';

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
		<div className="overflow-hidden flex bg-[var(--light-green)]">
			{Array.from({ length: 5 }).map((_, index) => (
				<motion.div
					animate={{ x: '-100%' }}
					transition={{
						ease: 'linear',
						duration:
							speed === 'slow'
								? items.length * 2
								: speed === 'normal' || speed === undefined
								? items.length * 1.5
								: speed === 'fast'
								? items.length * 0.5
								: items.length * 1.5,
						repeat: Infinity,
					}}
					className="bg-[var(--light-green)] text-[var(--dark-green)] flex items-center gap-4 flex-row py-5 border-b-8 border-[var(--dark-green)] font-bold"
				>
					{items.map((item, index) => (
						<div key={index} className="item text-nowrap">
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
				</motion.div>
			))}
		</div>
	);
}
