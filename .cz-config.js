process.env.GITMOJI_PATH='.gitmoji.json';

module.exports = {
  types: [
    {
      value: ':tada: init',
      name: 'πͺ  init:      εδΈζδΊ€ foremost'
    },
    {
      value: ':construction: WIP',
      name: 'πͺ  WIP:      Work in progress'
    },
    {
      value: ':sparkles: feat',
      name: 'β¨  feat:     A new feature'
    },
    {
      value: ':bug: fix',
      name: 'π  fix:      A bug fix'
    },
    {
      value: ':hammer: refactor',
      name: 'π¨  refactor: A code change that neither fixes a bug nor adds a feature'
    },
    {
      value: ':pencil: docs',
      name: 'π  docs:     Documentation only changes'
    },
    {
      value: ':white_check_mark: test',
      name: 'β  test:     Add missing tests or correcting existing tests'
    },
    {
      value: ':thought_balloon: chore',
      name: 'π―  chore:    Changes that don\'t modify src or test files. Such as updating build tasks, package manager'
    },
    {
      value: ':lipstick: ui',
      name: 'π Updating the UI and style files.',
    },
    {
      value: ':art: style',
      name:
        'π¨ Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    },
    {
      value: 'revert',
      name: 'βͺ  revert:   Revert to a commit'
    },
    {
      value: ':package: dep_up',
      name: 'π¦ Updating compiled files or packages.',
    },
    {
      value: ':green_heart: fixci',
      name: 'π Fixing CI Build.',
    },
    {
      value: ':truck: mv',
      name: 'π Moving or renaming files.',
    },
    {
      value: ':fire: prune',
      name: 'π₯ Removing code or files.',
    },
    {
      value: ':bookmark: release',
      name: 'π Releasing / Version tags.',
    },
    {
      value: ':rocket: first release',
      name: 'π first releast!',
    }
  ],

  scopes: [],

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"]
};

