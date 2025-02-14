// @ts-check
import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'My Docs',
        social: {
            github: 'https://github.com/withastro/starlight',
        },
        sidebar: [
            // {
            // 	label: 'Guides',
            // 	items: [
            // 		// Each item here is one entry in the navigation menu.
            // 		{ label: 'Example Guide', slug: 'guides/example' },
            // 	],
            // },
            {
                label: 'Data Protection',
                autogenerate: { directory: 'Data_Protection' },

            },
            {
                label: 'Incident Management',
                autogenerate: { directory: 'Incident_Management' },
            },
            {
                label: 'Information Security',
                autogenerate: { directory: 'Information_Security' },
            },
            {
                label: 'Meetings',
                autogenerate: { directory: 'Meetings' },
            },
            {
                label: 'Quality Management',
                autogenerate: { directory: 'Quality_Management' },
            },
            {
                label: 'Risk Management',
                autogenerate: { directory: 'Risk_Management' },
            },
        ],
		}), markdoc()],
		...(process.env.GITHUB_ACTIONS && {
			site: 'https://replete.github.io',
			base: '/experimental-starlight',
		  }),
});
