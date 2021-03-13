# Google / Google Workspace Browserslist Shared Config

This configuration reflects Google's supported browser policy for their suite of web applications.

[![NPM](https://nodei.co/npm/browserslist-config-google.png)](https://www.npmjs.com/package/browserslist-config-google)

## What is Browserslist?

Share browsers list between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env.

- [Browserslist](https://github.com/ai/browserslist) (Github repo)
- [browserl.ist](http://browserl.ist) (Browserslist query syntax validation)
- ["Browserslist is a Good Idea"](https://css-tricks.com/browserlist-good-idea/) (blog post by [@chriscoyier](https://github.com/chriscoyier))

## Browser support

Google Workspace dropped support for Internet Explorer on [March 15th, 2021](https://workspaceupdates.googleblog.com/2021/02/reminder-ending-support-for-ie11-for.html)

(Gmail, Calendar, Meet, Chat, Drive, Docs, Sheets, Slides, Forms, Sites, [etc.](https://workspace.google.com))

### Desktop browsers [[policy](https://support.google.com/a/answer/33864)]

- Chrome
- Firefox
- Safari
- Edge

### Mobile [[policy](https://support.google.com/a/answer/6288871)]

- Chrome for Android _(caniuse data caveat: best covered by matching desktop Chrome versions)_
- iOS Safari

## Usage

### package.json

```json
{
  "browserslist": ["extends browserslist-config-google"]
}
```

## Alternative configuration

If you need:

- `browserslist-config-google/gdocs`
- `browserslist-config-google/modern`
- `browserslist-config-google/no-ie`
- `browserslist-config-google/popular`

... continue using [v2.0.0](https://github.com/awkaiser/browserslist-config-google/tree/2.0.0)
