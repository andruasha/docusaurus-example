import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Mekstack Docs',
  tagline: 'Mekstack Docs',
  favicon: 'img/favicon.ico',

  url: 'https://docs.mekstack.ru/',
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
            'https://github.com/mekstack/docs/',
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
      navbar: {
        logo: {
          alt: 'Mekstack Docs',
          src: 'https://storage.yandexcloud.net/mekstack-static/mekstack-logo.svg',
        },
        items: [
          {
            href: 'https://mekstack.ru',
            label: 'Dashboard',
            position: 'left',
          },
          {
            href: 'https://vpnaas.mekstack.ru',
            label: 'VPNaaS',
            position: 'left',
          },
          {
            href: 'https://chat.miem.hse.ru/#narrow/stream/2057',
            label: 'Zulip Chat',
            position: 'left',
          },
          {
            href: 'https://github.com/mekstack/',
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
