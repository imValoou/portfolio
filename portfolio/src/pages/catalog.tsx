import CatalogBanner from '@/sections/catalog-banner';
import CatalogFilteredProjects from '@/sections/catalog-filtered-projects';

export default function CatalogPage() {
	return (
		<>
			<CatalogBanner />
			<CatalogFilteredProjects />
		</>
	);
}
