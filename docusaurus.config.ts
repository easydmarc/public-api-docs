import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
import { myCustomApiMdGenerator } from "./customMdGenerators";
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const easydmarcPublicApiSpecPath = 'specs/easydmarc-openapi.json';

const baseUrl = process.env.BASE_URL || '/';

const config: Config = {
  title: 'EasyDMARC',
  tagline: 'API Docs',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://easydmarc.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: baseUrl,

  organizationName: 'easydmarc',
  projectName: 'public-api-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          routeBasePath: '/', // Serve docs at root
          editUrl: 'https://github.com/easydmarc/public-api-docs/edit/main/',
        },
        pages: false, // Disable pages plugin
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    "docusaurus-theme-openapi-docs",
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        docsRouteBasePath: '/',
      },
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          "public-api": {
            label: "Public API",
            baseUrl: "https://api2.easydmarc.com",
            specPath: easydmarcPublicApiSpecPath,
            downloadUrl: 'https://raw.githubusercontent.com/easydmarc/public-api-docs/main/specs/easydmarc-openapi.json',
            outputDir: "docs/public-api",
            showExtensions: true,
            showSchemas: false,
            sidebarOptions: {
              groupPathsBy: "tagGroup",
              categoryLinkSource: "info",
              sidebarCollapsed: true,
              sidebarCollapsible: true,
            },
            // markdownGenerators: { createApiPageMD: myCustomApiMdGenerator },
          } satisfies OpenApiPlugin.Options,
        }
      },
    ]
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      // title: 'EasyDMARC',
      logo: {
        alt: 'EasyDMARC',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'public-api',
          position: 'left',
          label: 'API',
        },
        {href: 'https://easydmarc.com/blog/category/blog', label: 'Blog', position: 'left'},
        {href: 'https://easydmarc.com/tools', label: 'Tools', position: 'left'},
        {href: 'https://github.com/easydmarc/public-api-docs', label: 'GitHub', position: 'right'},
        {type: 'search', position: 'right'},
        {href: 'https://app.easydmarc.com/login', label: 'Log In', position: 'right'},
        {href: 'https://app.easydmarc.com/register', label: 'Sign Up Free', position: 'right', className: 'navbar-signup-btn'},
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'EasyDMARC',
        src: 'img/logo.svg',
        href: 'https://easydmarc.com',
        width: 160,
      },
      links: [
        {
          title: 'API Reference',
          items: [
            { label: 'Getting Started', to: '/public-api/easydmarc-api' },
            { label: 'DNS Lookup', to: '/public-api/dns-lookup-for-a' },
            { label: 'Aggregate Reports', to: '/public-api/get-report-raw-data' },
            { label: 'Organizations', to: '/public-api/create-organization' },
            { label: 'Authentication', to: '/public-api/create-magic-link' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'Academy', href: 'https://academy.easydmarc.com' },
            { label: 'Knowledge Base', href: 'https://easydmarc.com/blog/category/resources/knowledge-base' },
            { label: 'Blog', href: 'https://easydmarc.com/blog/category/blog' },
            { label: 'Free Tools', href: 'https://easydmarc.com/tools' },
            { label: 'Status Page', href: 'https://status.easydmarc.com' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'About EasyDMARC', href: 'https://easydmarc.com' },
            { label: 'EasySender', href: 'https://easydmarc.com/easysender' },
            { label: 'Trust Center', href: 'https://easydmarc.com/trust' },
            { label: 'Careers', href: 'https://easydmarc.com/careers' },
            { label: 'Contact Us', href: 'https://easydmarc.com/contact-us' },
          ],
        },
        {
          title: 'Connect',
          items: [
            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/easydmarc/' },
            { label: 'X (Twitter)', href: 'https://x.com/easydmarc' },
            { label: 'YouTube', href: 'https://youtube.com/channel/UCVqnutdqR6bpMLvAnb3Ycbw' },
            { label: 'Facebook', href: 'https://facebook.com/easydmarc' },
            { label: 'Reddit', href: 'https://reddit.com/r/easydmarc' },
            { label: 'GitHub', href: 'https://github.com/easydmarc/public-api-docs' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EasyDMARC, Inc. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
