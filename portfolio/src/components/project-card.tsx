import { motion } from 'motion/react';

export default function ProjectCard({
	name,
	description,
	image,
	hoverEnabled = true,
}: {
	name: string;
	description: string;
	image: string;
	hoverEnabled?: boolean;
}) {
	return (
		<div
			className={`outline-10 outline-[var(--dark-green)] bg-cover bg-center bg-no-repeat rounded-lg h-96 w-72 cursor-pointer group hover:outline-[var(--light-green)]`}
		>
			<div
				className="bg-cover bg-center bg-no-repeat rounded-lg w-full h-full"
				style={{
					backgroundImage: `url(${image})`,
				}}
			>
				{hoverEnabled === true && (
					<div className="flex bg-[#2F463FB0] opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in-out w-full h-full  flex-col items-start justify-end rounded-lg text-secondary text-shadow-md text-shadow-gray-950 relative overflow-visible">
						<motion.div className="absolute p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out translate-y-4 group-hover:-translate-y-0 ">
							<h3>{name}</h3>
							<p>{description}</p>
						</motion.div>
					</div>
				)}
			</div>
		</div>
	);
}
