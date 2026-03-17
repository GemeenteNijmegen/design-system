import type { StorybookConfig } from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  stories: ['../src/**/*.mdx', '../src/**/*.@(stories.@(js|jsx|ts|tsx))'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/preset-scss',
    '@etchteam/storybook-addon-status',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-controls',
    '@storybook/addon-themes',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  staticDirs: ['../../../proprietary/assets/src'],
  docs: {
    autodocs: true,
  },
  features: {
    buildStoriesJson: true,
    storyStoreV7: true,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      define: { 'process.env': {} },
      css: {
        preprocessorOptions: {
          scss: {
            includePaths: ['node_modules'],
          },
        },
      },
    });
  },
};

export default config;
