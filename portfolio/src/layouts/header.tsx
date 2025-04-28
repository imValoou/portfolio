import { ShoppingCartSimple } from 'phosphor-react';

export default function Header() {
	return (
		<header
			className="header sticky top-0 z-50 primary flex justify-between items-center
		py-3.5 px-7"
		>
			<h4 className="font-bold">Valentin Benedet</h4>
			<nav>
				<ul className="flex items-center justify-between uppercase gap-10">
					<a href="/catalog" className="cursor-pointer">
						<li>Catalogue</li>
					</a>

					<a href="/about" className="cursor-pointer">
						<li>À propos</li>
					</a>

					<a href="/contact" className="cursor-pointer">
						<li>Contact</li>
					</a>

					<a href="/cart" className="cursor-pointer">
						<li>
							<button className="secondary border-2 border-[var(--light-green)] p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--white)]  transition-colors duration-200 ease-in-out">
								<ShoppingCartSimple size={24} weight="fill" />
							</button>
						</li>
					</a>
				</ul>
			</nav>
		</header>
	);
}
