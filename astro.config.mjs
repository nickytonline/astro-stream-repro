import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/edge-functions';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-edge-stream.netlify.app',
  output: 'server',
  adapter: netlify(),
});
