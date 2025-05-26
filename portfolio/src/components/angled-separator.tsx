interface AngledSeparatorProps {
	color?: string;
	orientation?: 'to-left' | 'to-right';
	angle?: number;
	position?: 'top' | 'bottom';
}

export default function AngledSeparator({
	color = 'primary',
	orientation = 'to-right',
	angle = 2,
	position = 'top',
}: AngledSeparatorProps) {
	return (
		<div
			className={`
				${color} ${
					orientation === 'to-left' ? '-' : ''
				}rotate-${angle} h-20 absolute -${position}-10 -left-[10px] 
				w-[105%] will-change-transform`}
		></div>
	);
}
