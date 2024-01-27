import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Mekstack Docs',
  tagline: 'Mekstack Docs',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/andruasha/docusaurus-example/tree/main',
        },
        blog: false,
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
          src: 'https://storage.yandexcloud.net/mekstack-static/mekstack-logo.svg',
        },
        items: [
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
