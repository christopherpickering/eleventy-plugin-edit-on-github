<h1 align="center">eleventy-plugin-edit-on-github</h1>

<h4 align="center">An Eleventy <a href="https://www.11ty.dev/docs/shortcodes/">shortcode</a> to add an "Edit on Github" link to your pages.</h4>

<p align="center">
    <a href="https://twitter.com/intent/tweet?text=eleventy-plugin-edit-on-github%20%7C%20An%20Eleventy%20shortcode%20to%20add%20an%20%22Edit%20on%20Github%22%20link%20to%20your%20pages.&url=https://www.npmjs.com/package/eleventy-plugin-edit-on-github&hashtags=eleventy,eleventy-plugin,github"><img alt="tweet" src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social" /></a>
    <a href="https://www.npmjs.com/package/eleventy-plugin-edit-on-github"><img alt="npm" src="https://img.shields.io/npm/v/eleventy-plugin-edit-on-github"></a>
</p>

## 🚀 Installation

Install from [npm](https://www.npmjs.com/package/eleventy-plugin-edit-on-github):

```bash
npm i -D eleventy-plugin-edit-on-github
```

## 😎 What does it do?

This is a very useful tool for documentation sites where you'd like your readers to point out updates easily. Add an "Edit on Github" link to your pages that will directly open the github editor for your source files!

## 🏃 Usage

Simply add this shortcode in your templates where you would like the link to appear.

```
{% gh_edit page %}
```

## ⚙️ Configuration

This plugin has one required parameter `github_edit_repo`, which should be the link to your github repository. If files are not at the root, you can also add the `github_edit_path` parameter.

Add to your Eleventy config file:

```js
const editOnGithub = require('eleventy-plugin-edit-on-github');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(editOnGithub, {
    // required
    github_edit_repo: 'https://github.com/christopherpickering/going-bg',
    // optional: defaults
    github_edit_path: undefined, // non-root location in git url. root is assumed
    github_edit_branch: 'master',
    github_edit_text: 'Edit on Github', // html accepted
    github_edit_class: 'edit-on-github',
    github_edit_tag: 'a',
    github_edit_attributes: 'target="_blank" rel="noopener"',
    github_edit_wrapper: undefined, //ex: "<div stuff>${edit_on_github}</div>"
  });
};
```

Check out the [sample](https://github.com/christopherpickering/eleventy-plugin-edit-on-github/sample/) site, or clone and run locally with `npm test`.
