# npm-package-json-lint-config-tnw

npm-package-json-lint-config-tnw contains a strict package-json-lint configuration for apps and libraries.

## Status

| Category         | Status                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------- |
| Version          | [![npm](https://img.shields.io/npm/v/npm-package-json-lint-config-tnw)](https://www.npmjs.com/package/npm-package-json-lint-config-tnw)       |
| Dependencies     | ![David](https://img.shields.io/david/thenativeweb/npm-package-json-lint-config-tnw)                                          |
| Dev dependencies | ![David](https://img.shields.io/david/dev/thenativeweb/npm-package-json-lint-config-tnw)                                      |
| Build            | ![GitHub Actions](https://github.com/thenativeweb/npm-package-json-lint-config-tnw/workflows/Release/badge.svg?branch=master) |
| License          | ![GitHub](https://img.shields.io/github/license/thenativeweb/npm-package-json-lint-config-tnw)                                |

## Installation

```shell
$ npm install npm-package-json-lint-config-tnw \
              npm-package-json-lint
```

## Quick Start

This module contains a very strict package-json-lint configuration, one for apps and one for libraries. It aims to eradicate _any_ variation in your `package.json` files. It intends to make your package manifests look uniform, enforce that certain fields exist and prevent you from accidentally installing non-strict dependencies. This helps you to narrow down your focus to pure content, as you do not have to think about the order of fields or which fields you need any more. There is very little difference between the config variant for apps and the one for libraries; The difference is mainly that libraries expose an entry point for code imports, while apps expose an executable.

To use one of those configurations, create a `.npmpackagejsonlintrc.json` file in your project and use the `extends` keyword:

```json
{
  "extends": "npm-package-json-lint-config-tnw/lib"
}
```

Alternatively, you may also use `npm-package-json-lint-config-tnw/app`.

If you want to override any rules, you can do so in your configuration file.

## Running quality assurance

To run quality assurance for this module use [roboter](https://www.npmjs.com/package/roboter):

```shell
$ npx roboter
```
