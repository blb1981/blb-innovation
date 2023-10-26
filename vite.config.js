const path = require('path')
const { resolve } = require('path')
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        other: resolve(__dirname, 'src/email-sent.html'),
      },
    },
    outDir: '../dist',
  },
  server: {
    port: 8080,
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'email.php',
          dest: '.',
        },
      ],
    }),
  ],
}
