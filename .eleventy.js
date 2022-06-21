module.exports = (eleventyConfig, options = {}) => {
  let github_edit_repo = '';

  if (options.github_edit_repo === undefined) {
    console.error(
      'Plugin eleventy-plugin-edit-on-github requires github_edit_repo option.\n',
    );
  } else {
    github_edit_repo = options.github_edit_repo
      .replace(/\.git$/, '')
      .replace(/^git@(.+?):/, 'https://$1/')
      .replace(/\/$/, '');
  }

  const github_edit_path =
    options.github_edit_path === undefined
      ? ''
      : options.github_edit_path.replace(/^\//, '').replace(/\/$/, '') + '/';
  const github_edit_branch = options.github_edit_branch || 'master';
  const github_edit_text = options.github_edit_text || 'Edit on Github';
  const github_edit_class =
    options.github_edit_class === undefined
      ? 'edit-on-github'
      : options.github_edit_class;
  const github_edit_tag =
    options.github_edit_tag === undefined ? 'a' : options.github_edit_tag;
  const github_edit_attributes =
    options.github_edit_attributes === undefined
      ? 'target="_blank" rel="noopener"'
      : options.github_edit_attributes;
  const github_edit_wrapper = options.github_edit_wrapper;

  eleventyConfig.addShortcode('gh_edit', (value) => {
    const inputPath = value.inputPath.replace(/^\.\//, '');
    const edit_tag = `<${github_edit_tag} class="${github_edit_class}" href="${github_edit_repo}/edit/${github_edit_branch}/${github_edit_path}${inputPath}" ${github_edit_attributes}>${github_edit_text}</${github_edit_tag}>`;

    if (github_edit_wrapper !== undefined) {
      return github_edit_wrapper.replace(/\$\{edit_on_github\}/, edit_tag);
    }

    return edit_tag;
  });
};
