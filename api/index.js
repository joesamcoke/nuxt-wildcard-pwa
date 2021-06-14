// import vuex from 'vuex'
// import $store from '../store'
// const express = require('express')
// const app = express()
// express.json()
import {store} from '../store'

export default {
  path: '/manifest.json',
  handler(req, res) {
    // app.use(bodyParser.json())
    console.log(store)
    const manifest = {
      "name": "dynamic/wildcard subdomains",
      "short_name": "dynamic/wildcard subdomains",
      "description": "A nuxt app to show dynamic/wildcard subdomains",
      "icons": [
        {
          "src": "/_nuxt/icons/icon_64x64.5f6a36.png",
          "sizes": "64x64",
          "type": "image/png",
          "purpose": "any maskable"
        },
        {
          "src": "/_nuxt/icons/icon_120x120.5f6a36.png",
          "sizes": "120x120",
          "type": "image/png",
          "purpose": "any maskable"
        },
        {
          "src": "/_nuxt/icons/icon_144x144.5f6a36.png",
          "sizes": "144x144",
          "type": "image/png",
          "purpose": "any maskable"
        },
        {
          "src": "/_nuxt/icons/icon_152x152.5f6a36.png",
          "sizes": "152x152",
          "type": "image/png",
          "purpose": "any maskable"
        },
        {
          "src": "/_nuxt/icons/icon_192x192.5f6a36.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "any maskable"
        },
        {
          "src": "/_nuxt/icons/icon_384x384.5f6a36.png",
          "sizes": "384x384",
          "type": "image/png",
          "purpose": "any maskable"
        },
        {
          "src": "/_nuxt/icons/icon_512x512.5f6a36.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "any maskable"
        }
      ],
      "start_url": "/?standalone=true",
      "display": "standalone",
      "background_color": "#ffffff",
      "lang": "en"
    }
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(manifest, null, 3));
  }
}
