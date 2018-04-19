import path from 'path';

module.exports = {
  manifest_version: 1,
  name: 'My Progressive Web App',
  fingerprints: true,
  short_name: 'MyPWA',
  description: 'My awesome Progressive Web App!',
  theme_color: '#2196f3',
  background_color: '#2196f3',
  inject: false,
  display: 'standalone',
  start_url: '/',
  scope: '/',
  icons: [
    {
      src: path.resolve(process.cwd(), 'src/app/assets/images/icons/icon.png'),
      sizes: [72, 96, 128, 144, 192, 256, 384, 512],
      type: 'image/png'
    }
  ]
};
