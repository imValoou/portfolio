import Button from '@/components/button';
import SquarePicture from '@/components/square-picture';

export default function About() {
	return (
		<div className="relative tertiary">
			<section className="flex justify-center gap-28 items-center">
				<SquarePicture />
				<div className="flex items-center flex-col gap-7 w-lg text-justify">
					<h2 className="font-bold">À propos</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Duis sed ante metus. Integer ac nunc aliquam, aliquet
						massa at, laoreet leo. Vivamus eu suscipit tellus.
						Integer sollicitudin, dui sed varius efficitur, sem
						sapien luctus nisl, sit amet eleifend nisi risus egestas
						lorem. Pellentesque id fringilla sapien. Nullam feugiat
						ut turpis a auctor.
					</p>
					<Button
						text="En savoir +"
						path="/about"
						type="primary"
					></Button>
				</div>
			</section>
		</div>
	);
}
