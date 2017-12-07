# Google / G Suite Browserslist Shared Config

This configuration reflects Google's supported browser policy for their suite of web applications.

[![NPM](https://nodei.co/npm/browserslist-config-google.png)](https://www.npmjs.com/package/browserslist-config-google)

## What is Browserslist?

Share browsers list between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env.

* [Browserslist](https://github.com/ai/browserslist) (Github repo)
* [browserl.ist](http://browserl.ist) (Browserslist query syntax validation)
* ["Browserslist is a Good Idea"](https://css-tricks.com/browserlist-good-idea/) (blog post by [@chriscoyier](https://github.com/chriscoyier))

## Browser support

### Desktop browsers [[policy](https://support.google.com/a/answer/33864)]

* Chrome 
* Firefox
* Safari
* Edge
* IE 11 _(can be excluded via `browserslist-config-google/no-ie`)_

### Mobile [[policy](https://support.google.com/a/answer/6288871)]

* Chrome for Android
* iOS Safari

## Usage

### package.json

```json
{
  "browserslist": [
    "extends browserslist-config-google"
  ]
}
```

## Alternative configuration

Last `n` versions or `>= [version]`

| Config | Chrome | Firefox | Safari | Edge | IE  | ChromeAndroid | iOS |
| :----- | :----: | :-----: | :----: | :--: | :-: | :-----: | :-: |
| [`browserslist-config-google`](http://browserl.ist/?q=last+1+Chrome+versions%2C+last+2+Firefox+versions%2C+last+2+Safari+versions%2C+last+2+Edge+versions%2C+last+1+IE+versions%2C+last+3+ChromeAndroid+versions%2C+last+2+iOS+versions) | 1 | 2 | 2 | 2 | 1 | 3 | 2 |
| [`browserslist-config-google/no-ie`](http://browserl.ist/?q=last%201%20Chrome%20versions%2C%20last%202%20Firefox%20versions%2C%20last%202%20Safari%20versions%2C%20last%202%20Edge%20versions%2C%20last%203%20ChromeAndroid%20versions%2C%20last%202%20iOS%20versions) | 1 | 2 | 2 | 2 | 0 | 3 | 2 |
| [`browserslist-config-google/gdocs`](http://browserl.ist/?q=last%202%20Chrome%20versions%2C%20last%202%20Firefox%20versions%2C%20last%202%20Safari%20versions%2C%20last%202%20Edge%20versions%2C%20last%202%20IE%20versions%2C%20ChromeAndroid%20%3E%3D%2030%2C%20iOS%20%3E%3D%209) | 2 | 2 | 2 | 2 | 2 | _>= 30_ | _>= 9_ |

There is also [`browserslist-config-google/popular`](http://browserl.ist/?q=Chrome%20%3E%200%2C%20Firefox%20%3E%200%2C%20Safari%20%3E%200%2C%20Edge%20%3E%200%2C%20IE%20%3E%200%2C%20ChromeAndroid%20%3E%200%2C%20iOS%20%3E%200%2C%20not%20%3C%200.5%25) for supporting above browsers with global usage >= 0.5%
