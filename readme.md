<h1 align="center">eleventy-plugin-edit-on-github</h1>

<h4 align="center">An Eleventy <a href="https://www.11ty.dev/docs/shortcodes/">shortcode</a> to add an "Edit on Github" link to your pages.</h4>

## 🚀 Installation

```
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

Check out the [sample](https://github.com/christopherpickering/eleventy-plugin-edit-on-github/sample/) site, or clone and run locally with `npm test`.

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
