const editOnGithub = require('../.eleventy.js');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(editOnGithub, {
    // required
    github_edit_repo:
      'https://github.com/christopherpickering/eleventy-plugin-edit-on-github/',
    // optional params: default value
    github_edit_path: '/sample/', // location in git url
    github_edit_branch: 'master',
    github_edit_text: 'Edit on Github', // html accepted
    github_edit_class: 'edit-on-github',
    github_edit_tag: 'a',
    github_edit_attributes: 'target="_blank" rel="noopener"',
    github_edit_wrapper: undefined, //ex: "<div stuff>${edit_on_github}</div>"
  });
};
