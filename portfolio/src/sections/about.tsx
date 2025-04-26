import Button from '@/components/button';

export default function About() {
	return (
		<div className="relative tertiary">
			<div className="tertiary -rotate-2 h-20 absolute -top-10 -left-1  w-[105%] will-change-transform"></div>
			<section className=" flex justify-center gap-28 items-center pt-32 pb-56">
				<div className="secondary p-1.5 rounded-lg h-96 w-96">
					<div className="h-full w-full rounded-lg bg-[url('/images/profile-picture.jpg')] bg-cover bg bg-center"></div>
				</div>
				<div className="flex items-center flex-col gap-7 w-md text-justify">
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
