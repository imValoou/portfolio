import Image from 'next/image';

type Props = {
	height?: number;
	width?: number;
	alt?: string;
	src?: string;
	className?: string;
};
export default function SquarePicture(props: Props) {
	const { height, width, alt, src, className } = props;
	return (
		<div className="secondary p-1.5 rounded-lg h-96 w-96">
			<div className="rounded-lg overflow-hidden h-full w-full">
				<Image
					src={src ?? '/images/profile-picture.jpg'}
					alt={alt ?? 'Profile picture of Valentin Benedet'}
					height={height ?? 400}
					width={width ?? 400}
					className={`w-full ${className}`}
					priority={true}
				/>
			</div>
		</div>
	);
}
