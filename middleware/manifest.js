export default function({ app }) {
const manifestSrc = 'http://' + app.store.state.url.subdomain + '.' + app.store.state.url.rootdomain + '/api/manifest.json'

  if (process.server) {
    app.head.link.push({
      hid: 'manifest',
      rel: 'manifest',
      src: manifestSrc,
      async: true
    })
  }
}