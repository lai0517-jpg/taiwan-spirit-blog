import { defineConfig } from 'astro/config';

// Set site/base for the new deployment target before publishing.
export default defineConfig({
  output: 'static'
});
