import CatalogBanner from '@/sections/catalog-banner';
import CatalogFilteredProjects from '@/sections/catalog-filtered-projects';
import { GetStaticPropsContext } from 'next';
export default function CatalogPage() {
	return (
		<>
			<CatalogBanner />
			<CatalogFilteredProjects />
		</>
	);
}
export async function getStaticProps(context: GetStaticPropsContext) {
	return {
		props: {
			messages: (
				await import(`../../messages/${context.locale || 'fr'}.json`)
			).default,
		},
	};
}
