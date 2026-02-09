import { defineConfig, Plugin } from 'vite';
import { compression } from 'vite-plugin-compression2';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';
import fs from 'fs';

// Plugin to serve static files from parent directories
function serveStatic(): Plugin {
  const parentDir = path.resolve(__dirname);

  return {
    name: 'serve-static-parent',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // Strip query params and get clean URL
        const url = (req.url || '').split('?')[0];

        // Serve data/, man_pages/, tldr_pages/, cheatsheets/ from parent
        if (url.startsWith('/data/') || url.startsWith('/man_pages/') ||
            url.startsWith('/tldr_pages/') || url.startsWith('/cheatsheets/') ||
            url.startsWith('/themes/')) {
          const filePath = path.join(parentDir, decodeURIComponent(url));

          try {
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              const content = fs.readFileSync(filePath);
              const ext = path.extname(filePath);

              const mimeTypes: Record<string, string> = {
                '.js': 'application/javascript',
                '.json': 'application/json',
                '.txt': 'text/plain; charset=utf-8',
                '.md': 'text/plain; charset=utf-8',
                '.css': 'text/css'
              };

              res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
              res.end(content);
              return;
            }
          } catch (e) {
            console.error('Error serving file:', filePath, e);
          }
        }

        next();
      });
    }
  };
}

export default defineConfig({
  base: process.env.BASE_URL || '/Pages/',
  root: 'src',
  publicDir: '../public',
  server: {
    fs: {
      allow: ['..']
    }
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    target: 'es2020',
    minify: 'esbuild'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    serveStatic(),
    compression({ algorithm: 'gzip', exclude: [/\.(br)$/, /\.(gz)$/] }),
    compression({ algorithm: 'brotliCompress', exclude: [/\.(br)$/, /\.(gz)$/] }),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
        runtimeCaching: [
          {
            urlPattern: /^.*\/man_pages\/.*\.txt$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'manpages-cache',
              expiration: { maxEntries: 200, maxAgeSeconds: 30 * 24 * 60 * 60 }
            }
          },
          {
            urlPattern: /^.*\/data\/options\/.*\.json$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'options-cache',
              expiration: { maxEntries: 30, maxAgeSeconds: 7 * 24 * 60 * 60 }
            }
          },
          {
            urlPattern: /^.*\/tldr_pages\/.*\.md$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'tldr-cache',
              expiration: { maxEntries: 100, maxAgeSeconds: 7 * 24 * 60 * 60 }
            }
          }
        ]
      },
      manifest: {
        name: 'Fathom',
        short_name: 'Fathom',
        description: 'Lightning-fast offline Linux man pages browser',
        theme_color: '#1e1e2e',
        background_color: '#1e1e2e',
        display: 'standalone',
        icons: [
          { src: 'favicon-128x128.png', sizes: '128x128', type: 'image/png' },
          { src: 'favicon-256x256.png', sizes: '256x256', type: 'image/png' }
        ]
      }
    })
  ],
  worker: {
    format: 'es'
  }
});
