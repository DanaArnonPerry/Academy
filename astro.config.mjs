// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://starlight.astro.build/reference/configuration/
// On Vercel (VERCEL=1 at build time) the site is served from the domain root;
// on GitHub Pages it is a project site under /Academy.
const onVercel = process.env.VERCEL === '1';

export default defineConfig({
	site: onVercel ? undefined : 'https://danaarnonperry.github.io',
	base: onVercel ? '/' : '/Academy',
	integrations: [
		starlight({
			title: 'מאגר ידע',
			logo: {
				light: './src/assets/logo-light.png',
				dark: './src/assets/logo-dark.png',
				alt: '2D.point',
			},
			social: [
				{ icon: 'external', label: '2D.point', href: 'https://2dpoint.co.il' },
			],
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
