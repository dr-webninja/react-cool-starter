import path from 'path';

module.exports = {
  manifest_version: 1,
  name: 'My Progressive Web App',
  fingerprints: true,
  short_name: 'MyPWA',
  description: 'My awesome Progressive Web App!',
  theme_color: '#2196f3',
  background_color: '#2196f3',
  dir: 'auto',
  lang: 'en-US',
  inject: false,
  display: 'standalone',
  orientation: 'any',
  prefer_related_applications: false,
  related_applications: [
    {
      platform: 'play',
      url: 'https://play.google.com/store/apps/details?id=com.example.app1',
      id: 'com.example.app1'
    },
    {
      platform: 'itunes',
      url: 'https://itunes.apple.com/app/example-app1/id123456789'
    }
  ],
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
