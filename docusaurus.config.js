import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Mekstack Docs',
  tagline: 'Mekstack Docs',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/andruasha/docusaurus-example/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Mekstack Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/andruasha/docusaurus-example',
            label: 'Dashboard',
            position: 'left',
          },
          {
            href: 'https://github.com/andruasha/docusaurus-example',
            label: 'VPNaaS',
            position: 'left',
          },
          {
            href: 'https://github.com/andruasha/docusaurus-example',
            label: 'Zulip Chat',
            position: 'left',
          },
          {
            href: 'https://github.com/andruasha/docusaurus-example',
            label: 'GitHub',
            position: 'left',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
