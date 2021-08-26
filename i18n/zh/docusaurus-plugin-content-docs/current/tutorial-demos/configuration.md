---
sidebar_position: 1
---

# 設定檔

[API Link](https://docusaurus.io/docs/docusaurus.config.js)

**docusaurus.config.js** contains configurations for your site and is placed in the root directory of your site.

- title
- baseUrl
- favicon

```json=
{
  title: 'Doc Demo',
  tagline: 'Docusaurus is cool',
  // url: 'https://docusaurus-my-demo.vercel.app',
  url: 'https://shihtingli.guthub.io',
  baseUrl: '/docusaurus-my-demo/',
  favicon: 'img/tsmc.svg.ico',
  organizationName: 'shihtingli', // Usually your GitHub org/user name.
  projectName: 'docusaurus-my-demo', // Usually your repo name.
  projectName: 'docusaurus-my-demo', // Usually your repo name.
//...
}
```

## Theme Configuration

```json=
themeConfig: {
    // ...
    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',
    // ...
    }
}

```

- navbar

```json=
themeConfig: {
   //...
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
          //dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          dropdownActiveClassDisabled: true,
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        //{
        //  type: 'doc',
        //  docId: 'tutorial-basics/create-a-page',
        //  position: 'left',
        //  label: 'create a page',
        //},
        {to: '/demo', label: 'Demo Page', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },

```

- footer

```json=
footer: {
      style: 'dark',
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/Tsmc.png',
        href: 'https://opensource.facebook.com',
      },
      copyright: `Copyright © Taiwan Semiconductor Manufacturing Company Limited${new Date().getFullYear()} All Rights Reserved.`,
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
        // ...
      ],

    },

```

### Plugin

- editUrl

```json=
 presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/shihtingli/docusaurus-my-demo/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/shihtingli/docusaurus-my-demo/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

```

---
