export default function CatalogBanner() {
	return (
		<section className="primary relative h-96 flex flex-col items-center justify-center gap-3 text-center">
			<h1 className="font-bold">Catalogue</h1>
			<h2>Découvrez mes projets</h2>
			<div className="primary -rotate-2 h-20 absolute -bottom-10 -left-1  w-[105%] will-change-transform"></div>
		</section>
	);
}
