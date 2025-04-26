export default function Header() {
	return (
		<header
			className="header sticky top-0 z-50 primary flex justify-between items-center
		py-3.5 px-7"
		>
			<h4 className="font-bold">Valentin Benedet</h4>
			<nav>
				<ul className="flex items-center justify-between uppercase gap-10">
					<a href="/catalog">
						<li>Catalogue</li>
					</a>

					<a href="/about">
						<li>À propos</li>
					</a>

					<a href="/contact">
						<li>Contact</li>
					</a>

					<a href="/cart">
						<li>
							<button className="button">Cart</button>
						</li>
					</a>
				</ul>
			</nav>
		</header>
	);
}
