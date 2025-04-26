export default function ProjectCard({
	name,
	description,
	image,
}: {
	name: string;
	description: string;
	image: string;
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
				<div className="group-hover:flex bg-[#2F463FB0] p-6 w-full h-full  flex-col items-start justify-end hidden rounded-lg">
					<h3 className="text-secondary">{name}</h3>
					<p className="text-secondary">{description}</p>
				</div>
			</div>
		</div>
	);
}
