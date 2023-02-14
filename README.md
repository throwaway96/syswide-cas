# @small-tech/syswide-cas

___Note: this is a fork of the original module being maintained by [Aral Balkan](https://ar.al) of [Small Technology Foundation](https://small-tech.org) as the original company seems to have gone out of business.___

Enables Node.js to use custom Certificate Authorities (CAs) _alongside_ the bundled root CAs.

Until version 7, Node did not support system-wide installed trusted CAs. You could only specify a custom CA via the `ca` option in the `tls` and `https` modules or fallback to using the bundled list of root CAs Node is compiled with.

Starting with version 7, it’s possible to set the `NODE_EXTRA_CA_CERTS` environment variable to a single file containing an additional root CA to trust, however it still does not allow programmatic addition of several directories and files containing root CAs.

This module enables custom CAs to be used _alongside_ the root CAs bundled with Node.

> 💡 syswide-cas will automatically load root CAs from the file `/etc/ssl/ca-node.pem` if it exists.


## Install

```
npm i @small-tech/syswide-cas
```

## Use

> 💡 Import `@small-tech/syswide-cas` before any TLS calls if you use dynamic imports.

```javascript
// Importing syswide-cas automatically loads Certificate Authorities (CAs) from the file _/etc/ssl/ca-node.pem_ if it exists
import syswideCas from '@small-tech/syswide-cas'

// Optionally, load all files from a custom directory.
syswideCas.addCAs('/my/custom/path/to/certs/dir')

// Or multiple directories.
syswideCas.addCAs(['/my/custom/path/to/certs/dir1', '/my/other/path/to/certs/dir2'])

// Optionally, load a file directly.
syswideCas.addCAs('/my/custom/path/to/cert.pem')

// Or multiple files.
syswideCas.addCAs(['/my/custom/path/to/cert1.pem', '/my/other/path/to/cert2.pem'])

import https from 'node:https'
https.get('https://my.custom.domain.com/with/self/signed/cert')
```

## Test

```js
npm -s test
```

## License

Copyright 2021-present Aral Balkan, Small Technology Foundation.
Copyright 2016 Capriza.

Code released under the [MIT license](LICENSE.md)
