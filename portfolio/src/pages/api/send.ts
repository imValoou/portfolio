import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { data, error } = await resend.emails.send({
		from: 'Acme <onboarding@resend.dev>',
		to: ['delivered@resend.dev'],
		subject: 'Hello world',
		react: await EmailTemplate({
			name: 'John',
			email: 'test@test.com',
			message: 'test',
		}),
	});

	if (error) {
		return res.status(400).json(error);
	}

	res.status(200).json(data);
};
