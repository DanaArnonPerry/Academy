// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://starlight.astro.build/reference/configuration/
export default defineConfig({
	site: 'https://danaarnonperry.github.io',
	base: '/academy',
	integrations: [
		starlight({
			title: 'מאגר ידע',
			defaultLocale: 'root',
			locales: {
				root: { label: 'עברית', lang: 'he', dir: 'rtl' },
			},
			lastUpdated: true,
			pagination: true,
			sidebar: [
				{
					label: 'מאגר ידע',
					items: [
						{ label: 'בית', link: '/' },
						{ label: 'תהליכי עבודה', slug: 'workflows' },
					],
				},
				{
					label: 'תחומים',
					items: [
						{ label: 'GitHub', slug: 'github' },
						{ label: 'Anthropic', slug: 'anthropic' },
						{ label: 'Vercel', slug: 'vercel' },
						{ label: 'Supabase', slug: 'supabase' },
					],
				},
			],
		}),
	],
});
