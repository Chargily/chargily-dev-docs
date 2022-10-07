// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chargily Developers Docs',
  tagline: 'We are happy to guide you to integrate Chargily ePay easily into your apps.',
  url: 'https://dev.chargily.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'Chargily', 
  projectName: 'chargily-dev-docs',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/docs/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Chargily/chargily-dev-docs',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Chargily/chargily-dev-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'Chargily ePay logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
          href: '/',
          target: '_self',
        },
        items: [
          // left
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://epay.chargily.com.dz/',
            label: 'Chargily ePay',
            position: 'left',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // right
          {
            href: 'https://github.com/Chargily',
            position: 'right',
            className: "header-github-link",
          },
          {
            href: 'https://www.facebook.com/ChargilyDev/',
            position: 'right',
            className: "header-facebook-link",
          },
          {
            href: 'https://www.instagram.com/ChargilyDev/',
            position: 'right',
            className: "header-instagram-link",
          },
          {
            href: 'https://www.twitter.com/ChargilyDev/',
            position: 'right',
            className: "header-twitter-link",
          },
          {
            href: 'https://t.me/ChargilyDev',
            position: 'right',
            className: "header-telegram-link",
          },

        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Intro',
                to: '/intro',
              },
              {
                label: 'API',
                to: '/epay-api',
              },
              {
                label: 'Addons for programming languages',
                to: '/category/addons-for-programming-languages',
              },
              {
                label: 'Addons for frameworks',
                to: '/category/addons-for-frameworks',
              },
              {
                label: 'WooCommerce Plugin',
                to: '/epay-woocomerce',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/Chargily',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/ChargilyDev/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/ChargilyDev/',
              },
              {
                label: 'Twitter',
                href: 'https://www.twitter.com/ChargilyDev/',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/ChargilyDev',
              },
            ],
          },
          {
            title: 'Chargily ePay',
            items: [
              {
                label: 'Website',
                href: 'https://epay.chargily.com.dz',
              },
              {
                label: 'Sign Up',
                href: 'https://epay.chargily.com.dz/register',
              },
              {
                label: 'Login',
                href: 'https://epay.chargily.com.dz/login',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Chargily`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      image: 'static/img/metaImage.jpg',
    }),
};

module.exports = config;
