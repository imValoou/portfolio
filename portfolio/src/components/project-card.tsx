import { motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Composant de squelette pour l'effet de chargement
const SkeletonLoader = () => (
	<div className="w-full h-full rounded-lg overflow-hidden">
		<div className="w-full h-48 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
		<div className="p-4">
			<div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2 animate-pulse"></div>
			<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-1 animate-pulse"></div>
			<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6 animate-pulse"></div>
		</div>
	</div>
);

export default function ProjectCard({
	name,
	description,
	image,
	hoverEnabled = true,
	isPlaceholder = false,
	isLoading = false,
}: {
	name: string;
	description: string;
	image: string;
	hoverEnabled?: boolean;
	isPlaceholder?: boolean;
	isLoading?: boolean;
}) {
	const [isImageLoading, setIsImageLoading] = useState(true);

	useEffect(() => {
		// Simuler un temps de chargement pour l'image
		if (image) {
			const img = new window.Image();
			img.src = image;
			img.onload = () => setIsImageLoading(false);
		}
	}, [image]);

	if (isLoading) {
		return (
			<div className="w-72 h-96 overflow-hidden rounded-lg">
				<SkeletonLoader />
			</div>
		);
	}
	return (
		<div className="outline-10  outline-[var(--dark-green)] overflow-hidden rounded-lg h-96 w-72 cursor-pointer group hover:outline-[var(--light-green)] relative">
			{isImageLoading ? (
				<SkeletonLoader />
			) : (
				<>
					{!isPlaceholder ? (
						<Image
							src={image}
							alt={name}
							width={300}
							height={450}
							className="object-cover rounded-lg"
							onLoad={() => setIsImageLoading(false)}
						/>
					) : (
						<div className="w-full h-full rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
					)}
					{hoverEnabled && (
						<div className="absolute top-0 left-0 w-full h-full">
							<div className="flex bg-[#2F463FB0] opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in-out w-full h-full  flex-col items-start justify-end rounded-lg text-secondary text-shadow-md text-shadow-gray-950 relative overflow-visible">
								<motion.div className="absolute p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out translate-y-4 group-hover:-translate-y-0 ">
									{!isPlaceholder && (
										<div>
											<h3>{name}</h3>
											<p>{description}</p>
										</div>
									)}
									{isPlaceholder && (
										<div>
											<h3>Project name</h3>
											<p>Project description</p>
										</div>
									)}
								</motion.div>
							</div>
						</div>
					)}
				</>
			)}
		</div>
	);
}
