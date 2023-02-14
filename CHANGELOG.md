# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [6.0.2] - 2023-02-14

Minor odds and ends.

### Changed

  - Updated repository and web page links in package file to point to Codeberg.
  - Updated examples in the readme to use EcmaScript Modules.
  - Proof-read and edited readme.

## [6.0.1] - 2023-02-14

The one with Chris Wood’s fix.

### Fixed

  - Includes [Chris Wood’s fix for TypeError: Cannot read properties of undefined (reading 'ca')](https://github.com/small-tech/syswide-cas/issues/1)

### Updated

  - Includes latest self-signed.badssl.com certificate for use in tests (the previous one had expired and tests were failing because of that).

## [6.0.0] - 2021-03-10

Now with passing tests.

### Fixed

  - Tests now passing.

### Changed

  - __Breaking change:__ Forked and package added to @small-tech namespace.
  - Tests now use tape and are written as actual tests.
  - Added note to readme about the fork.

### Updated

  - Tests now use latest certificate for self-signed.badssl.com.

### Added

  - Changelog.

### Removed

   - Defunct link at top of readme.

## [5.3.0] - 2018-08-16

Last pre-fork release

See https://www.npmjs.com/package/syswide-cas (the GitHub links are broken).
