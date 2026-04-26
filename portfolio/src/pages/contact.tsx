import { GetStaticPropsContext } from 'next';
import ContactSection from '../sections/contact';

const ContactPage = () => {
	return (
		<>
			<div className="h-24"></div>
			<ContactSection />
			<div className="h-24"></div>
		</>
	);
};

export default ContactPage;
export async function getStaticProps(context: GetStaticPropsContext) {
	return {
		props: {
			messages: (
				await import(`../../messages/${context.locale || 'fr'}.json`)
			).default,
		},
	};
}
