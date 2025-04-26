type buttonProps = {
	text: string;
	path: string;
	type: 'primary' | 'secondary' | 'tertiary';
	size?: 'small' | 'medium' | 'large';
};

const buttonClasses =
	'rounded-lg px-8 py-2 text-2xl font-semibold uppercase cursor-pointer transition duration-300 ease-in-out border-2 text-nowrap';

const typeClasses = {
	primary:
		'primary text-secondary border-[var(--dark-green)] hover:bg-[var(--light-green)] hover:text-[var(--dark-green)]',
	secondary:
		'secondary border-[var(--light-green)] hover:bg-[var(--dark-green)] hover:text-[var(--light-green)]',
	tertiary: 'tertiary',
};

export default function Button({ text, path, type, size }: buttonProps) {
	return (
		<a href={path}>
			<button className={`${buttonClasses} ${typeClasses[type]} `}>
				{size === 'small' && <span className="text-lg">{text}</span>}
				{(size === undefined || size === 'medium') && (
					<span>{text}</span>
				)}
			</button>
		</a>
	);
}
