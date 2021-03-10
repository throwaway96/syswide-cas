const test = require('tape')
const syswidecas = require("../index")
const https = require('https')
const path = require('path')

test('sanity', async t => {
  // Expect page with known valid certificate to load.
  t.true(await canLoad('https://mozilla-modern.badssl.com/'), 'page with known valid certificate loads')

  // Expect self-signed certificate to be rejected before using syswide-cas.
  t.false(await canLoad('https://self-signed.badssl.com/'), 'page with self-signed certificate does not load without syswide-cas')

  t.end()
})

test('functional', async t => {
  // Expect self-signed certificate to be accepted after using syswide-cas.
  syswidecas.addCAs(path.join(__dirname, 'fixtures', 'self-signed.badssl.com.pem'))
  t.true(await canLoad('https://self-signed.badssl.com/'), 'page with self-signed certificate loads with syswide-cas')
  t.end()
})

function canLoad(url) {
  return new Promise((resolve, reject) => {
    https.get(url, response => {
      if (response.statusCode !== 200) reject(`Unexpected status code: ${response.statusCode}`)
      response.on('data', () => {}) // necessary even if noop or end won’t get emitted.
      response.on('end', () => { resolve(response.statusCode === 200) })
    }).on('error', error => {
      if (error.code === 'DEPTH_ZERO_SELF_SIGNED_CERT') {
        // Expected error if syswide-cas isn’t working.
        resolve(false)
      } else {
        // Unexpected error.
        reject(error)
      }
    })
  })
}
