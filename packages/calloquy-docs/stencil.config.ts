import { Config } from '@stencil/core';
import babel from '@rollup/plugin-babel';

export const config: Config = {
  namespace: 'calloquy-docs',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      copy: [
        {
          src: '**/*.{jpg,png,svg}',
          dest: 'dist/components/assets',
          warn: true,
        }
      ]
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  rollupPlugins: {
    before: [
      babel({
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-proposal-class-properties']
      })
    ]
  }
};
