import Button from './button';

type PackProps = {
	title: string;
	subtitle: string;
	properties?: string[];
	price?: string;
};

export default function Pack({
	title,
	subtitle,
	properties,
	price,
}: PackProps) {
	return (
		<div
			className={`${properties ? 'tertiary' : 'secondary'}
				py-8  rounded-2xl flex flex-col justify-center items-center gap-7 border-8 border-[var(--light-green)] text-center`}
		>
			<div className="font-semibold">
				<h3>{title}</h3>
				<h4>{subtitle}</h4>
			</div>

			{properties && (
				<p>
					{properties &&
						properties.map((property, index) => (
							<span key={index} className="font-normal">
								{property}{' '}
								{index < properties.length - 1 && '- '}
							</span>
						))}
				</p>
			)}

			{price ? (
				<Button
					text={`À partir de ${price}`}
					path="#"
					type="secondary"
					size="medium"
				/>
			) : (
				<Button
					text={`On en discute`}
					path="#"
					type="primary"
					size="medium"
				/>
			)}
		</div>
	);
}
