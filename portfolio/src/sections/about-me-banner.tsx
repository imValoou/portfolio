import AngledSeparator from '@/components/angled-separator';

export default function AboutMeBanner() {
	return (
		<section className="primary relative h-96 flex flex-col items-center justify-center gap-3 text-center">
			<div className="flex flex-col gap-2 max-w-xl">
				<h1 className="font-bold ">About me</h1>
				<h2>From full-stack dev to parachutist artilleryman</h2>
			</div>
			<AngledSeparator
				color="primary"
				orientation="to-left"
				position="bottom"
			/>
		</section>
	);
}
