import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';
import path from 'path';

export default {
    kit: {
        adapter: vercel(),
        target: 'body',

        vite: {
            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: '@use "src/variables.scss" as *;',
                    },
                },
            },
            resolve: {
                alias: {
                    $lib: path.resolve('./src/lib'),
                    $models: path.resolve('./src/lib/models'),
                    $services: path.resolve('./src/lib/services'),
                    $shared: path.resolve('./src/lib/shared'),
                    $components: path.resolve('./src/lib/components'),
                },
            },
            optimizeDeps: {
                include: ['flex-splitter-directive'],
            },
        },
    },

    preprocess: [
        preprocess({
            scss: {
                prependData: '@use "src/variables.scss" as *;',
            },
        }),
    ],
};