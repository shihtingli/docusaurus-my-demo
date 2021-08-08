const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'My Demo',
  tagline: 'Dinosaurs are cool',
  // url: 'https://docusaurus-my-demo.vercel.app',
  url: 'https://shihtingli.guthub.io',
  baseUrl: '/docusaurus-my-demo/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-tsmc.ico',
  organizationName: 'shihtingli', // Usually your GitHub org/user name.
  projectName: 'docusaurus-my-demo', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'My Demo',
      logo: {
        alt: 'My Demo Logo',
        src: 'img/Tsmc.png',
      },
      items: [
        {
          //type: 'dropdown', //拿掉此行
          label: 'Community',
          position: 'left',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com',
            },
            // {
            //   type: 'doc',
            //   label: 'Tutorial',
            //   docId: 'intro',
            // },
            {
              label: 'Tutorial',
              to: 'docs/intro',
            },
            // ... more items
          ]
        },
        {
          type: 'docsVersionDropdown',
          position: 'left',
          dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          dropdownActiveClassDisabled: true,
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {
          type: 'doc',
          docId: 'tutorial-basics/create-a-page',
          position: 'left',
          label: 'create a page',
        },
        {to: '/demo', label: 'Demo Page', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
            {
              label: 'Test',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
        {
          title: 'More Demo',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/Tsmc.png',
        href: 'https://opensource.facebook.com',
      },
      copyright: `Copyright © Taiwan Semiconductor Manufacturing Company Limited${new Date().getFullYear()} All Rights Reserved.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
