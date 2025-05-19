import { useTranslations } from 'next-intl';
import React from 'react';

import Button from './button';

interface ContactFormProps {
	formData: {
		name: string;
		email: string;
		message: string;
	};
	handleChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	handleSubmit: (e: React.FormEvent) => void;
	isSubmitted: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({
	formData,
	handleChange,
	handleSubmit,
	isSubmitted,
}) => {
	const t = useTranslations();
	return (
		<div className="max-w-2xl mx-auto">
			<form onSubmit={handleSubmit} className="flex flex-col gap-6">
				<div>
					<label htmlFor="name" className="block mb-2">
						<p>{t('ContactForm.Name')}</p>
					</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder={t('ContactForm.Placeholder.Name')}
						value={formData.name}
						onChange={handleChange}
						required
						className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--light-green)]"
					/>
				</div>

				<div>
					<label htmlFor="email" className="block mb-2">
						<p>{t('ContactForm.Email')}</p>
					</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder={t('ContactForm.Placeholder.Email')}
						value={formData.email}
						onChange={handleChange}
						required
						className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				<div>
					<label htmlFor="message" className="block mb-2">
						<p>{t('ContactForm.Message')}</p>
					</label>
					<textarea
						id="message"
						name="message"
						placeholder={t('ContactForm.Placeholder.Message')}
						value={formData.message}
						onChange={handleChange}
						required
						className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						rows={4}
					/>
				</div>

				<Button
					path="#"
					submit={true}
					type="primary"
					text={t('ContactForm.Submit')}
				/>
			</form>

			{isSubmitted && (
				<div className="mt-4 text-green-600 text-center">
					{t('ContactForm.Success')}
				</div>
			)}
		</div>
	);
};

export default ContactForm;
