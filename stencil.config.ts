import { Config } from '@stencil/core';
import babel from '@rollup/plugin-babel';

export const config: Config = {
    namespace: 'calloquy-document-viewer',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'dist-custom-elements',
            // copy: [
            //     {
            //         src: './src/pdf',
            //         dest: 'dist/components/assets',
            //         warn: true,
            //     }
            // ]
        },
        {
            type: 'docs-readme',
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
        },
    ],
    srcDir: 'web',
    rollupPlugins: {
        before: [
            babel({
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-class-properties']
            })
        ]
    }
};
