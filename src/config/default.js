/* @flow */

module.exports = {
  host: process.env.NODE_HOST || 'localhost', // Define your host from 'package.json'
  port: process.env.PORT,
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'React Cool Starter',
    titleTemplate: 'React Cool Starter - %s',
    meta: [
      {
        name: 'description',
        content: 'The best react universal starter boilerplate in the world.'
      },
      {
        name: 'theme-color',
        content: '#2196f3'
      }
    ],
    link: [
      {
        rel: 'manifest',
        href: '/assets/manifest.json'
      }
    ]
  }
};
