import Carousel from '@/components/carousel';
import Pack from '@/components/pack';

const packs = [
	{
		title: 'Pack starter',
		subtitle: 'Site vitrine',
		price: '1400€ HT',
		properties: ['3 pages', 'Animations', 'Responsive'],
	},
	{
		title: 'Pack premium',
		subtitle: 'Site e-commerce',
		price: '3000€ HT',
		properties: ['Pages produits', 'Panier', 'Animations', 'Responsive'],
	},
	{
		title: 'Pack essentiel',
		subtitle: 'Site vitrine',
		price: '2000€ HT',
		properties: ['10 pages', 'Animations', 'Responsive'],
	},
	{
		title: 'Projet personnalisé',
		subtitle: 'Site sur mesure',
	},
];

const packsLeft = packs.slice(0, Math.floor(packs.length / 2));
const packsRight = packs.slice(Math.floor(packs.length / 2), packs.length);

export default function Packs() {
	return (
		<section className="primary relative">
			<div className="absolute -left-1 -top-10 w-[105%] z-10 -rotate-2 will-change-transform">
				<Carousel
					items={[
						'Votre projet',
						'On en discute',
						'Votre projet',
						'On en discute',
					]}
					separator="*"
				/>
			</div>
			<div className="py-40 w-5xl mx-auto">
				<h2 className="font-bold mb-9">Packs</h2>
				<div className="flex flex-row gap-5 items-end justify-center">
					<div className="flex items-stretch flex-col gap-5 justify-center w-2/4">
						{packsLeft.map((pack, index) => (
							<Pack
								key={index}
								title={pack.title}
								subtitle={pack.subtitle}
								price={pack.price}
								properties={pack.properties}
							/>
						))}
					</div>
					<div className="flex flex-col gap-5 items-stretch justify-center w-2/4">
						{packsRight.map((pack, index) => (
							<Pack
								key={index}
								title={pack.title}
								subtitle={pack.subtitle}
								price={pack.price}
								properties={pack.properties}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
