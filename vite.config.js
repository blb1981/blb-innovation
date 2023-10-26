const path = require('path')
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
  },
  server: {
    port: 8080,
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'email-sent.html',
          dest: '.',
        },
        {
          src: 'email.php',
          dest: '.',
        },
      ],
    }),
  ],
}
