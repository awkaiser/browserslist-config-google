# Google / G Suite Browserslist Shared Config

This configuration reflects Google's supported browser policy for their suite of web applications.

## What is Browserslist?

Share browsers list between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env.

* [Browserslist](https://github.com/ai/browserslist) (Github repo)
* [browserl.ist](http://browserl.ist) (Browserslist query syntax validation)
* ["Browserslist is a Good Idea"](https://css-tricks.com/browserlist-good-idea/) (blog post by [@chriscoyier](https://github.com/chriscoyier))

## Browser support

You can review the current interpretation of this configuration at [browserl.ist](http://browserl.ist/?q=last+2+Chrome+major+versions%2C+last+2+Firefox+major+versions%2C+last+2+Safari+major+versions%2C+last+2+Edge+major+versions%2C+ie+11%2C+last+3+ChromeAndroid+major+versions%2C+last+2+iOS+major+versions).

As of December 2017, these browsers are supported:

### Desktop browsers [[policy](https://support.google.com/a/answer/33864)]

* Chrome 62
* Chrome 61
* Edge 16
* Edge 15
* Firefox 56
* Firefox 55
* IE 11 _(can be excluded via `browserslist-config-google/no-ie`)_
* Safari 11
* Safari 10.1
* Safari 10

### Mobile [[policy](https://support.google.com/a/answer/6288871)]

* Chrome for Android 61
* iOS Safari 11
* iOS Safari 10.3
* iOS Safari 10.0-10.2

## Usage

### package.json

```json
{
  "browserslist": [
    "extends browserslist-config-google"
  ]
}
```

:no_entry_sign: _Drop support for Internet Explorer 11_ :no_entry_sign:

```json
{
  "browserslist": [
    "extends browserslist-config-google/no-ie"
  ]
}
```

### .babelrc

```json
{
  "presets": [
    ["env", {
      "targets": {
        "browsers": ["extends browserslist-config-google"]
      },
      "useBuiltIns": "entry"
    }]
  ]
}
```

:no_entry_sign: _Drop support for Internet Explorer 11_ :no_entry_sign:

```json
{
  "presets": [
    ["env", {
      "targets": {
        "browsers": ["extends browserslist-config-google/no-ie"]
      },
      "useBuiltIns": "entry"
    }]
  ]
}
```

You can read more about `babel-polyfill` and `useBuiltIns` in the [docs for **babel-preset-env**](https://github.com/babel/babel-preset-env/blob/13ea687a49df93f0cc53cd9334c8bee38a4a59b2/README.md#browserslist-support).
